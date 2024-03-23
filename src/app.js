import { getProducts } from "./services/get-products.js";

const main = document.querySelector("main");

main.innerHTML = `<span>${await getProducts().then((products) =>
  JSON.stringify(products)
)}</span>`;
