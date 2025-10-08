// js/daily-problems.js - with internationalized back button
const { DateTime } = window.luxon || {};
const SUPABASE_URL = 'https://bwudmhszirbupgdwgqhs.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJ3dWRtaHN6aXJidXBnZHdncWhzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTQ2NDU4NzMsImV4cCI6MjA3MDIyMTg3M30.F9vkrLjvz0z9cjHBn4I99-fVYcvR4cAIz4cN8KOXnXA';
const supabaseClient = window.supabase?.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

function getEstToday(){ return DateTime ? DateTime.now().setZone('Europe/Tallinn').startOf('day') : new Date(); }
function formatDate(dt){ return DateTime ? dt.toLocaleString(DateTime.DATE_FULL) : new Date().toLocaleDateString(); }

function shuffleArrayLocal(array, seed) {
  if (!Array.isArray(array)) return [];
  if (array.length <= 1) return array.slice();
  let rng = Math.random;
  const sr = window.seedrandom || (typeof Math.seedrandom === 'function' ? Math.seedrandom : null);
  if (sr) { const maybe = sr(seed); rng = typeof maybe === 'function' ? maybe : Math.random; }
  const arr = array.slice();
  for (let i = arr.length -1; i>0; i--) {
    const r = Math.floor(rng() * (i+1));
    [arr[i], arr[r]] = [arr[r], arr[i]];
  }
  return arr;
}

function getRandomIndex(max){
  if (max<=0) return 0;
  try { if (window.crypto && window.crypto.getRandomValues) { const v = new Uint32Array(1); window.crypto.getRandomValues(v); return v[0] % max; } } catch(e){}
  return Math.floor(Math.random() * max);
}

function getCurrentTheme() {
  return document.documentElement.getAttribute('data-theme') || 'light';
}

// FIX: Internationalized back button
function openProblemInNewTab(title, statementHtml){
  const theme = getCurrentTheme();
  
  // Get translated back button text
  const backText = window.currentTranslations?.daily_problems?.back_to_daily || 'Back to Daily Problems';
  
  const themeStyles = theme === 'dark' ? {
    bg: '#071021',
    text: '#e6eef9',
    cardBg: 'rgba(16,22,30,0.95)',
    linkColor: '#7fb8ff',
    linkHover: '#5aa0ff'
  } : {
    bg: '#ffffff',
    text: '#0f1724',
    cardBg: '#ffffff',
    linkColor: '#003766',
    linkHover: '#0055a5'
  };
  
  const html = `<!doctype html><html><head><meta charset="utf-8"><title>${title.replace(/</g,'&lt;')}</title>
  <meta name="viewport" content="width=device-width,initial-scale=1">
  <style>
    body { 
      font-family: Inter, system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial; 
      padding: 22px; 
      background: ${themeStyles.bg}; 
      color: ${themeStyles.text};
      line-height: 1.6;
      margin: 0;
    }
    .back-link {
      display: inline-block;
      color: ${themeStyles.linkColor};
      text-decoration: none;
      font-weight: 600;
      margin-bottom: 16px;
      padding: 8px 12px;
      border-radius: 8px;
      transition: all 0.2s ease;
      font-size: 0.95rem;
    }
    .back-link:hover {
      color: ${themeStyles.linkHover};
      background: ${theme === 'dark' ? 'rgba(127, 184, 255, 0.1)' : 'rgba(0, 55, 102, 0.05)'};
    }
    .back-link::before {
      content: '← ';
      font-weight: 700;
    }
    .container {
      max-width: 900px; 
      margin: 0 auto;
      background: ${themeStyles.cardBg};
      padding: 24px;
      border-radius: 12px;
      box-shadow: 0 4px 12px rgba(0,0,0,${theme === 'dark' ? '0.4' : '0.1'});
    }
    h1 { 
      color: ${theme === 'dark' ? '#7fb8ff' : '#003766'}; 
      margin-bottom: 20px;
      margin-top: 0;
    }
    * {
      scrollbar-width: none;
      -ms-overflow-style: none;
    }
    *::-webkit-scrollbar {
      display: none;
    }
  </style>
  </head><body>
  <div class="container">
    <a href="javascript:void(0)" class="back-link" onclick="goBack()">${backText}</a>
    <h1>${title}</h1>
    <div>${statementHtml}</div>
  </div>
  <script>
    function goBack() {
      if (window.opener && !window.opener.closed) {
        window.close();
      } else {
        window.location.href = window.location.origin + '/daily-problems/';
      }
    }
    window.MathJax={tex:{inlineMath:[['$','$'], ['\\\\(','\\\\)']]}}
  </script>
  <script src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-svg.js"></script>
  </body></html>`;
  
  const win = window.open();
  if (!win) { alert('Pop-up blocked. Allow pop-ups or open the problem manually.'); return; }
  win.document.open(); 
  win.document.write(html); 
  win.document.close();
}

document.addEventListener('DOMContentLoaded', () => {
  const currentDateElement = document.getElementById('current-date');
  const topicButtons = Array.from(document.querySelectorAll('.topic-btn'));
  const randomTrigger = document.querySelector('.random-trigger .random-btn');
  const problemName = document.getElementById('problem-name');
  const problemStatement = document.getElementById('problem-statement');
  const topicIndicator = document.getElementById('topic-indicator');
  const randomProblemDisplay = document.getElementById('random-problem-display');

  let activeTopic = 'A';
  let dailyProblemId = null;
  let currentDailyProblem = null;

  const today = getEstToday();
  if (currentDateElement) {
    // Use translation for date prefix
    const datePrefix = window.currentTranslations?.daily_problems?.date_display || 'Date: ';
    currentDateElement.textContent = `${datePrefix}${formatDate(today)}`;
  }

  const startDate = DateTime ? DateTime.fromISO('2023-01-01T00:00:00', { zone:'Europe/Tallinn' }) : null;
  const dayDiff = startDate ? Math.floor(today.diff(startDate,'days').days) : 0;

  async function displayProblem(topic) {
    if (!supabaseClient) return;
    try {
      const res = await supabaseClient.from('problems').select('*').eq('topic', topic);
      if (res.error) throw res.error;
      const data = res.data || [];
      if (!data.length) {
        if (problemName) problemName.textContent = 'No Problems Available';
        if (problemStatement) problemStatement.innerHTML = '';
        return;
      }
      const cycleLength = data.length;
      const cycleNumber = Math.floor(dayDiff / cycleLength);
      const perm = shuffleArrayLocal(data, `cycle-${cycleNumber}-${topic}`);
      const indexInCycle = cycleLength ? (dayDiff % cycleLength) : 0;
      const daily = perm[indexInCycle];

      dailyProblemId = daily?.id ?? null;
      currentDailyProblem = daily;
      
      if (problemName) problemName.textContent = daily?.name ?? '';
      if (problemStatement) problemStatement.innerHTML = daily?.statement ?? '';
      if (topicIndicator) topicIndicator.textContent = topic;

      const dailyOpenBtn = document.getElementById('daily-open-btn');
      if (dailyOpenBtn) dailyOpenBtn.onclick = () => openProblemInNewTab(daily?.name ?? 'Problem', daily?.statement ?? '');

      if (window.MathJax?.typesetPromise && problemStatement) window.MathJax.typesetPromise([problemStatement]).catch(()=>{});
    } catch (err) {
      console.error('displayProblem err', err);
      if (problemName) problemName.textContent = 'Error';
      if (problemStatement) problemStatement.innerHTML = '';
    }
  }

  async function displayRandomProblem(topic) {
    if (!supabaseClient) return;
    try {
      const res = await supabaseClient.from('problems').select('*').eq('topic', topic);
      if (res.error) throw res.error;
      const data = res.data || [];
      if (!data.length) { 
        randomProblemDisplay.style.display = 'none';
        return; 
      }

      const filtered = data.filter(p => p.id !== dailyProblemId);
      if (!filtered.length) { 
        randomProblemDisplay.style.display = 'none';
        return; 
      }

      const idx = getRandomIndex(filtered.length);
      const r = filtered[idx];

      const randomTopicIndicator = document.getElementById('random-topic-indicator');
      const randomNameEl = document.getElementById('random-problem-name');
      const randomStatementEl = document.getElementById('random-problem-statement');
      const randomOpenBtn = document.getElementById('random-open-btn');

      if (randomTopicIndicator) randomTopicIndicator.textContent = topic;
      if (randomNameEl) randomNameEl.textContent = r.name || '';
      if (randomStatementEl) randomStatementEl.innerHTML = r.statement || '';
      
      if (randomOpenBtn) {
        randomOpenBtn.onclick = () => openProblemInNewTab(r.name || 'Random', r.statement || '');
      }

      randomProblemDisplay.style.display = 'block';

      if (window.MathJax?.typesetPromise && randomStatementEl) {
        window.MathJax.typesetPromise([randomStatementEl]).catch(()=>{});
      }
    } catch (err) {
      console.error('displayRandomProblem err', err);
      randomProblemDisplay.style.display = 'none';
    }
  }

  displayProblem(activeTopic);
  if (randomProblemDisplay) randomProblemDisplay.style.display = 'none';

  topicButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      topicButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      activeTopic = btn.getAttribute('data-topic') || activeTopic;
      
      if (randomProblemDisplay) randomProblemDisplay.style.display = 'none';
      if (randomTrigger) randomTrigger.setAttribute('data-topic', activeTopic);
      
      displayProblem(activeTopic);
    });
  });

  if (randomTrigger) {
    randomTrigger.addEventListener('click', () => {
      const t = randomTrigger.getAttribute('data-topic') || activeTopic;
      displayRandomProblem(t);
    });
  }
});
