import { card } from "./card.js";

export function cardList(items) {
  const { products } = items;

  return `
    <section class="grid grid-cols-pr1 md:grid-cols-pr2 lg:grid-cols-3 lg:max-w-4xl place-content-center gap-4 m-auto"> 
      ${products.map((item) => card(item)).join("")}
    </section>`;
}
