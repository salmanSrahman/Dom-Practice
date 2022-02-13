document.getElementById("login-btn").addEventListener("click", function () {
  const userEmail = document.getElementById("user-email");
  const userEmailValue = userEmail.value;
  console.log(userEmailValue);
  //   ====== get user email ======
  const userPassword = document.getElementById("user-password");
  const userPasswordValue = userPassword.value;
  console.log(userPasswordValue);
});
