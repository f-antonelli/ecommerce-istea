import { card } from "./components/card.js";
import { nav } from "./components/navbar/navbar.js";
import { getProducts } from "./services/get-products.js";

nav();

const productsSection = document.getElementById("products");

await getProducts().then((products) => {
  const cards = products.products.map((product) => card(product));

  cards.forEach((cardElement) => {
    productsSection.appendChild(cardElement);
  });
});
