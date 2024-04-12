import { navItems } from "./nav-items.js";
import { sidebar } from "../sidebar/sidebar.js";






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
        <button class="btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight" id="btn-cart" ><img src="./src/assets/icons/cart.svg" alt="cart" class="h-6 w-6 " />
        </button>
        <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel"></div>`
      
      
           const btnSidebar = document.querySelector('#btn-cart');
           btnSidebar.onclick=sidebar;
           console.log(btnSidebar)
  ;
 


  return nav;
}
