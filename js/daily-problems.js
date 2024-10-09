// daily-problems.js

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

    // Function to format date as "Month Day, Year"
    function formatDate(date) {
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        return date.toLocaleDateString(undefined, options);
    }

    // Display current date
    const today = new Date();
    currentDateElement.textContent = `Date: ${formatDate(today)}`;

    // Function to get the daily problem based on the date
    function getDailyProblem(topic, problems) {
        const startDate = new Date('2023-01-01'); // Start date for counting
        const timeDiff = today - startDate;
        const dayDiff = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
        const problemsCount = problems.length;
        const index = dayDiff % problemsCount;
        return problems[index];
    }

    // Function to display daily problem
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

            // Determine daily problem
            const dailyProblem = getDailyProblem(topic, data);
            dailyProblemId = dailyProblem.id; // Store daily problem's ID
            topicIndicator.textContent = topic;
            problemName.textContent = dailyProblem.name;
            problemStatement.innerHTML = dailyProblem.statement;

            // Debugging: Log the fetched statement
            //console.log('Fetched Daily Problem Statement:', dailyProblem.statement);

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

    // Function to fetch and display random problem
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

            // Select a random problem from filteredData
            const randomIndex = Math.floor(Math.random() * filteredData.length);
            const randomProblem = filteredData[randomIndex];

            // Debugging: Log the fetched random problem
            //console.log('Fetched Random Problem:', randomProblem);

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
            randomButton.setAttribute('data-topic', activeTopic);
            // Clear random problem display
            randomProblemDisplay.innerHTML = '';
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
