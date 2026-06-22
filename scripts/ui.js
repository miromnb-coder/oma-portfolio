import { projects } from "./data.js";
import { iconSvg } from "./icons.js";

let activeModal = null;

export function renderProjects(projectList, container) {
  if (!container) return;

  container.innerHTML = projectList.map((project, index) => `
    <article class="project-card reveal" tabindex="0" role="button" data-project-index="${index}" aria-label="Avaa projekti ${project.title}">
      <div class="project-image" style="background-image: linear-gradient(180deg, rgba(7,17,31,0.04), rgba(7,17,31,0.24)), url('${project.image}')">
        <span>${project.title}</span>
      </div>
      <div class="project-body">
        <h3>${project.title}</h3>
        <p>${project.description}</p>
        <div class="tags">${project.tags.map((tag) => `<span>${tag}</span>`).join("")}</div>
      </div>
    </article>
  `).join("");
}

export function renderServices(items, container) {
  if (!container) return;

  container.innerHTML = items.map((item) => `
    <article class="service-card reveal">
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
      <h3>${item.title}</h3>
      <p>${item.text}</p>
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
      <div class="price">${item.price} <small>alkaen</small></div>
      <div class="check-line"><span aria-hidden="true">${iconSvg("check")}</span> Responsiivinen design</div>
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
    const card = target.closest(".project-card");
    if (!card) return;

    const project = projects[Number(card.dataset.projectIndex)];
    if (!project) return;

    const modal = createModal(`project-${project.title.toLowerCase().replaceAll(" ", "-")}`, project.title, `
      <p>${project.details}</p>
      <p><strong>Tekniikat:</strong> ${project.tags.join(", ")}</p>
      <div class="modal-actions">
        <button class="btn btn-primary js-modal-quote" type="button">Pyydä samanlainen sivu</button>
        <a class="btn btn-secondary" href="#yhteys" data-close-modal>Ota yhteyttä</a>
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

  const sections = ["top", "projektit", "palvelut", "hinnat", "minusta", "yhteys"]
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

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

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
        <p>Kerro lyhyesti, millaista nettisivua tarvitset. Tämä demo näyttää onnistumisviestin, mutta oikeassa käytössä lomake voidaan yhdistää sähköpostiin.</p>
        <form class="contact-form" id="quoteForm">
          <div class="form-row">
            <label><span class="sr-only">Nimi</span><input required name="name" placeholder="Nimi" autocomplete="name" /></label>
            <label><span class="sr-only">Sähköposti</span><input required type="email" name="email" placeholder="Sähköposti" autocomplete="email" /></label>
          </div>
          <label><span class="sr-only">Projektin kuvaus</span><textarea required name="message" rows="4" placeholder="Kuvaile projektisi lyhyesti"></textarea></label>
          <button class="btn btn-primary" type="submit">Lähetä tarjouspyyntö</button>
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
