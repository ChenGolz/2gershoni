(() => {
  const lightbox = document.querySelector('[data-lightbox]');
  const lightboxImg = document.querySelector('[data-lightbox-img]');
  const closeBtn = document.querySelector('[data-lightbox-close]');
  if (!lightbox || !lightboxImg || !closeBtn) return;
  document.addEventListener('click', (event) => {
    const trigger = event.target.closest('[data-full]');
    if (!trigger) return;
    const src = trigger.getAttribute('data-full');
    const img = trigger.querySelector('img');
    if (!src) return;
    lightboxImg.src = src;
    lightboxImg.alt = img ? img.alt : 'תמונה מוגדלת מתוך אלבום הזיכרון';
    lightbox.classList.add('is-open');
    document.documentElement.classList.add('has-lightbox');
    closeBtn.focus({ preventScroll: true });
  });
  const close = () => {
    lightbox.classList.remove('is-open');
    document.documentElement.classList.remove('has-lightbox');
    lightboxImg.removeAttribute('src');
  };
  closeBtn.addEventListener('click', close);
  lightbox.addEventListener('click', (event) => { if (event.target === lightbox) close(); });
  document.addEventListener('keydown', (event) => { if (event.key === 'Escape' && lightbox.classList.contains('is-open')) close(); });
})();
