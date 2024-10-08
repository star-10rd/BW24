// home.js

document.addEventListener('DOMContentLoaded', () => {
    const countersContainer = document.getElementById('counters-container');

    // Array of event objects
    const events = [
        {
            name: 'In-person preparation',
            date: 'October 25, 2024 23:59:59',
            description: 'The beginning of the first training camp',
            tooltip: 'Look forward to seeing you soon.'
        },
        {
            name: 'Baltic Way Day 1',
            date: 'November 14, 2024 16:00:00',
            description: 'The official start of the Baltic Way 2024, first arrivals',
            tooltip: 'Time to make new frinds.'
        },
        {
            name: 'Contest',
            date: 'November 16, 2024 9:00:00',
            description: 'Baltic Way 2024 Contest starting time',
            tooltip: 'Time to outclass new friends professionally.'
        }
        // Add more events as needed
    ];

    // Function to create a counter element
    function createCounter(event) {
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
        days.innerHTML = `<div class="number" id="days-${events.indexOf(event)}">0</div>
                          <div class="label">Days</div>`;
    
        // Hours
        const hours = document.createElement('div');
        hours.classList.add('time');
        hours.innerHTML = `<div class="number" id="hours-${events.indexOf(event)}">0</div>
                           <div class="label">Hours</div>`;
    
        // Minutes
        const minutes = document.createElement('div');
        minutes.classList.add('time');
        minutes.innerHTML = `<div class="number" id="minutes-${events.indexOf(event)}">0</div>
                             <div class="label">Minutes</div>`;
    
        // Seconds
        const seconds = document.createElement('div');
        seconds.classList.add('time');
        seconds.innerHTML = `<div class="number" id="seconds-${events.indexOf(event)}">0</div>
                             <div class="label">Seconds</div>`;
    
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
    


    // Initialize all counters
    events.forEach(event => {
        createCounter(event);
    });

    // Update countdowns every second
    setInterval(() => {
        events.forEach((event, index) => {
            const countDownDate = new Date(event.date).getTime();
            const now = new Date().getTime();
            const distance = countDownDate - now;

            // Time calculations
            const days = Math.floor(distance / (1000 * 60 * 60 * 24));
            const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((distance % (1000 * 60)) / 1000);

            // Display the result in the respective elements
            document.getElementById(`days-${index}`).textContent = days;
            document.getElementById(`hours-${index}`).textContent = hours;
            document.getElementById(`minutes-${index}`).textContent = minutes;
            document.getElementById(`seconds-${index}`).textContent = seconds;

            // If the countdown is finished, display a message
            if (distance < 0) {
                document.getElementById(`days-${index}`).textContent = '0';
                document.getElementById(`hours-${index}`).textContent = '0';
                document.getElementById(`minutes-${index}`).textContent = '0';
                document.getElementById(`seconds-${index}`).textContent = '0';

                // Optionally, you can update the description or show a message
                const descElement = countersContainer.children[index].querySelector('.description');
                descElement.textContent = 'This event has started!';
            }
        });
    }, 1000);
});
