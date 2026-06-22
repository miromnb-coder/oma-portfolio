const header = document.querySelector('[data-header]');
const menuButton = document.querySelector('[data-menu-toggle]');
const menu = document.querySelector('[data-mobile-menu]');
const revealItems = document.querySelectorAll('.reveal');
const form = document.querySelector('[data-contact-form]');
const statusText = document.querySelector('[data-form-status]');
const yearText = document.querySelector('[data-year]');

if (yearText) {
  yearText.textContent = new Date().getFullYear();
}

function closeMobileMenu() {
  if (!header || !menuButton) return;
  header.classList.remove('is-open');
  menuButton.setAttribute('aria-expanded', 'false');
}

if (menuButton && header) {
  menuButton.addEventListener('click', () => {
    const open = header.classList.toggle('is-open');
    menuButton.setAttribute('aria-expanded', String(open));
  });
}

if (menu) {
  menu.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', closeMobileMenu);
  });
}

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') closeMobileMenu();
});

document.querySelectorAll('a[href^="#"]').forEach((link) => {
  link.addEventListener('click', (event) => {
    const href = link.getAttribute('href');
    if (!href || href === '#') return;
    const element = document.querySelector(href);
    if (!element) return;
    event.preventDefault();
    closeMobileMenu();
    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
});

if ('IntersectionObserver' in window) {
  revealItems.forEach((item, index) => {
    item.style.setProperty('--reveal-delay', `${Math.min(index * 80, 240)}ms`);
  });

  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('is-visible');
      revealObserver.unobserve(entry.target);
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -8% 0px' });

  revealItems.forEach((item) => revealObserver.observe(item));
} else {
  revealItems.forEach((item) => item.classList.add('is-visible'));
}

const sectionIds = ['palvelut', 'tyonaytteet', 'prosessi', 'hinnoittelu', 'yhteys'];
const sections = sectionIds.map((id) => document.getElementById(id)).filter(Boolean);
const navLinks = document.querySelectorAll('.desktop-nav a');

if ('IntersectionObserver' in window && sections.length) {
  const navObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      navLinks.forEach((link) => {
        const current = link.getAttribute('href')?.replace('#', '');
        link.classList.toggle('active', current === entry.target.id);
      });
    });
  }, { rootMargin: '-42% 0px -52% 0px' });

  sections.forEach((section) => navObserver.observe(section));
}

if (form && statusText) {
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    statusText.textContent = 'Kiitos! Viesti on vastaanotettu demossa.';
    form.reset();
    setTimeout(() => {
      statusText.textContent = 'Vastaamme yleensä 24 tunnin sisällä.';
    }, 4200);
  });
}
