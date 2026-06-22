import { projects } from "./data.js";
import { iconSvg } from "./icons.js";

let activeModal = null;

export function renderProjects(projectList, container) {
  if (!container) return;

  container.innerHTML = projectList.map((project, index) => `
    <article class="case-card reveal" tabindex="0" role="button" data-project-index="${index}" aria-label="Avaa case ${project.title}" style="--case-accent: ${project.accent}">
      <div class="case-media">
        <img src="${project.image}" alt="${project.title} - fiktiivinen case study" loading="lazy" />
        <div class="case-device" aria-hidden="true">
          <span></span>
          <strong>${project.title}</strong>
          <p>${project.industry}</p>
        </div>
      </div>

      <div class="case-content">
        <p class="case-number">0${index + 1} / CASE STUDY</p>
        <h3>${project.title}</h3>
        <p>${project.description}</p>
        <div class="case-outcome">
          <span>Tavoite</span>
          <strong>${project.goal}</strong>
        </div>
        <div class="tags">${project.tags.map((tag) => `<span>${tag}</span>`).join("")}</div>
        <button class="case-link" type="button">Avaa case <span aria-hidden="true">${iconSvg("arrow")}</span></button>
      </div>
    </article>
  `).join("");
}

export function renderServices(items, container) {
  if (!container) return;

  container.innerHTML = items.map((item, index) => `
    <article class="service-card reveal">
      <span class="service-index">0${index + 1}</span>
      <span class="icon-bubble" aria-hidden="true">${iconSvg(item.icon)}</span>
      <h3>${item.title}</h3>
      <p>${item.text}</p>
    </article>
  `).join("");
}

export function renderReasons(items, container) {
  if (!container) return;

  container.innerHTML = items.map((item) => `
    <article class="why-card reveal">
      <span class="icon-bubble" aria-hidden="true">${iconSvg(item.icon)}</span>
      <div>
        <h3>${item.title}</h3>
        <p>${item.text}</p>
      </div>
    </article>
  `).join("");
}

export function renderPrices(items, container) {
  if (!container) return;

  container.innerHTML = items.map((item) => `
    <article class="price-card ${item.featured ? "featured" : ""} reveal">
      ${item.featured ? `<span class="price-badge">Suosituin</span>` : ""}
      <h3>${item.title}</h3>
      <p>${item.subtitle}</p>
      <div class="price"><small>alkaen</small>${item.price}</div>
      <ul>
        ${item.features.map((feature) => `<li><span aria-hidden="true">${iconSvg("check")}</span>${feature}</li>`).join("")}
      </ul>
    </article>
  `).join("");
}

function createModal(id, title, contentHtml) {
  const oldModal = document.getElementById(id);
  if (oldModal) oldModal.remove();

  const modal = document.createElement("section");
  modal.className = "modal";
  modal.id = id;
  modal.setAttribute("role", "dialog");
  modal.setAttribute("aria-modal", "true");
  modal.setAttribute("aria-labelledby", `${id}-title`);
  modal.innerHTML = `
    <div class="modal-backdrop" data-close-modal></div>
    <div class="modal-panel" tabindex="-1">
      <button class="modal-close" type="button" aria-label="Sulje" data-close-modal>×</button>
      <h2 id="${id}-title">${title}</h2>
      ${contentHtml}
    </div>
  `;
  document.body.appendChild(modal);
  return modal;
}

function openModal(modal) {
  if (!modal) return;
  activeModal = modal;
  modal.classList.add("is-open");
  document.body.classList.add("modal-open");
  modal.querySelector(".modal-panel")?.focus();
}

export function closeModal() {
  if (!activeModal) return;
  activeModal.classList.remove("is-open");
  document.body.classList.remove("modal-open");
  activeModal = null;
}

export function setupProjectCards(projectGrid) {
  if (!projectGrid) return;

  const openProject = (target) => {
    const card = target.closest(".case-card");
    if (!card) return;

    const project = projects[Number(card.dataset.projectIndex)];
    if (!project) return;

    const modal = createModal(`project-${project.title.toLowerCase().replaceAll(" ", "-")}`, project.title, `
      <div class="case-modal-grid" style="--case-accent: ${project.accent}">
        <div class="case-modal-image">
          <img src="${project.image}" alt="${project.title} - case-kuva" />
        </div>
        <div class="case-modal-content">
          <p class="modal-kicker">${project.industry}</p>
          <p>${project.details}</p>

          <div class="case-facts">
            <article>
              <span>Tavoite</span>
              <p>${project.goal}</p>
            </article>
            <article>
              <span>Ratkaisu</span>
              <p>${project.solution}</p>
            </article>
            <article>
              <span>Lopputulos</span>
              <p>${project.outcome}</p>
            </article>
          </div>

          <div class="tags">${project.tags.map((tag) => `<span>${tag}</span>`).join("")}</div>
          <div class="modal-actions">
            <button class="btn btn-primary js-modal-quote" type="button">Pyydä samanlainen sivu <span aria-hidden="true">${iconSvg("arrow")}</span></button>
            <a class="btn btn-secondary" href="#yhteys" data-close-modal>Ota yhteyttä</a>
          </div>
        </div>
      </div>
    `);

    modal.querySelector(".js-modal-quote")?.addEventListener("click", () => {
      closeModal();
      document.querySelector(".js-open-quote")?.click();
    });

    openModal(modal);
  };

  projectGrid.addEventListener("click", (event) => openProject(event.target));
  projectGrid.addEventListener("keydown", (event) => {
    if (event.key !== "Enter" && event.key !== " ") return;
    event.preventDefault();
    openProject(event.target);
  });
}

export function setupNavigation() {
  const header = document.querySelector(".site-header");
  const toggle = document.querySelector(".menu-toggle");
  const links = document.querySelectorAll(".desktop-nav a, .mobile-menu a");

  const closeMenu = () => {
    header?.classList.remove("is-open");
    document.body.classList.remove("nav-open");
    toggle?.setAttribute("aria-expanded", "false");
  };

  toggle?.addEventListener("click", () => {
    const isOpen = header.classList.toggle("is-open");
    document.body.classList.toggle("nav-open", isOpen);
    toggle.setAttribute("aria-expanded", String(isOpen));
  });

  links.forEach((link) => link.addEventListener("click", closeMenu));

  const sections = ["top", "projektit", "palvelut", "prosessi", "hinnat", "yhteys"]
    .map((id) => document.getElementById(id))
    .filter(Boolean);

  if (!("IntersectionObserver" in window)) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;

      document.querySelectorAll(".desktop-nav a").forEach((link) => {
        const href = link.getAttribute("href")?.replace("#", "");
        link.classList.toggle("active", href === entry.target.id);
      });
    });
  }, { rootMargin: "-42% 0px -52% 0px" });

  sections.forEach((section) => observer.observe(section));
}

export function setupRevealAnimations() {
  const items = document.querySelectorAll(".reveal");

  if (!("IntersectionObserver" in window)) {
    items.forEach((item) => item.classList.add("visible"));
    return;
  }

  items.forEach((item, index) => {
    item.style.setProperty("--reveal-delay", `${Math.min(index * 45, 360)}ms`);
  });

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add("visible");
      observer.unobserve(entry.target);
    });
  }, { threshold: 0.12, rootMargin: "0px 0px -8% 0px" });

  items.forEach((item) => observer.observe(item));
}

export function setupForms() {
  const contactForm = document.querySelector("#contactForm");
  const contactStatus = document.querySelector("#contactStatus");

  contactForm?.addEventListener("submit", (event) => {
    event.preventDefault();
    contactStatus.textContent = "Kiitos! Viesti on vastaanotettu demossa.";
    contactForm.reset();
  });
}

export function setupQuoteModal() {
  const openButtons = document.querySelectorAll(".js-open-quote, .js-open-contact");

  openButtons.forEach((button) => {
    button.addEventListener("click", () => {
      if (button.classList.contains("js-open-contact")) {
        document.querySelector("#yhteys")?.scrollIntoView({ behavior: "smooth" });
        return;
      }

      const modal = createModal("quoteModal", "Pyydä tarjous", `
        <p class="quote-lead">Kerro lyhyesti, millaista nettisivua tarvitset. Palaan sinulle selkeällä ehdotuksella seuraavasta vaiheesta.</p>
        <form class="contact-form" id="quoteForm">
          <div class="form-row">
            <label><span class="sr-only">Nimi</span><input required name="name" placeholder="Nimi" autocomplete="name" /></label>
            <label><span class="sr-only">Sähköposti</span><input required type="email" name="email" placeholder="Sähköposti" autocomplete="email" /></label>
          </div>
          <label><span class="sr-only">Projektin kuvaus</span><textarea required name="message" rows="5" placeholder="Kuvaile projektisi lyhyesti"></textarea></label>
          <button class="btn btn-primary" type="submit">Lähetä tarjouspyyntö <span aria-hidden="true">${iconSvg("send")}</span></button>
          <p class="form-status" aria-live="polite"></p>
        </form>
      `);

      modal.querySelector("form")?.addEventListener("submit", (event) => {
        event.preventDefault();
        modal.querySelector(".form-status").textContent = "Kiitos! Tarjouspyyntö on vastaanotettu demossa.";
        event.currentTarget.reset();
      });

      openModal(modal);
    });
  });
}

export function setupPremiumInteractions() {
  const cards = document.querySelectorAll(".case-card, .service-card, .price-card");

  cards.forEach((card) => {
    card.addEventListener("pointermove", (event) => {
      const rect = card.getBoundingClientRect();
      const x = ((event.clientX - rect.left) / rect.width) * 100;
      const y = ((event.clientY - rect.top) / rect.height) * 100;
      card.style.setProperty("--pointer-x", `${x}%`);
      card.style.setProperty("--pointer-y", `${y}%`);
    });
  });
}

export function setupGlobalEvents() {
  document.body.addEventListener("click", (event) => {
    if (event.target.matches("[data-close-modal]")) closeModal();
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") closeModal();
  });
}

export function setCurrentYear() {
  const year = document.querySelector("#year");
  if (year) year.textContent = new Date().getFullYear();
}
