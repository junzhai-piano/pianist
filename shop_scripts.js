let cart = {};
let total = 0;

function addToCart(productName, price) {
  if (cart[productName]) {
    // Product already exists in the cart, increment quantity
    cart[productName].quantity += 1;
  } else {
    // Product doesn't exist in the cart, add it with quantity 1
    cart[productName] = { price: price, quantity: 1 };
  }

  // Update the cart display
  updateCart();
}

function updateCart() {
  const cartList = document.getElementById("cart");
  const totalElement = document.getElementById("total");
  cartList.innerHTML = "";

  for (const productName in cart) {
    const product = cart[productName];
    const listItem = document.createElement("li");
    const totalPrice = product.price * product.quantity;
    listItem.innerHTML = `${productName} (Quantity: ${
      product.quantity
    }) - $${totalPrice.toFixed(2)}`;
    cartList.appendChild(listItem);
  }

  // Calculate the total price by summing up the prices of all products
  total = Object.values(cart).reduce(
    (acc, product) => acc + product.price * product.quantity,
    0
  );
  totalElement.textContent = total.toFixed(2);
}
