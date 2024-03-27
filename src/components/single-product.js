export function singleProduct(item) {
  const modal = document.createElement("div");
  modal.className =
    "fixed top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-50 z-50";

  const modalContent = document.createElement("div");
  modalContent.className = "bg-white p-8 rounded-lg max-w-md";

  modalContent.innerHTML = `
    <h2 class="text-xl font-bold mb-4">${item.title}</h2>
    <p class="text-sm text-gray-700 mb-4">${item.description}</p>
    <p class="text-lg font-bold text-gray-900">$${item.price}</p>
    <button class="bg-black text-white rounded-lg px-4 py-2 mt-4">Close</button>
  `;

  const closeButton = modalContent.querySelector("button");
  closeButton.addEventListener("click", () => {
    modal.remove();
  });

  modal.appendChild(modalContent);

  return modal;
}
