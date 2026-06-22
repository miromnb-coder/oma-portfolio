const panel = document.querySelector('.panel');
const menuButton = document.querySelector('[data-menu-button]');
const mobileNav = document.querySelector('[data-mobile-nav]');

function closeMenu() {
  if (!panel || !menuButton) return;
  panel.classList.remove('menu-open');
  menuButton.setAttribute('aria-expanded', 'false');
}

if (panel) {
  requestAnimationFrame(() => {
    panel.classList.add('is-ready');
  });
}

if (panel && menuButton) {
  menuButton.addEventListener('click', () => {
    const isOpen = panel.classList.toggle('menu-open');
    menuButton.setAttribute('aria-expanded', String(isOpen));
  });
}

if (mobileNav) {
  mobileNav.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', closeMenu);
  });
}

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') {
    closeMenu();
  }
});
