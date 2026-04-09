// Lấy dữ liệu
const cartItemsEl = document.getElementById("cartItems");
const totalPriceEl = document.getElementById("totalPrice");

let cart = JSON.parse(localStorage.getItem("cart")) || [];
let products = JSON.parse(localStorage.getItem("products")) || [];

// Hiển thị giỏ hàng
function renderCart() {
  cartItemsEl.innerHTML = "";
  let total = 0;

  if (cart.length === 0) {
    cartItemsEl.innerHTML = "<p>Giỏ hàng trống.</p>";
    totalPriceEl.textContent = "0";
    return;
  }

  cart.forEach((id, index) => {
    const product = products.find(p => p.id === id);
    if (!product) return;

    total += product.price;

    cartItemsEl.innerHTML += `
      <div class="cart-item">
        <img src="${product.img}" alt="${product.name}">
        <div class="cart-info">
          <h4>${product.name}</h4>
          <p>${product.price.toLocaleString()} đ</p>
        </div>
        <button onclick="removeItem(${index})">✖</button>
      </div>
    `;
  });

  totalPriceEl.textContent = total.toLocaleString();
}

// Xóa sản phẩm
function removeItem(index) {
  cart.splice(index, 1);
  localStorage.setItem("cart", JSON.stringify(cart));
  renderCart();
}

// Thanh toán
function checkout() {
  if (cart.length === 0) {
    alert("Giỏ hàng trống!");
    return;
  }
  alert("Đặt hàng thành công! Cảm ơn bạn ❤️");
  cart = [];
  localStorage.setItem("cart", JSON.stringify(cart));
  renderCart();
}

renderCart();
``
