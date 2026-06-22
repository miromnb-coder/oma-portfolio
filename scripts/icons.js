export const iconSvg = (name) => {
  const base = {
    monitor: '<rect x="4" y="5" width="16" height="11" rx="1.5"></rect><path d="M9 20h6M12 16v4"></path>',
    rocket: '<path d="M13.5 4.5c2.5-.8 4.6-.6 5.7-.2.4 1.1.6 3.2-.2 5.7-.8 2.6-2.8 5.1-5.9 7.5l-3.6-3.6c2.4-3.1 4.9-5.1 7.5-5.9Z"></path><path d="M9.5 14 6.5 15 4.5 19.5 9 17.5l1-3"></path>',
    phone: '<rect x="7" y="4" width="10" height="16" rx="2"></rect><path d="M10.5 17.5h3"></path>',
    lightning: '<path d="M13 3 6 13h5l-1 8 8-11h-5Z"></path>',
    palette: '<path d="M12 4a8 8 0 0 0 0 16h1c1.1 0 1.7-1.3 1-2.1-.5-.6-.2-1.5.7-1.5H16a4.8 4.8 0 0 0 4.8-4.8C20.8 7.4 16.9 4 12 4Z"></path><path d="M8 10h.01M10.5 7.5h.01M14 7.8h.01M16.5 10.2h.01"></path>',
    chat: '<path d="M5 6h14v10H10l-5 4Z"></path><path d="M8 10h8M8 13h5"></path>',
    check: '<circle cx="12" cy="12" r="9"></circle><path d="m8.5 12.2 2.3 2.3 4.8-5"></path>',
    mail: '<rect x="4.5" y="6.5" width="15" height="11" rx="1"></rect><path d="m5 7 7 6 7-6"></path>',
    pin: '<path d="M12 21s6-5.2 6-11a6 6 0 1 0-12 0c0 5.8 6 11 6 11Z"></path><circle cx="12" cy="10" r="2.2"></circle>',
    arrow: '<path d="M7 17 17 7M9 7h8v8"></path>'
  };
  return `<svg class="site-icon" viewBox="0 0 24 24" aria-hidden="true" focusable="false">${base[name] || base.check}</svg>`;
};

export function setupDecorativeIcons() {
  document.querySelectorAll('.header-cta span[aria-hidden], .hero-actions .btn-primary span[aria-hidden]').forEach((el) => {
    el.innerHTML = iconSvg('arrow');
  });
  document.querySelectorAll('.js-open-contact span[aria-hidden]').forEach((el) => {
    el.innerHTML = iconSvg('mail');
  });
  document.querySelectorAll('.contact-info li span').forEach((el) => {
    const text = el.textContent.trim();
    el.innerHTML = iconSvg(text === '✉' ? 'mail' : text === '☎' ? 'phone' : 'pin');
  });
}
