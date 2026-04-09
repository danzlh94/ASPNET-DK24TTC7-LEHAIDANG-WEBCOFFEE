<!DOCTYPE html>
<html lang="vi">
<head>
  <meta charset="UTF-8">
  <title>Đăng nhập</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>

<h2>Đăng nhập / Đăng ký</h2>

<input id="username" placeholder="Tài khoản">
<input id="password" type="password" placeholder="Mật khẩu">

<button onclick="register()">Đăng ký</button>
<button onclick="login()">Đăng nhập</button>

<script>
function register() {
  localStorage.setItem("user", username.value);
  localStorage.setItem("pass", password.value);
  alert("Đăng ký thành công");
}

function login() {
  if (
    username.value === localStorage.getItem("user") &&
    password.value === localStorage.getItem("pass")
  ) {
    localStorage.setItem("login", "true");
    window.location.href = "index.html";
  } else {
    alert("Sai tài khoản");
  }
}
</script>

</body>
</html>
