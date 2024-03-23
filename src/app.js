import { cardList } from "./components/card-list.js";
import { getProducts } from "./services/get-products.js";

const main = document.querySelector("main");

main.innerHTML = await getProducts().then((products) => cardList(products));
