var signup = document.getElementById("signup");
signup.addEventListener("click", getValue);
function getValue() {
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;
  let name = document.getElementById("name").value;
  let password2 = document.getElementById("password2").value;
  if (email === "") {
    alert("Email không được để trống");
  }
  else if (password === ""){
    alert("Password không được để trống")
  }
  else if (password2 !== password){
    alert("Nhập lại mật khẩu")
  }
  else if (name === ""){
    alert("Vui lòng nhập họ tên")
}
  else {
    alert("Chúc mừng bạn đăng kí thành công");
   location.href="./form.html"
  }
}
