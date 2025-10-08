document.addEventListener('DOMContentLoaded', initializeHome);
window.addEventListener('languageChanged', (ev) => initializeHome());

function initializeHome(){
  const countersContainer = document.getElementById('counters-container');
  const lang = localStorage.getItem('preferredLanguage') || 'en';
  if (!countersContainer) return;

  fetch(`/js/languages/${lang}.json`).then(r=>r.json()).then(translations=>{
    const events = translations.events && translations.events.list ? translations.events.list.slice() : [];
    // parse event times into Date
    const parsed = events.map(e=> ({...e, __date: new Date(e.date)}));
    // UI mode: upcoming / past / all
    let viewMode = 'upcoming';

    function render(){
      countersContainer.innerHTML = '';
      const now = new Date();
      let toShow;
      if (viewMode === 'upcoming') {
        toShow = parsed.filter(e => e.__date.getTime() > now.getTime());
      } else if (viewMode === 'past') {
        toShow = parsed.filter(e => e.__date.getTime() <= now.getTime());
      } else {
        toShow = parsed.slice();
      }
      toShow.forEach((ev, idx)=>{
        const card = createEventCard(ev, idx, translations);
        countersContainer.appendChild(card);
      });
      attachShowPastControl();
      startCountdowns(parsed, translations);
    }

    function attachShowPastControl(){
      const showPastBtn = document.getElementById('show-past');
      const homeTitle = document.getElementById('home-title');
      if (!showPastBtn || !homeTitle) return;

      // FIXED: Use translations instead of hardcoded English
      function updateLabel() {
        if (viewMode === 'upcoming') {
          showPastBtn.textContent = translations.home?.show_past || 'Show past';
          homeTitle.textContent = translations.home?.upcoming_events || 'Upcoming Events';
        } else if (viewMode === 'past') {
          showPastBtn.textContent = translations.home?.show_all || 'Show all';
          homeTitle.textContent = translations.home?.past_events || 'Past Events';
        } else {
          showPastBtn.textContent = translations.home?.show_upcoming || 'Show upcoming';
          homeTitle.textContent = translations.home?.all_events || 'All Events';
        }
      }

      showPastBtn.onclick = () => {
        if (viewMode === 'upcoming') viewMode = 'past';
        else if (viewMode === 'past') viewMode = 'all';
        else viewMode = 'upcoming';
        updateLabel();
        render();
      };

      updateLabel();
    }

    render();
  }).catch(err => console.error('Could not load home translations', err));
}

function createEventCard(ev, idx, translations){
  const card = document.createElement('article');
  card.className = 'event-card';
  card.id = `event-${idx}`;
  card.innerHTML = `
    <div class="counter">
      <img src="assets/images/clock.png" alt="" width="36" height="36" />
      <div style="flex:1">
        <h3>${ev.name}</h3>
        <div class="desc">${ev.description || ''}</div>
      </div>
    </div>
    <div class="time-grid">
      <div class="time-unit days"><div class="number">0</div><div class="label" data-label="days">${translations.time_labels.days}</div></div>
      <div class="time-unit hours"><div class="number">0</div><div class="label" data-label="hours">${translations.time_labels.hours}</div></div>
      <div class="time-unit minutes"><div class="number">0</div><div class="label" data-label="minutes">${translations.time_labels.minutes}</div></div>
      <div class="time-unit seconds"><div class="number">0</div><div class="label" data-label="seconds">${translations.time_labels.seconds}</div></div>
    </div>
    <div class="event-progress"><i style="width:0%"></i></div>
  `;
  // store event date on element for countdown updates:
  card.dataset.target = new Date(ev.date).getTime();
  return card;
}

// FIXED: Accept translations parameter for event_started message
function startCountdowns(allEvents, translations){
  clearInterval(window._bwHomeInterval);
  
  window._bwHomeInterval = setInterval(()=>{
    document.querySelectorAll('.event-card').forEach(card=>{
      const target = Number(card.dataset.target);
      if (!target) return;
      const distanceMs = Math.max(0, target - Date.now());
      const days = Math.floor(distanceMs / (1000*60*60*24));
      const hours = Math.floor((distanceMs % (1000*60*60*24)) / (1000*60*60));
      const minutes = Math.floor((distanceMs % (1000*60*60)) / (1000*60));
      const seconds = Math.floor((distanceMs % (1000*60)) / 1000);

      card.querySelector('.days .number').textContent = days;
      card.querySelector('.hours .number').textContent = String(hours).padStart(2,'0');
      card.querySelector('.minutes .number').textContent = String(minutes).padStart(2,'0');
      card.querySelector('.seconds .number').textContent = String(seconds).padStart(2,'0');

      const daysUntil = Math.max(0, Math.ceil((target - Date.now()) / (1000*60*60*24)));
      const pct = Math.round(100 * (1 / (1 + daysUntil / 30)));
      card.querySelector('.event-progress > i').style.width = `${pct}%`;

      // FIXED: Use translation for event started message
      if (Date.now() > target) {
        const desc = card.querySelector('.desc');
        if (desc) desc.textContent = translations?.events?.event_started || 'This event has started!';
        card.querySelector('.event-progress > i').style.width = `100%`;
      }
    });
  }, 1000);
}
