document.addEventListener("DOMContentLoaded", () => {
  const productList = document.getElementById("product-list");
  const cartItems = document.getElementById("cart-items");
  const cartCount = document.getElementById("cart-count");
  const cartTotal = document.getElementById("cart-total");
  const paymentMethodSelect = document.getElementById("payment-method");
  const creditCardDetails = document.getElementById("credit-card-details");

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
                <div class="cart-item-details">
                    <h3>${item.name}</h3>
                    <p>${item.description}</p>
                    <p class="price">$${item.price.toFixed(2)}</p>
                    <p class="item-total">Total: $${itemTotal.toFixed(2)}</p>
                    <div class="quantity-controls">
                        <button class="decrease-quantity" data-name="${item.name}">-</button>
                        <span class="quantity">${item.quantity}</span>
                        <button class="increase-quantity" data-name="${item.name}">+</button>
                    </div>
                    <button class="remove-item" data-name="${item.name}">Remove</button>
                </div>
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

    document.querySelectorAll(".increase-quantity").forEach((button) => {
      button.addEventListener("click", () => {
        const name = button.getAttribute("data-name");
        changeQuantity(name, 1);
      });
    });

    document.querySelectorAll(".decrease-quantity").forEach((button) => {
      button.addEventListener("click", () => {
        const name = button.getAttribute("data-name");
        changeQuantity(name, -1);
      });
    });
  }

  function changeQuantity(name, amount) {
    const product = cart.find((item) => item.name === name);

    if (product) {
      product.quantity += amount;

      if (product.quantity <= 0) {
        removeFromCart(name);
      } else {
        updateCartDisplay();
      }
    }
  }

  function removeFromCart(name) {
    cart = cart.filter((item) => item.name !== name);
    updateCartDisplay();
  }

  paymentMethodSelect.addEventListener("change", () => {
    if (paymentMethodSelect.value === "credit-card") {
      creditCardDetails.style.display = "block";
    } else {
      creditCardDetails.style.display = "none";
    }
  });
});
