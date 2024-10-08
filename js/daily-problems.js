// daily-problems.js

document.addEventListener('DOMContentLoaded', () => {
    const currentDateElement = document.getElementById('current-date');
    const topicButtons = document.querySelectorAll('.topic-btn');
    const topicIndicator = document.getElementById('topic-indicator');
    const problemName = document.getElementById('problem-name');
    const problemStatement = document.getElementById('problem-statement');

    // Function to format date as "Month Day, Year"
    function formatDate(date) {
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        return date.toLocaleDateString(undefined, options);
    }

    // Display current date
    const today = new Date();
    currentDateElement.textContent = `Date: ${formatDate(today)}`;

    // Function to get the problem index based on the date
    function getProblemIndex(topic) {
        const startDate = new Date('2023-01-01'); // Start date for counting
        const timeDiff = today - startDate;
        const dayDiff = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
        const problemsCount = dailyProblemsData[topic].length;
        return dayDiff % problemsCount;
    }

    // Function to display problem based on topic
    function displayProblem(topic) {
        const index = getProblemIndex(topic);
        const problem = dailyProblemsData[topic][index];
        topicIndicator.textContent = topic;
        problemName.textContent = problem.name;
        problemStatement.innerHTML = problem.statement;

        // Ensure MathJax processes the new content after it's injected
        if (window.MathJax && window.MathJax.typesetPromise) {
            window.MathJax.typesetPromise([problemStatement])
                .then(() => console.log('MathJax typesetting complete'))
                .catch((err) => console.error('MathJax typeset failed: ' + err.message));
        } else {
            console.error('MathJax not found or not loaded');
        }
    }

    // Ensure MathJax is loaded before displaying problems
    if (window.MathJax && window.MathJax.startup && window.MathJax.startup.promise) {
        window.MathJax.startup.promise.then(() => {
            displayProblem('A'); // Initial display for topic A when MathJax is ready
        });
    } else {
        displayProblem('A'); // Fallback in case MathJax is already loaded
    }

    // Event listeners for topic buttons
    topicButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove active class from all buttons
            topicButtons.forEach(btn => btn.classList.remove('active'));
            // Add active class to the clicked button
            button.classList.add('active');
            // Get the selected topic
            const selectedTopic = button.getAttribute('data-topic');

            console.log(`Topic button clicked: ${selectedTopic}`);
            // Display the corresponding problem
            displayProblem(selectedTopic);
        });
    });
});
