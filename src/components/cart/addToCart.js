export function addToCart(item) {
  let cart = localStorage.getItem("cart");
  !cart ? (cart = []) : (cart = JSON.parse(cart));

  const existingItemIndex = cart.findIndex(
    (cartItem) => cartItem.id === item.id
  );

  if (existingItemIndex !== -1) {
    cart[existingItemIndex].quantity += item.quantity;
    cart[existingItemIndex].price +=
      item.price * cart[existingItemIndex].quantity;
  } else {
    cart.push({ ...item });
  }

  localStorage.setItem("cart", JSON.stringify(cart));
}
