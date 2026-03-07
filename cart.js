// cart.js
let cartItems = [];

function addToCart(name, price) {
  cartItems.push({ name, price });
  updateCartCount();
  alert(name + " added to cart!");
}

function updateCartCount() {
  document.querySelectorAll("#cart-count").forEach(el => {
    el.innerText = cartItems.length;
  });
}

function getCartItems() {
  return cartItems;
}

function getCartTotal() {
  return cartItems.reduce((total, item) => total + item.price, 0);
}
