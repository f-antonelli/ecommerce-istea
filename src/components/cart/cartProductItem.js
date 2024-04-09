import { renderCartFooter } from "../../hooks/renderCartFooter.js";

export function cartProductItem(item) {
  const itemList = document.createElement("li");
  itemList.className = "flex py-6";
  itemList.innerHTML = `
    <div
      class="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200"
    >
      <img
        src="${item.thumbnail}"
        alt="${item.title}"
        class="h-full w-full object-cover object-center"
      />
    </div>

    <div class="ml-4 flex flex-1 flex-col">
      <div>
        <div class="flex justify-between text-base font-medium text-gray-900">
          <h3>
            <a href="#">${item.title}</a>
          </h3>
          <p class="ml-4">$ ${item.price}</p>
        </div>
        <p class="mt-1 text-sm text-gray-500">${item.category}</p>
      </div>
      <div class="flex flex-1 items-end justify-between text-sm">
        <p class="text-gray-500">Qty: ${item.quantity}</p>

        <div class="flex">
          <button
            id="removeItem"
            type="button"
            class="font-medium text-indigo-600 hover:text-indigo-500"
          >
            Remove
          </button>
        </div>
      </div>
    </div>
  `;

  itemList.querySelector("#removeItem").addEventListener("click", () => {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    cart = cart.filter((cartItem) => cartItem.id !== item.id);

    localStorage.setItem("cart", JSON.stringify(cart));

    itemList.remove();

    renderCartFooter();
  });

  return itemList;
}
