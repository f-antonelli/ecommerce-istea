import { card } from "./card.js";

export function cardList(items) {
  return `
    <section class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"> 
      ${items.products.map((item) => card(item)).join("")}
    </section>`;
}
