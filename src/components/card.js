import { singleProduct } from "./single-product.js";

export function card(item) {
  const cardElement = document.createElement("div");
  cardElement.className =
    "w-full md:max-w-xs bg-white rounded-lg overflow-hidden shadow-md max-w-xs";

  cardElement.innerHTML = `
    <img class="w-full h-48 object-cover" src="${item.thumbnail}" alt="${item.title}" />
    <div class="flex flex-col p-4">
      <div class="flex items-center justify-between mb-2">
        <h4 class="font-bold text-xs">${item.title}</h4>
        <p>${item.rating}</p>
      </div>
      <div class="flex items-center justify-between mb-2">
        <p class="text-lg mb-2">$${item.price}</p>
        <button class="bg-black text-white outline-none border-none rounded-lg p-2 text-xs">View Product</button>
      </div>
      <span class="flex justify-end text-sm text-gray-500">stock: ${item.stock}</span>
    </div>
  `;

  cardElement.querySelector("button").addEventListener("click", () => {
    singleProduct(item.id);
  });

  return cardElement;
}
