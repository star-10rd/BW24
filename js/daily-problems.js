// daily-problems.js

const { DateTime } = luxon;

// Initialize Supabase Client
const SUPABASE_URL = 'https://vzdmgksatjkogfhedqey.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZ6ZG1na3NhdGprb2dmaGVkcWV5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mjg0MDE2NDEsImV4cCI6MjA0Mzk3NzY0MX0.TLB8FIKi73I7JXeKXHQ-FhczkRYJpxqcSkNceSSu4ag';

const supabaseClient = supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

document.addEventListener('DOMContentLoaded', () => {
    const currentDateElement = document.getElementById('current-date');
    const topicButtons = document.querySelectorAll('.topic-btn');
    const randomButton = document.querySelector('.random-btn');
    const topicIndicator = document.getElementById('topic-indicator');
    const problemName = document.getElementById('problem-name');
    const problemStatement = document.getElementById('problem-statement');
    const randomProblemDisplay = document.getElementById('random-problem-display');

    let activeTopic = 'A';
    let dailyProblemId = null; // To store the daily problem's ID

    /**
     * Gets the current date in Estonia's timezone, set to the start of the day.
     * @returns {DateTime} - Luxon DateTime object.
     */
    function getEstToday() {
        return DateTime.now().setZone('Europe/Tallinn').startOf('day');
    }

    /**
     * Formats a Luxon DateTime object to a readable string.
     * @param {DateTime} dateTime - Luxon DateTime object.
     * @returns {string} - Formatted date string.
     */
    function formatDate(dateTime) {
        return dateTime.toLocaleString(DateTime.DATE_FULL);
    }

    /**
     * Creates a seed string from a DateTime object.
     * @param {DateTime} dateTime - Luxon DateTime object.
     * @returns {string} - Seed string (e.g., '2024-10-15').
     */
    function createSeed(dateTime) {
        return dateTime.toISODate(); // e.g., '2024-10-15'
    }

    /**
     * Shuffles an array deterministically based on a seed using seedrandom.
     * @param {Array} array - The array to shuffle.
     * @param {string} seed - The seed for randomness.
     * @returns {Array} - The shuffled array.
     */
    function shuffleArray(array, seed) {
        if (!Array.isArray(array)) return [];
        if (array.length <= 1) return array.slice();

        Math.seedrandom(seed);
        return array
            .map(value => ({ value, sort: Math.random() }))
            .sort((a, b) => a.sort - b.sort)
            .map(({ value }) => value);
    }

    /**
     * Generates a permuted list based on a cycle seed and topic.
     * @param {Array} problems - The array of problems to shuffle.
     * @param {string} cycleSeed - The base seed for shuffling.
     * @param {string} topic - The topic identifier.
     * @returns {Array} - The shuffled array.
     */
    function generatePermutedList(problems, cycleSeed, topic) {
        const uniqueSeed = `${cycleSeed}-${topic}`;
        return shuffleArray(problems, uniqueSeed);
    }

    /**
     * Retrieves the daily problem based on the permuted list and day index.
     * @param {Array} permutedList - The shuffled array of problems.
     * @param {number} dayIndex - The index of the day since start.
     * @returns {Object} - The selected daily problem.
     */
    function getDailyProblem(permutedList, dayIndex) {
        return permutedList[dayIndex % permutedList.length];
    }

    /**
     * Generates a truly random index without a seed.
     * @param {number} max - The upper bound for the index (exclusive).
     * @returns {number} - The random index.
     */
    function getRandomIndex(max) {
        return Math.floor(Math.random() * max);
    }

    // Get today's date in Estonia's timezone
    const today = getEstToday();
    currentDateElement.textContent = `Date: ${formatDate(today)}`;

    // Calculate the number of days since the start date
    const startDate = DateTime.fromISO('2023-01-01T00:00:00', { zone: 'Europe/Tallinn' });
    const dayDiff = Math.floor(today.diff(startDate, 'days').days);

    // Define cycle length (number of problems) - will be set after fetching problems
    let cycleLength = 0;

    /**
     * Displays the daily problem based on the active topic.
     * @param {string} topic - The selected topic.
     */
    async function displayProblem(topic) {
        try {
            // Fetch all problems of the given topic
            const { data, error } = await supabaseClient
                .from('problems')
                .select('*')
                .eq('topic', topic);

            if (error) throw error;
            if (data.length === 0) {
                problemName.textContent = 'No Problems Available';
                problemStatement.innerHTML = '';
                return;
            }

            // Set cycle length
            cycleLength = data.length;

            // Generate a permuted list based on cycle number and topic
            const cycleNumber = Math.floor(dayDiff / cycleLength);
            const cycleSeed = `cycle-${cycleNumber}`;
            const permutedList = generatePermutedList(data, cycleSeed, topic);

            // Get the index within the current cycle
            const indexInCycle = dayDiff % cycleLength;

            // Select the daily problem
            const dailyProblem = getDailyProblem(permutedList, indexInCycle);
            dailyProblemId = dailyProblem.id; // Store daily problem's ID

            // Update the UI
            topicIndicator.textContent = topic;
            problemName.textContent = dailyProblem.name;
            problemStatement.innerHTML = dailyProblem.statement;

            // Trigger MathJax to typeset the new content
            if (window.MathJax && window.MathJax.typesetPromise) {
                window.MathJax.typesetPromise([problemStatement]).catch(function (err) {
                    console.error('MathJax typeset failed: ' + err.message);
                });
            }

        } catch (err) {
            console.error('Error fetching daily problem:', err);
            problemName.textContent = 'Error Fetching Problem';
            problemStatement.innerHTML = 'An error occurred while fetching the problem. Please try again later.';
        }
    }

    /**
     * Fetches and displays a random problem different from the daily problem.
     * @param {string} topic - The selected topic.
     */
    async function displayRandomProblem(topic) {
        try {
            // Fetch all problems of the given topic
            const { data, error } = await supabaseClient
                .from('problems')
                .select('*')
                .eq('topic', topic);

            if (error) throw error;
            if (data.length === 0) {
                randomProblemDisplay.innerHTML = '<p>No Random Problems Available.</p>';
                return;
            }

            // Filter out the daily problem
            const filteredData = data.filter(p => p.id !== dailyProblemId);
            if (filteredData.length === 0) {
                randomProblemDisplay.innerHTML = '<p>No Other Problems Available.</p>';
                return;
            }

            // Generate a truly random index
            const randomIndex = getRandomIndex(filteredData.length);
            const randomProblem = filteredData[randomIndex];

            // Update the UI
            randomProblemDisplay.innerHTML = `
                <div class="random-problem-header">
                    <div class="topic-indicator">${topic}</div>
                    <div class="problem-name">${randomProblem.name}</div>
                </div>
                <div class="problem-statement">${randomProblem.statement}</div>
            `;

            // Trigger MathJax to typeset the new content
            if (window.MathJax && window.MathJax.typesetPromise) {
                window.MathJax.typesetPromise([randomProblemDisplay]).catch(function (err) {
                    console.error('MathJax typeset failed: ' + err.message);
                });
            }

        } catch (err) {
            console.error('Error fetching random problem:', err);
            randomProblemDisplay.innerHTML = '<p>An error occurred while fetching the random problem. Please try again later.</p>';
        }
    }

    // Initial display for the active topic (default: A)
    displayProblem(activeTopic);

    // Event listeners for topic buttons
    topicButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove active class from all buttons
            topicButtons.forEach(btn => btn.classList.remove('active'));
            // Add active class to the clicked button
            button.classList.add('active');
            // Get the selected topic
            activeTopic = button.getAttribute('data-topic');
            // Display the corresponding problem
            displayProblem(activeTopic);
            // Update random button's data-topic
            if (randomButton) {
                randomButton.setAttribute('data-topic', activeTopic);
            }
            // Clear random problem display
            if (randomProblemDisplay) {
                randomProblemDisplay.innerHTML = '';
            }
        });
    });

    // Event listener for random problem button
    if (randomButton) {
        randomButton.addEventListener('click', () => {
            const topic = randomButton.getAttribute('data-topic');
            displayRandomProblem(topic);
        });
    }
});
