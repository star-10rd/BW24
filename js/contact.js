// js/contact.js
document.addEventListener('DOMContentLoaded', ()=>{
  const form = document.querySelector('.contact-form');
  if (!form) return;
  form.addEventListener('submit', (e)=>{
    const email = document.getElementById('c-email');
    if (email && !email.value.includes('@')) {
      e.preventDefault();
      alert('Please enter a valid email.');
    }
  });
});