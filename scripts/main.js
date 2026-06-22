import { projects, services, reasons, prices } from "./data.js";
import { setupDecorativeIcons } from "./icons.js";
import {
  renderProjects,
  renderServices,
  renderReasons,
  renderPrices,
  setupNavigation,
  setupProjectCards,
  setupRevealAnimations,
  setupForms,
  setupQuoteModal,
  setupGlobalEvents,
  setCurrentYear
} from "./ui.js";

function loadFinishingStyles() {
  ["styles/premium.css", "styles/icons.css", "styles/mobile-perfect.css"].forEach((href) => {
    if (document.querySelector(`link[href="${href}"]`)) return;

    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = href;
    document.head.appendChild(link);
  });
}

loadFinishingStyles();

const projectGrid = document.querySelector("#projectGrid");
const serviceGrid = document.querySelector("#serviceGrid");
const whyGrid = document.querySelector("#whyGrid");
const priceGrid = document.querySelector("#priceGrid");

renderProjects(projects, projectGrid);
renderServices(services, serviceGrid);
renderReasons(reasons, whyGrid);
renderPrices(prices, priceGrid);
setupDecorativeIcons();

setupNavigation();
setupProjectCards(projectGrid);
setupForms();
setupQuoteModal();
setupGlobalEvents();
setCurrentYear();
setupRevealAnimations();

document.querySelector(".js-show-all-projects")?.addEventListener("click", () => {
  document.querySelector("#projektit")?.scrollIntoView({ behavior: "smooth" });
});
