document.addEventListener("DOMContentLoaded", () => {
  const productList = document.getElementById("product-list");

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
                    <button>Add to Cart</button>
                `;

        productList.appendChild(productItem);
      });
    })
    .catch((error) => console.error("Error loading products:", error));
});
