document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll(".add-to-cart").forEach(button => {
      button.addEventListener("click", () => {
        const name = button.getAttribute("data-name");
        const rawPrice = button.getAttribute("data-price");
        const numericPrice = rawPrice.replace(/[^\d.]/g, ""); 
        const image = button.getAttribute("data-image");

        const cart = JSON.parse(localStorage.getItem("cart")) || [];

        const existingProduct = cart.find(product => product.name === name);
        if (existingProduct) {
          existingProduct.quantity += 1;
        } else {
          cart.push({ name, price: numericPrice, image, quantity: 1 });
        }

        localStorage.setItem("cart", JSON.stringify(cart));
        alert(`${name} added to cart!`);
      });
    });
  });






