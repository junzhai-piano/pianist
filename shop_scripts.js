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

function removeFromCart(productName) {
  if (cart[productName] && cart[productName].quantity > 0) {
    // Decrement the quantity, and remove if it reaches 0
    cart[productName].quantity -= 1;
    if (cart[productName].quantity === 0) {
      delete cart[productName];
    }
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

    listItem.innerHTML = `
            <div class="cart-item">
                <span class="item-name">${productName} (Quantity: ${
      product.quantity
    }) - $${totalPrice.toFixed(2)}</span>
                <div class="quantity-buttons">
                    <button class="remove" onclick="removeFromCart('${productName}')">-</button>
                    <button class="add" onclick="addToCart('${productName}', ${
      product.price
    })">+</button>
                </div>
            </div>
        `;
    cartList.appendChild(listItem);
  }

  // Calculate the total price by summing up the prices of all products
  total = Object.values(cart).reduce(
    (acc, product) => acc + product.price * product.quantity,
    0
  );
  totalElement.textContent = total.toFixed(2);
}
