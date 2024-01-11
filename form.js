var login = document.getElementById("login");
login.addEventListener("click", getValue);
function getValue() {
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;
  if (email === "") {
    alert("Email không được để trống");
  }
  else if (password === ""){
    alert("Password không được để trống")
  }
  else {
    alert("Chào mừng bạn " + email + " đã đăng nhập");
    location.href="./buoi4.html"
  }
}
