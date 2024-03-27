import { card } from "../components/card.js";
import { getProductsWithParams } from "../services/get-products-w-params.js";

export async function loadProducts() {
  return getProductsWithParams(6).then((products) =>
    products.products.map((product) => card(product))
  );
}
