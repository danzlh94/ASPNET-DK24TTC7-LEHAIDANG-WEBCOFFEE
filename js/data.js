const products = [
  {
    id: 1,
    name: "Phin Sữa Đá",
    price: 35000,
    img: "images/phin_sua_da.jpg"
  },
  {
    id: 2,
    name: "Bạc Xỉu",
    price: 39000,
    img: "images/bac_xiu.jpg"
  },
  {
    id: 3,
    name: "Trà Sen Vàng",
    price: 45000,
    img: "images/tra_sen_vang.jpg"
  },
  {
    id: 4,
    name: "Trà Đào Cam Sả",
    price: 48000,
    img: "images/tra_dao.jpg"
  },
  {
    id: 5,
    name: "Cold Brew",
    price: 55000,
    img: "images/cold_brew.jpg"
  }
];

const productList = document.getElementById("productList");

if (productList) {
  products.forEach(p => {
    productList.innerHTML += `
      <div class="card">
        <img src="${p.img}" alt="${p.name}">
        <h3>${p.name}</h3>
        <p class="price">${p.price.toLocaleString()} đ</p>
        <button onclick="addToCart(${p.id})">Thêm vào giỏ</button>
      </div>
    `;
  });
}
