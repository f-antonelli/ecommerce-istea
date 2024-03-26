import { navItems } from "./nav-items.js";

export function nav() {
  const nav = document.querySelector("nav");

  nav.innerHTML = `
    <div class="flex items-center">
      <img src="./src/assets/icons/logo.svg" alt="Logo" class="h-8 mr-4" />
      <span class=" text-lg font-semibold">Ecommerce</span>
    </div>

    <div class="flex items-center space-x-4">
      ${navItems
        .map(
          (item) => `
        <a href="#" >
          ${item.name}
        </a>
      `
        )
        .join("")}
      <img src="./src/assets/icons/cart.svg" alt="cart" class="h-6 w-6 " />
    </div>


  `;

  return nav;
}
