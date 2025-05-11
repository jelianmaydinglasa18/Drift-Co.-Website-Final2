function loadCart() {
      const cart = JSON.parse(localStorage.getItem("cart")) || [];
      const cartItems = document.getElementById("cart-items");
      const cartTotal = document.getElementById("cart-total");
      cartItems.innerHTML = "";

      let total = 0;

      cart.forEach((item, index) => {
        const itemTotal = item.price * item.quantity;
        total += itemTotal;

        const itemDiv = document.createElement("div");
        itemDiv.classList.add("cart-item");
        itemDiv.innerHTML = `
          <img src="${item.image}" alt="${item.name}">
          <div class="cart-item-info">
            <h3>${item.name}</h3>
            <p>₱${item.price} x ${item.quantity}</p>
            <p><strong>Subtotal: ₱${(item.price * item.quantity).toFixed(2)}</strong></p>
          </div>
          <button class="remove-button" onclick="removeFromCart(${index})">Remove</button>
        `;
        cartItems.appendChild(itemDiv);
      });

      cartTotal.textContent = `Total: ₱${total.toFixed(2)}`;
    }

    function removeFromCart(index) {
      const cart = JSON.parse(localStorage.getItem("cart")) || [];
      cart.splice(index, 1);
      localStorage.setItem("cart", JSON.stringify(cart));
      loadCart();
    }

    function clearCart() {
      localStorage.removeItem("cart");
      loadCart();
    }

    // Initial load
    loadCart();