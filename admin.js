if (localStorage.getItem("login") !== "true") {
  alert("Chưa đăng nhập");
  window.location.href = "login.html";
}

function addProduct() {
  const name = prompt("Tên sản phẩm");
  const price = prompt("Giá");
  const img = prompt("Link hình");

  const products = JSON.parse(localStorage.getItem("products")) || [];
  products.push({ id: Date.now(), name, price, img });
  localStorage.setItem("products", JSON.stringify(products));
  location.reload();
}
``