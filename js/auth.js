function register() {
  localStorage.setItem("user", user.value);
  localStorage.setItem("pass", pass.value);
  alert("Đăng ký thành công");
}

function login() {
  if (
    user.value === localStorage.getItem("user") &&
    pass.value === localStorage.getItem("pass")
  ) {
    alert("Đăng nhập thành công");
    window.location.href = "index.html";
  } else {
    alert("Sai thông tin");
  }
}
``
