import { API_URL } from "../config/envs.js";

export async function getProducts() {
  return await fetch(`${API_URL}/products`)
    .then((res) => res.json())
    .catch((error) => console.log(error));
}
