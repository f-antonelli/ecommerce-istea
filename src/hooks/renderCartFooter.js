import { cartFooter } from "../components/cart/cartFooter.js";

export function renderCartFooter() {
  const oldFooter = document.querySelector("#cartFooter");
  const newFooter = cartFooter();
  oldFooter.parentNode.replaceChild(newFooter, oldFooter);
}
