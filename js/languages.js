// languages.js

document.addEventListener('DOMContentLoaded', () => {
    const languageSwitcher = document.getElementById('language-switcher-select');
    if (!languageSwitcher) {
        console.error('Language switcher element not found!');
        return;
    }

    const userLanguage = localStorage.getItem('preferredLanguage') || 'est';
    languageSwitcher.value = userLanguage;
    loadLanguage(userLanguage);

    languageSwitcher.addEventListener('change', (e) => {
        const selectedLanguage = e.target.value;
        localStorage.setItem('preferredLanguage', selectedLanguage);
        loadLanguage(selectedLanguage);
    });
});

async function loadLanguage(lang) {
    try {
        const response = await fetch(`/js/languages/${lang}.json`);
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const translations = await response.json();
        applyTranslations(translations);

        // Re-initialize the page if necessary
        if (typeof initializePage === 'function') {
            initializePage();
        }

    } catch (error) {
        console.error('Error loading language file:', error);
    }
}

function applyTranslations(translations) {
    // Translate header
    const headerTitle = document.getElementById('header-title');
    if (headerTitle) {
        headerTitle.textContent = translations.header.title;
    }


     // Handle elements with data-key attributes
     const translatableElements = document.querySelectorAll('[data-key]');

     translatableElements.forEach(element => {
         const key = element.getAttribute('data-key');
         const keys = key.split('.');
         let text = translations;
 
         // Traverse the translation object based on the key
         for (let part of keys) {
             if (text[part] !== undefined) {
                 text = text[part];
             } else {
                 text = null;
                 break;
             }
         }
 
         // If translation exists and is a string, apply it
         if (typeof text === 'string') {
             element.textContent = text;
         } else {
             console.warn(`Missing or invalid translation for key: ${key}`);
         }
     });
 
     // Handle elements with data-tooltip-key attributes (if any)
     const tooltipElements = document.querySelectorAll('[data-tooltip-key]');
     tooltipElements.forEach(element => {
         const key = element.getAttribute('data-tooltip-key');
         const keys = key.split('.');
         let text = translations;
 
         for (let part of keys) {
             if (text[part] !== undefined) {
                 text = text[part];
             } else {
                 text = null;
                 break;
             }
         }
 
         if (typeof text === 'string') {
             element.setAttribute('title', text);
         } else {
             console.warn(`Missing or invalid tooltip translation for key: ${key}`);
         }
     });

    

    document.querySelectorAll('nav ul li a').forEach(link => {
        const key = link.getAttribute('data-key');
        if (translations.header.nav[key]) {
            link.textContent = translations.header.nav[key];
        }
    });

    // Translate Daily Problems Section
    const dailyProblemsTitle = document.getElementById('daily-problems-title');
    if (dailyProblemsTitle && translations.daily_problems) {
        dailyProblemsTitle.textContent = translations.daily_problems.title;
    }

    const dateDisplay = document.getElementById('current-date');
    if (dateDisplay && translations.daily_problems && translations.daily_problems.date_display) {
        // Extract the current date without the label
        const currentDate = dateDisplay.textContent.split(': ')[1];
        dateDisplay.textContent = `${translations.daily_problems.date_display} ${currentDate}`;
    }

    const randomButton = document.querySelector('.random-btn');
    if (randomButton && translations.daily_problems && translations.daily_problems.random_button) {
        randomButton.textContent = translations.daily_problems.random_button;
    }

    const trackProgressLink = document.querySelector('.track-progress a');
    if (trackProgressLink && translations.daily_problems && translations.daily_problems.track_progress) {
        trackProgressLink.textContent = translations.daily_problems.track_progress;
    }

    // Footer
    const footer = document.querySelector('footer p');
    if (footer && translations.footer && translations.footer.footer_text) {
        footer.textContent = translations.footer.footer_text;
    }

    // Home Page Translations
    const homeTitle = document.getElementById('home-title');
    if (homeTitle && translations.home) {
        homeTitle.textContent = translations.home.upcoming_events;
    }

    // Update time labels in counters
    document.querySelectorAll('.label[data-label]').forEach(label => {
        const labelKey = label.getAttribute('data-label');
        if (translations.time_labels && translations.time_labels[labelKey]) {
            label.textContent = translations.time_labels[labelKey];
        }
    });

    // Update event descriptions and tooltips on Home Page
    const counters = document.querySelectorAll('.counter');
    counters.forEach((counter, index) => {
        const event = translations.events.list[index];
        if (event) {
            const title = counter.querySelector('.counter-header h3');
            if (title) {
                title.textContent = event.name;
                title.setAttribute('data-tooltip', event.tooltip);
            }
            const description = counter.querySelector('.description');
            if (description) {
                description.textContent = event.description;
            }
        }
    });

     // Translate Language Switcher Label
     const languageLabel = document.getElementById('language-switcher-label');
     if (languageLabel && translations.language_switcher && translations.language_switcher.label) {
         languageLabel.textContent = translations.language_switcher.label;
     }
}
