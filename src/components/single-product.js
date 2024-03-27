export function singleProduct(item) {
  const modal = document.createElement("div");
  modal.className =
    "fixed top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-50 z-50";

  const modalContent = document.createElement("div");
  modalContent.className = "relative bg-white p-8 rounded-lg w-xl flex m-2";

  modalContent.innerHTML = `
    <img src="${item.thumbnail}" alt="${item.title}" class="w-1/2 h-auto object-cover mr-4">
    <div class="w-1/2 flex flex-col justify-between">
      <div>
        <h2 class="text-xl font-bold mb-4">${item.title}</h2>
        <p class="text-sm text-gray-700 mb-4">${item.description}</p>
        <p class="text-lg font-bold text-gray-900">$${item.price}</p>
      </div>
      <button class="bg-black text-white rounded-lg px-4 py-2 mt-4">Add to Cart</button>
    </div>
    <button id="closeModalBtn" class="absolute top-4 right-4 text-gray-700 hover:text-gray-900">
      <img src="./src/assets/icons/close.svg" class="w-6 h-6 fill-current" />
    </button>
  `;

  const closeButton = modalContent.querySelector("#closeModalBtn");

  closeButton.addEventListener("click", () => {
    modal.remove();
  });

  modal.appendChild(modalContent);

  return modal;
}
