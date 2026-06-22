import { projects, services, reasons, prices } from "./data.js";
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

function loadPremiumStyles() {
  const href = "styles/premium.css";
  if (document.querySelector(`link[href="${href}"]`)) return;

  const link = document.createElement("link");
  link.rel = "stylesheet";
  link.href = href;
  document.head.appendChild(link);
}

loadPremiumStyles();

const projectGrid = document.querySelector("#projectGrid");
const serviceGrid = document.querySelector("#serviceGrid");
const whyGrid = document.querySelector("#whyGrid");
const priceGrid = document.querySelector("#priceGrid");

renderProjects(projects, projectGrid);
renderServices(services, serviceGrid);
renderReasons(reasons, whyGrid);
renderPrices(prices, priceGrid);

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
