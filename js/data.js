const coffee = [
  {
    id: 1,
    name: "Phin Sữa Đá",
    price: 35000,
    img: "https://images.unsplash.com/photo-1509042239860-f550ce710b93"
  },
  {
    id: 2,
    name: "Bạc Xỉu",
    price: 39000,
    img: "https://visty.vn/wp-content/uploads/2021/07/7-mon-ca-phe-tu-pha-tai-nha-bac-xiu-ca-phe-1216x800.jpg"
  },
  {
    id: 3,
    name: "Cà Phê Phin",
    price: 39000,
    img: "https://eggyolk.vn/wp-content/uploads/2024/05/cach-pha-cafe-phin.jpg"
  }
];

const tea = [
  {
    id: 4,
    name: "Trà Sen Vàng",
    price: 45000,
    img: "https://cf.shopee.vn/file/7ce3afae60cb1a6a80356fa7a5810c80"
  },
  {
    id: 5,
    name: "Trà Đào Cam Sả",
    price: 48000,
    img: "https://cdn.tgdd.vn/2020/07/CookRecipe/GalleryStep/thanh-pham-273.jpg"
  },
  {
    id: 6,
    name: "Trà Xanh Matcha",
    price: 48000,
    img: "https://www.miraihuman.com/storage/miraiuploads/MATCHA%20NH%E1%BA%ACT%20B%E1%BA%A2N/MATCHA%20NH%E1%BA%ACT%20B%E1%BA%A2N%20-%20NH%E1%BB%80U%20%C4%90I%E1%BB%80U%20TH%C3%9A%20V%E1%BB%8A.jpg"
  }
];

let products = [...coffee, ...tea];
localStorage.setItem("products", JSON.stringify(products));

function render(id, list) {
  const el = document.getElementById(id);
  if (!el) return;

  el.innerHTML = ""; // reset tránh render chồng

  list.forEach(p => {
    el.innerHTML += `
      <div class="menu-item">
        <img src="${p.img}" alt="${p.name}">
        <div class="menu-info">
          <h4>${p.name}</h4>
          <span>${p.price.toLocaleString()} đ</span>
        </div>
        <button onclick="addToCart(${p.id})">+</button>
      </div>
    `;
  });
}
``

render("coffeeList", coffee);
render("teaList", tea);
