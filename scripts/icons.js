export const iconSvg = (name, className = "site-icon") => {
  const icons = {
    monitor: `
      <rect x="3.8" y="5" width="16.4" height="10.8" rx="1.7"></rect>
      <path d="M9 20h6"></path>
      <path d="M12 15.8V20"></path>
    `,
    rocket: `
      <path d="M13.3 4.5c2.5-.8 4.7-.6 5.9-.2.4 1.2.6 3.4-.2 5.9-.8 2.6-2.8 5.2-6 7.7l-4.1-4.1c2.5-3.2 5.1-5.2 7.7-6Z"></path>
      <path d="M9.3 14.2 6.4 15 4.2 19.8 9 17.6l.8-2.9"></path>
      <path d="M15.1 8.7h.01"></path>
    `,
    phone: `
      <rect x="7.3" y="3.6" width="9.4" height="16.8" rx="2.1"></rect>
      <path d="M10.4 17.4h3.2"></path>
    `,
    lightning: `
      <path d="M13.1 2.9 5.8 13h5.4l-1.1 8.1L18.4 10h-5.6Z"></path>
    `,
    palette: `
      <path d="M12 3.7a8.3 8.3 0 0 0 0 16.6h1.1c1.1 0 1.7-1.3 1-2.2-.5-.6-.2-1.6.7-1.6H16a5 5 0 0 0 5-5c0-4.4-4-7.8-9-7.8Z"></path>
      <path d="M7.9 10.2h.01M10.5 7.5h.01M14 7.7h.01M16.4 10.1h.01"></path>
    `,
    chat: `
      <path d="M5 6.2h14v9.5H9.7L5 19.5Z"></path>
      <path d="M8.3 10h7.4"></path>
      <path d="M8.3 12.8h4.8"></path>
    `,
    check: `
      <circle cx="12" cy="12" r="8.6"></circle>
      <path d="m8.4 12.1 2.4 2.4 4.9-5.1"></path>
    `,
    badgeCheck: `
      <path d="M12 3.5 14 5l2.5-.1.9 2.3 2 1.5-.7 2.4.7 2.4-2 1.5-.9 2.3-2.5-.1-2 1.5-2-1.5-2.5.1-.9-2.3-2-1.5.7-2.4-.7-2.4 2-1.5.9-2.3 2.5.1Z"></path>
      <path d="m8.8 12.2 2.1 2.1 4.5-4.8"></path>
    `,
    mail: `
      <rect x="4.3" y="6.4" width="15.4" height="11.2" rx="1.4"></rect>
      <path d="m5 7.2 7 5.7 7-5.7"></path>
    `,
    pin: `
      <path d="M12 21s6.2-5.3 6.2-11.1a6.2 6.2 0 0 0-12.4 0C5.8 15.7 12 21 12 21Z"></path>
      <circle cx="12" cy="9.9" r="2.2"></circle>
    `,
    arrow: `
      <path d="M7 17 17 7"></path>
      <path d="M9 7h8v8"></path>
    `,
    send: `
      <path d="M21 3 10.8 13.2"></path>
      <path d="m21 3-6.2 18-4-7.8L3 9.2Z"></path>
    `,
    code: `
      <path d="m8 8-4 4 4 4"></path>
      <path d="m16 8 4 4-4 4"></path>
      <path d="m14 5-4 14"></path>
    `,
    seo: `
      <circle cx="10.5" cy="10.5" r="5.8"></circle>
      <path d="m15 15 5 5"></path>
      <path d="m8.4 10.6 1.5 1.5 3-3.2"></path>
    `
  };

  return `<svg class="${className}" viewBox="0 0 24 24" aria-hidden="true" focusable="false">${icons[name] || icons.check}</svg>`;
};

export function setupDecorativeIcons() {
  document.querySelectorAll('.header-cta span[aria-hidden], .hero-actions .btn-primary span[aria-hidden], .text-link span[aria-hidden]')
    .forEach((el) => {
      el.innerHTML = iconSvg('arrow');
    });

  document.querySelectorAll('.js-open-contact span[aria-hidden]')
    .forEach((el) => {
      el.innerHTML = iconSvg('mail');
    });

  document.querySelectorAll('.contact-form .btn-primary span[aria-hidden]')
    .forEach((el) => {
      el.innerHTML = iconSvg('send');
    });

  document.querySelectorAll('.trust-row span')
    .forEach((el) => {
      const text = el.textContent.replace('✓', '').trim();
      el.innerHTML = `${iconSvg('check', 'site-icon trust-icon')} ${text}`;
    });

  document.querySelectorAll('.contact-info li span').forEach((el) => {
    const text = el.textContent.trim();
    el.innerHTML = iconSvg(text === '✉' ? 'mail' : text === '☎' ? 'phone' : 'pin');
  });
}
