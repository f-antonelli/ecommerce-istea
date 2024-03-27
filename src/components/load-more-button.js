import { getProductsWithParams } from "../services/get-products-w-params.js";
import { card } from "./card.js";

let skip = 6;

export function createLoadMoreButton() {
  const loadMoreButton = document.createElement("button");
  loadMoreButton.textContent = "Ver más productos";
  loadMoreButton.className =
    "bg-black text-white outline-none border-none rounded-lg p-2  w-full flex m-auto justify-center mt-8 max-w-xs";

  loadMoreButton.addEventListener("click", async () => {
    const additionalProducts = await getProductsWithParams(3, skip).then(
      (products) => products.products.map((product) => card(product))
    );
    skip += 3;

    const productsSection = document.getElementById("products");
    additionalProducts.forEach((cardElement) => {
      productsSection.appendChild(cardElement);
    });
  });

  return loadMoreButton;
}
