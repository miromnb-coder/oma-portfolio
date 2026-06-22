const panel = document.querySelector('.hero-panel');

if (panel) {
  requestAnimationFrame(() => {
    panel.classList.add('is-loaded');
  });
}
