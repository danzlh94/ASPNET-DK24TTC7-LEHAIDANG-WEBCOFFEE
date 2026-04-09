let cart = JSON.parse(localStorage.getItem("cart")) || [];
let products = JSON.parse(localStorage.getItem("products")) || [];

function addToCart(id) {
  cart.push(id);
  localStorage.setItem("cart", JSON.stringify(cart));
  alert("Đã thêm vào giỏ");
}

function renderCart() {
  const el = document.getElementById("cartItems");
  const totalEl = document.getElementById("totalPrice");
  if (!el) return;

  el.innerHTML = "";
  let total = 0;

  cart.forEach((id, i) => {
    const p = products.find(x => x.id === id);
    total += p.price;
    el.innerHTML += `
      <div class="cart-item">
        <img src="${p.img}">
        <div>
          <h4>${p.name}</h4>
          <p>${p.price.toLocaleString()} đ</p>
        </div>
        <button onclick="removeItem(${i})">✖</button>
      </div>
    `;
  });

  totalEl.textContent = total.toLocaleString();
}

function removeItem(i) {
  cart.splice(i, 1);
  localStorage.setItem("cart", JSON.stringify(cart));
  renderCart();
}

function checkout() {
  alert("Cảm ơn bạn đã đặt hàng ❤️");
  localStorage.removeItem("cart");
  cart = [];
  renderCart();
}

renderCart();
