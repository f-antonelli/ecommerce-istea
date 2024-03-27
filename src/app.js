import { createLoadMoreButton } from "./components/load-more-button.js";
import { nav } from "./components/navbar/navbar.js";
import { loadProducts } from "./hooks/loadMore.js";

nav();

const productsSection = document.getElementById("products");

(async function loadInitialProducts() {
  const productsCards = await loadProducts();
  productsCards.forEach((cardElement) =>
    productsSection.appendChild(cardElement)
  );
})();

const loadMoreButton = createLoadMoreButton();
productsSection.parentNode.appendChild(loadMoreButton);
