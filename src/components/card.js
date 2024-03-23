export function card(item) {
  return `<div class="bg-white rounded-lg overflow-hidden shadow-md">
  <img class="w-full h-48 object-cover" src="${item.thumbnail}" alt="${item.title}" />
  <div class="p-4">
    <h4 class="font-bold text-lg mb-2">${item.title}</h4>
    <p class="text-gray-700 mb-2">${item.price}</p>
    <span class="text-sm text-gray-500">${item.stock}</span>
  </div>
</div>`;
}
