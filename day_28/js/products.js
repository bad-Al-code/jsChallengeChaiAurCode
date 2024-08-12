document.addEventListener("DOMContentLoaded", () => {
  const productList = document.getElementById("product-list");
  const cartItems = document.getElementById("cart-items");
  const cartCount = document.getElementById("cart-count");
  const cartTotal = document.getElementById("cart-total");

  let cart = [];

  fetch("products.json")
    .then((response) => response.json())
    .then((data) => {
      data.forEach((product) => {
        const productItem = document.createElement("div");
        productItem.classList.add("product-item");

        productItem.innerHTML = `
                    <img src="${product.imageUrl}" alt="${product.name}">
                    <h3>${product.name}</h3>
                    <p>${product.description}</p>
                    <p class="price">$${product.price.toFixed(2)}</p>
                    <button class="add-to-cart" data-name="${product.name}" data-price="${product.price}" data-description="${product.description}" data-image="${product.imageUrl}">Add to Cart</button>
                `;

        productList.appendChild(productItem);
      });

      document.querySelectorAll(".add-to-cart").forEach((button) => {
        button.addEventListener("click", () => {
          const name = button.getAttribute("data-name");
          const price = parseFloat(button.getAttribute("data-price"));
          const description = button.getAttribute("data-description");
          const image = button.getAttribute("data-image");

          addToCart({ name, price, description, image });
        });
      });
    })
    .catch((error) => console.error("Error loading products:", error));

  function addToCart(product) {
    const existingProduct = cart.find((item) => item.name === product.name);

    if (existingProduct) {
      existingProduct.quantity += 1;
    } else {
      cart.push({ ...product, quantity: 1 });
    }

    updateCartDisplay();
  }

  function updateCartDisplay() {
    cartItems.innerHTML = "";

    let total = 0;

    cart.forEach((item) => {
      const itemTotal = item.price * item.quantity;
      total += itemTotal;

      const cartItem = document.createElement("div");
      cartItem.classList.add("cart-item");
      cartItem.innerHTML = `
                <img src="${item.image}" alt="${item.name}">
                <h3>${item.name}</h3>
                <p>${item.description}</p>
                <p class="price">$${item.price.toFixed(2)}</p>
                <p class="quantity">Quantity: ${item.quantity}</p>
                <p class="item-total">Total: $${itemTotal.toFixed(2)}</p>
                <button class="remove-item" data-name="${item.name}">Remove</button>
            `;

      cartItems.appendChild(cartItem);
    });

    cartTotal.textContent = total.toFixed(2);
    cartCount.textContent = cart.length;

    document.querySelectorAll(".remove-item").forEach((button) => {
      button.addEventListener("click", () => {
        const name = button.getAttribute("data-name");
        removeFromCart(name);
      });
    });
  }

  function removeFromCart(name) {
    cart = cart.filter((item) => item.name !== name);
    updateCartDisplay();
  }
});
