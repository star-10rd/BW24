document.addEventListener('DOMContentLoaded', () => {
  const mobileToggle = document.querySelector('.mobile-nav-toggle');
  const navList = document.querySelector('.nav-list');

  function isMobileView() { return window.innerWidth <= 820; }

  if (mobileToggle && navList) {
    mobileToggle.addEventListener('click', () => {
      const expanded = mobileToggle.getAttribute('aria-expanded') === 'true';
      mobileToggle.setAttribute('aria-expanded', String(!expanded));
      if (isMobileView()) {
        navList.style.display = expanded ? 'none' : 'flex';
        navList.setAttribute('aria-hidden', String(expanded));
      }
    });

    const applyNavState = () => {
      if (isMobileView()) {
        navList.style.display = 'none';
        mobileToggle.style.display = 'inline-flex';
      } else {
        navList.style.display = 'flex';
        mobileToggle.style.display = 'none';
        mobileToggle.setAttribute('aria-expanded', 'false');
        navList.removeAttribute('aria-hidden');
      }
    };
    window.addEventListener('resize', applyNavState);
    applyNavState();
  }

  const themeBtn = document.getElementById('theme-toggle');
  if (themeBtn) {
    themeBtn.addEventListener('click', () => {
      const root = document.documentElement;
      const current = root.getAttribute('data-theme') || '';
      const next = current === 'dark' ? '' : 'dark';
      root.setAttribute('data-theme', next);
      localStorage.setItem('site-theme', next);
      themeBtn.setAttribute('aria-pressed', String(next === 'dark'));
    });
  }

  const saved = localStorage.getItem('site-theme');
  if (saved) document.documentElement.setAttribute('data-theme', saved);
});
