// script.js
let cart = [];
let total = 0;

function addToCart(productName, price) {
  cart.push({ productName, price });
  total += price;

  // Update the cart display
  updateCart();
}

function updateCart() {
  const cartList = document.getElementById("cart");
  const totalElement = document.getElementById("total");
  cartList.innerHTML = "";

  cart.forEach((item) => {
    const listItem = document.createElement("li");
    listItem.innerHTML = `${item.productName}: $${item.price.toFixed(2)}`;
    cartList.appendChild(listItem);
  });

  totalElement.textContent = total.toFixed(2);
}
