import { projects, services, reasons, prices } from "./data.js?v=12";
import { setupDecorativeIcons } from "./icons.js?v=12";
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
  setupPremiumInteractions,
  setupGlobalEvents,
  setCurrentYear
} from "./ui.js?v=12";

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
setupPremiumInteractions();

document.querySelector(".js-show-all-projects")?.addEventListener("click", () => {
  document.querySelector("#projectGrid .case-card")?.scrollIntoView({ behavior: "smooth", block: "center" });
});
