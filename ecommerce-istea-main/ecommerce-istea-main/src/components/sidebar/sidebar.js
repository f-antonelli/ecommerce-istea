
export function sidebar(){
  const sidebarCart = document.querySelector('#offcanvasRight');
     sidebarCart.innerHTML =
    `<div class="offcanvas-header">
    <h5 class="offcanvas-title" id="offcanvasRightLabel">Offcanvas right</h5>
    <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
  </div>
  <div class="offcanvas-body">
    ...
  </div>`;
  console.log(sidebarCart)
}

