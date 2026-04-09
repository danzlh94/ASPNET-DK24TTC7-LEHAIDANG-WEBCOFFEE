let cart = JSON.parse(localStorage.getItem("cart")) || [];

function addToCart(id) {
  cart.push(id);
  localStorage.setItem("cart", JSON.stringify(cart));
  alert("Đã thêm vào giỏ");
}

const cartItems = document.getElementById("cartItems");
if (cartItems) {
  cart.forEach(id => {
    cartItems.innerHTML += `<p>Sản phẩm ID: ${id}</p>`;
  });
}

function checkout() {
  alert("Đặt hàng thành công!");
  localStorage.removeItem("cart");
}