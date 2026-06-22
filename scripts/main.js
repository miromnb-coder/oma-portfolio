const panel = document.querySelector('.panel');

if (panel) {
  requestAnimationFrame(() => {
    panel.classList.add('is-ready');
  });
}
