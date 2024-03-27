import { API_URL } from "../config/envs.js";

export async function getProductsWithParams(limit = 6, skip = 0) {
  return await fetch(`${API_URL}/products?limit=${limit}&skip=${skip}`)
    .then((res) => res.json())
    .catch((error) => console.log(error));
}
