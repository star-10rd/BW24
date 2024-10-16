// home.js

document.addEventListener('DOMContentLoaded', () => {
    const countersContainer = document.getElementById('counters-container');

    let events = []; // Events will be loaded from the language file
    let translations = {}; // To store translations

    // Function to create a counter element
    function createCounter(event, index) {
        // Create counter container
        const counter = document.createElement('div');
        counter.classList.add('counter');

        // Counter Header with Icon and Event Name
        const header = document.createElement('div');
        header.classList.add('counter-header');

        // You can add specific icons based on event type if needed
        const icon = document.createElement('img');
        icon.src = 'assets/images/clock.png'; // Ensure you have this icon
        icon.alt = 'Clock Icon';

        const title = document.createElement('h3');
        title.textContent = event.name;
        title.setAttribute('data-tooltip', event.tooltip); // Add tooltip attribute

        header.appendChild(icon);
        header.appendChild(title);
        counter.appendChild(header);

        // Countdown Display
        const countdown = document.createElement('div');
        countdown.classList.add('countdown');

        // Days
        const days = document.createElement('div');
        days.classList.add('time');
        days.innerHTML = `<div class="number" id="days-${index}">0</div>
                          <div class="label" data-label="days">${translations.time_labels.days}</div>`;

        // Hours
        const hours = document.createElement('div');
        hours.classList.add('time');
        hours.innerHTML = `<div class="number" id="hours-${index}">0</div>
                           <div class="label" data-label="hours">${translations.time_labels.hours}</div>`;

        // Minutes
        const minutes = document.createElement('div');
        minutes.classList.add('time');
        minutes.innerHTML = `<div class="number" id="minutes-${index}">0</div>
                             <div class="label" data-label="minutes">${translations.time_labels.minutes}</div>`;

        // Seconds
        const seconds = document.createElement('div');
        seconds.classList.add('time');
        seconds.innerHTML = `<div class="number" id="seconds-${index}">0</div>
                             <div class="label" data-label="seconds">${translations.time_labels.seconds}</div>`;

        // Append time units to countdown
        countdown.appendChild(days);
        countdown.appendChild(hours);
        countdown.appendChild(minutes);
        countdown.appendChild(seconds);

        counter.appendChild(countdown);

        // Event Description
        const desc = document.createElement('div');
        desc.classList.add('description');
        desc.textContent = event.description;

        counter.appendChild(desc);

        countersContainer.appendChild(counter);
    }

    // Function to load events from translations
    function loadEvents() {
        countersContainer.innerHTML = ''; // Clear existing counters
        events.forEach((event, index) => {
            createCounter(event, index);
        });
    }

    // Function to update countdowns
    function updateCountdowns() {
        events.forEach((event, index) => {
            const countDownDate = new Date(event.date).getTime();
            const now = new Date().getTime();
            const distance = countDownDate - now;

            // Time calculations
            const days = Math.floor(distance / (1000 * 60 * 60 * 24));
            const hours = Math.floor(
                (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
            );
            const minutes = Math.floor(
                (distance % (1000 * 60 * 60)) / (1000 * 60)
            );
            const seconds = Math.floor((distance % (1000 * 60)) / 1000);

            // Display the result in the respective elements
            document.getElementById(`days-${index}`).textContent = days >= 0 ? days : '0';
            document.getElementById(`hours-${index}`).textContent = hours >= 0 ? hours : '0';
            document.getElementById(`minutes-${index}`).textContent = minutes >= 0 ? minutes : '0';
            document.getElementById(`seconds-${index}`).textContent = seconds >= 0 ? seconds : '0';

            // If the countdown is finished, display a message
            if (distance < 0) {
                const descElement = countersContainer.children[index].querySelector('.description');
                descElement.textContent = translations.events.event_started;
            }
        });
    }

    // Function to load translations and initialize the page
    async function initializePage() {
        const userLanguage = localStorage.getItem('preferredLanguage') || 'en';
        try {
            const response = await fetch(`/js/languages/${userLanguage}.json`);
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            translations = await response.json();

            // Load events from translations
            events = translations.events.list;

            // Initialize counters
            loadEvents();

            // Start updating countdowns
            updateCountdowns();
            setInterval(updateCountdowns, 1000);

            // Update page elements with translations
            applyTranslations(translations);

        } catch (error) {
            console.error('Error loading language file:', error);
        }
    }

    // Call the initialize function
    initializePage();
});
