// main.js - Enhanced with mobile language switcher in nav menu
(function(){
  const toggleBtn = document.querySelector('.mobile-nav-toggle');
  const navList = document.querySelector('.nav-list');
  const themeToggle = document.getElementById('theme-toggle');

  // Mobile nav toggle
  if (toggleBtn && navList) {
    toggleBtn.addEventListener('click', () => {
      const isOpen = toggleBtn.getAttribute('aria-expanded') === 'true';
      toggleBtn.setAttribute('aria-expanded', !isOpen);
      navList.style.display = isOpen ? 'none' : 'flex';
    });

    // Close menu when clicking nav link
    navList.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        toggleBtn.setAttribute('aria-expanded', 'false');
        navList.style.display = 'none';
      });
    });

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
      if (!toggleBtn.contains(e.target) && !navList.contains(e.target)) {
        if (toggleBtn.getAttribute('aria-expanded') === 'true') {
          toggleBtn.setAttribute('aria-expanded', 'false');
          navList.style.display = 'none';
        }
      }
    });
  }

  // NEW: Add mobile language buttons to nav menu
  function setupMobileLanguageSwitcher() {
    if (!navList) return;
    
    // Check if we're on mobile (max-width: 820px)
    const isMobile = window.innerWidth <= 820;
    
    if (isMobile) {
      // Remove existing mobile language items if they exist
      const existingLangItems = navList.querySelectorAll('.mobile-lang-item');
      existingLangItems.forEach(item => item.remove());
      
      // Create language separator and buttons
      const separator = document.createElement('li');
      separator.className = 'nav-separator mobile-lang-item';
      separator.innerHTML = '<hr style="border: none; border-top: 1px solid rgba(127,184,255,0.2); margin: 8px 0;">';
      
      const langLabel = document.createElement('li');
      langLabel.className = 'mobile-lang-item';
      langLabel.innerHTML = '<span style="color: var(--muted); font-size: 0.85rem; padding: 8px 12px; display: block;">Language / Keel</span>';
      
      const currentLang = localStorage.getItem('preferredLanguage') || 'en';
      
      const enBtn = document.createElement('li');
      enBtn.className = 'mobile-lang-item';
      enBtn.innerHTML = `<button class="mobile-lang-btn ${currentLang === 'en' ? 'active' : ''}" data-lang="en">English</button>`;
      
      const estBtn = document.createElement('li');
      estBtn.className = 'mobile-lang-item';
      estBtn.innerHTML = `<button class="mobile-lang-btn ${currentLang === 'est' ? 'active' : ''}" data-lang="est">Eesti</button>`;
      
      // Append to nav menu
      navList.appendChild(separator);
      navList.appendChild(langLabel);
      navList.appendChild(enBtn);
      navList.appendChild(estBtn);
      
      // Add click handlers
      navList.querySelectorAll('.mobile-lang-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
          const lang = btn.getAttribute('data-lang');
          localStorage.setItem('preferredLanguage', lang);
          
          // Update desktop select to match
          const desktopSelect = document.getElementById('language-switcher-select');
          if (desktopSelect) desktopSelect.value = lang;
          
          // Trigger language change
          if (window.loadLanguage) window.loadLanguage(lang);
          
          // Close menu
          if (toggleBtn) {
            toggleBtn.setAttribute('aria-expanded', 'false');
            navList.style.display = 'none';
          }
          
          // Reload page to apply language
          location.reload();
        });
      });
    }
  }
  
  // Setup on load and resize
  setupMobileLanguageSwitcher();
  window.addEventListener('resize', setupMobileLanguageSwitcher);

  // Theme toggle
  if (themeToggle) {
    const currentTheme = localStorage.getItem('theme') || 'light';
    document.documentElement.setAttribute('data-theme', currentTheme);
    themeToggle.setAttribute('aria-pressed', currentTheme === 'dark');

    themeToggle.addEventListener('click', () => {
      const theme = document.documentElement.getAttribute('data-theme');
      const newTheme = theme === 'dark' ? 'light' : 'dark';
      document.documentElement.setAttribute('data-theme', newTheme);
      localStorage.setItem('theme', newTheme);
      themeToggle.setAttribute('aria-pressed', newTheme === 'dark');
    });
  }
})();
