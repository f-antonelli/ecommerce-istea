export function cartFooter() {
  const footerElement = document.createElement("div");
  footerElement.className = "border-t border-gray-200 px-4 py-6 sm:px-6";
  footerElement.id = "cartFooter";

  // Obtener el carrito del localStorage
  const cartItems = JSON.parse(localStorage.getItem("cart")) || [];

  // Calcular el subtotal sumando los precios de todos los elementos en el carrito
  const subtotal = cartItems.reduce((acc, item) => acc + item.price, 0);

  footerElement.innerHTML = `
      <div class="flex justify-between text-base font-medium text-gray-900">
        <p>Subtotal</p>
        <p>$${subtotal.toFixed(2)}</p>
      </div>
      <p class="mt-0.5 text-sm text-gray-500">
        Shipping and taxes calculated at checkout.
      </p>
      <div class="mt-6">
        <a
          href="#"
          class="flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700"
          >Checkout</a
        >
      </div>
      <div
        class="mt-6 flex justify-center text-center text-sm text-gray-500"
      >
        <p>
          or
          <button
            type="button"
            class="font-medium text-indigo-600 hover:text-indigo-500"
          >
            Continue Shopping
            <span aria-hidden="true"> &rarr;</span>
          </button>
        </p>
      </div>
  `;

  return footerElement;
}
