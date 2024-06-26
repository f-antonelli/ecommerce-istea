import { cartProductItem } from "./cartProductItem.js";
import { cartFooter } from "./cartFooter.js";

export function cart() {
  const cartElement = document.createElement("div");
  cartElement.className = "relative z-10";

  cartElement.innerHTML = `
    <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>

    <div class="fixed inset-0">
      <div class="absolute inset-0 overflow-hidden">
        <div
          class="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10"
        >
          <div class="pointer-events-auto w-screen max-w-md">
            <div id="cartBody"
              class="flex h-full flex-col bg-white shadow-xl animate-slide-right"
            >
              <div class="flex-1 overflow-y-auto px-4 py-6 sm:px-6">
                <div class="flex items-start justify-between">
                  <h2
                    class="text-lg font-medium text-gray-900"
                    id="slide-over-title"
                  >
                    Shopping cart
                  </h2>
                  <div id="closeModal" class="ml-3 flex h-7 items-center">
                    <button
                      type="button"
                      class="relative -m-2 p-2 text-gray-400 hover:text-gray-500"
                    >
                      <span class="absolute -inset-0.5"></span>
                      <span class="sr-only">Close panel</span>
                      <svg
                        class="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                    </button>
                  </div>
                </div>

                <div class="mt-8">
                  <div class="flow-root">
                    <ul role="list" class="-my-6 divide-y divide-gray-200" id="cartItemList">
                    </ul>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;

  cartElement.querySelector("#closeModal").addEventListener("click", () => {
    cartElement.remove();
  });

  cartElement.querySelector("#cartBody").appendChild(cartFooter());

  const cartItems = JSON.parse(localStorage.getItem("cart")) || [];

  const cartItemList = cartElement.querySelector("#cartItemList");

  cartItems.forEach((item) => {
    const li = cartProductItem(item);
    cartItemList.appendChild(li);
  });

  return cartElement;
}
