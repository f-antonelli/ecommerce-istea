import { cardList } from "./components/card-list.js";
import { nav } from "./components/navbar/navbar.js";
import { getProducts } from "./services/get-products.js";

nav();

const main = document.querySelector("main");

main.innerHTML = await getProducts().then((products) => cardList(products));
