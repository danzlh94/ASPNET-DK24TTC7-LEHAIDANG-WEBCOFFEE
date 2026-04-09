const products = JSON.parse(localStorage.getItem("products")) || [
  {
    id: 1,
    name: "Coffee Đen",
    price: 25000,
    img: "https://images.unsplash.com/photo-1509042239860-f550ce710b93"
  }
];

function renderProducts() {
  const list = document.getElementById("productList");
  list.innerHTML = "";
  products.forEach(p => {
    list.innerHTML += `
      <div class="card">
        <img src="${p.img}">
        <h3>${p.name}</h3>
        <p>${p.price} đ</p>
      </div>
    `;
  });
}
renderProducts();

/* CHAT */
function sendChat() {
  const chatBox = document.getElementById("chatBox");
  const msg = chatInput.value;
  chatBox.innerHTML += `<div>👤 ${msg}</div>`;
  chatInput.value = "";
}
