// js/languages.js - Enhanced with placeholder handling
(async function(){
  function $(s){ return document.querySelector(s); }
  function $all(s){ return Array.from(document.querySelectorAll(s)); }

  const languageSelector = $('#language-switcher-select');
  const defaultLang = localStorage.getItem('preferredLanguage') || 'en';

  function applyTranslations(translations){
    if (!translations) return;

    const headerTitle = $('#header-title') || $('#header-title-home');
    if (headerTitle && translations.header?.title) headerTitle.textContent = translations.header.title;

    // Handle regular data-key elements
    $all('[data-key]').forEach(el=>{
      const key = el.getAttribute('data-key');
      if (!key) return;
      let value = translations;
      for (const p of key.split('.')){
        if (value && value[p] !== undefined) value = value[p];
        else { value = null; break; }
      }
      if (typeof value === 'string') el.textContent = value;
    });

    // Handle placeholder translations
    $all('[data-placeholder-key]').forEach(el=>{
      const key = el.getAttribute('data-placeholder-key');
      if (!key) return;
      let value = translations;
      for (const p of key.split('.')){
        if (value && value[p] !== undefined) value = value[p];
        else { value = null; break; }
      }
      if (typeof value === 'string' && el.placeholder !== undefined) {
        el.placeholder = value;
      }
    });

    // Navigation links
    $all('nav ul li a').forEach(a=>{
      const key = a.getAttribute('data-key');
      if (key && translations.header?.nav?.[key]) {
        a.textContent = translations.header.nav[key];
      }
    });

    // Language switcher label
    const languageLabel = $('#language-switcher-label');
    if (languageLabel && translations.language_switcher?.label) {
      languageLabel.textContent = translations.language_switcher.label;
    }

    // Time labels
    $all('.label[data-label]').forEach(label=>{
      const labelKey = label.getAttribute('data-label');
      if (translations.time_labels?.[labelKey]) {
        label.textContent = translations.time_labels[labelKey];
      }
    });

    // Footer
    const foot = document.querySelector('footer p');
    if (foot && translations.footer?.footer_text) foot.textContent = translations.footer.footer_text;
  }

  async function loadLanguage(lang){
    try {
      const res = await fetch(`/js/languages/${lang}.json`);
      if (!res.ok) throw new Error('Language file not found: ' + lang);
      const translations = await res.json();
      applyTranslations(translations);
      
      // Store globally for other scripts to access
      window.currentTranslations = translations;
      window.currentLanguage = lang;
      
      window.dispatchEvent(new CustomEvent('languageChanged', { detail: { lang, translations } }));
    } catch (err) {
      console.error('loadLanguage error:', err);
    }
  }

  document.addEventListener('DOMContentLoaded', () => {
    if (!languageSelector) {
      loadLanguage(defaultLang);
      return;
    }
    languageSelector.value = defaultLang;
    loadLanguage(defaultLang);

    languageSelector.addEventListener('change', (e) => {
      const lang = e.target.value;
      localStorage.setItem('preferredLanguage', lang);
      loadLanguage(lang);
    });
  });

  window.loadLanguage = loadLanguage;
})();
