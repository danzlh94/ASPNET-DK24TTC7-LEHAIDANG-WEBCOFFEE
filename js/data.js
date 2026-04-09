const products = [
  {
    id: 1,
    name: "Phin Sữa Đá",
    price: 35000,
    img: "https://static.wixstatic.com/media/bdc8a3_9c7c8a0454194bcb803d4d7a64b0807f~mv2.jpg/v1/fill/w_480,h_480,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/bdc8a3_9c7c8a0454194bcb803d4d7a64b0807f~mv2.jpg"
  },
  {
    id: 2,
    name: "Bạc Xỉu",
    price: 39000,
    img: "https://visty.vn/wp-content/uploads/2021/07/7-mon-ca-phe-tu-pha-tai-nha-bac-xiu-ca-phe-1216x800.jpg"
  },
  {
    id: 3,
    name: "Trà Sen Vàng",
    price: 45000,
    img: "https://cf.shopee.vn/file/7ce3afae60cb1a6a80356fa7a5810c80"
  },
  {
    id: 4,
    name: "https://cdn.tgdd.vn/2020/07/CookRecipe/GalleryStep/thanh-pham-273.jpg"
    price: 48000,
    img: "images/tra_dao.jpg"
  },
  {
    id: 5,
    name: "Cold Brew",
    price: 55000,
    img: "https://kingcoffee.com.vn/wp-content/uploads/2025/12/Ca-phe-cold-brew-la-gi-1024x683.jpg"
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
