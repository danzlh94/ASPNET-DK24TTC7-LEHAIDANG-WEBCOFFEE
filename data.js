const products = [
  {
    id: 1,
    name: "Phin Sữa Đá",
    price: 35000,
    img: "https://images.unsplash.com/photo-1552058544-f2b08422138a"
  },
  {
    id: 2,
    name: "Trà Sen Vàng",
    price: 40000,
    img: "https://images.unsplash.com/photo-1559561854-8c3ecb2d2cea"
  }
];

const productList = document.getElementById("productList");

if (productList) {
  products.forEach(p => {
    productList.innerHTML += `
      <div class="card">
        <img src="${p.img}">
        <h3>${p.name}</h3>
        <p>${p.price} đ</p>
        <button onclick="addToCart(${p.id})">Mua</button>
      </div>
    `;
  });
}