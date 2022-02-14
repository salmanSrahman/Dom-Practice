document.getElementById("login-btn").addEventListener("click", function () {
  const userEmail = document.getElementById("user-email");
  const userEmailValue = userEmail.value;
  console.log(userEmailValue);
  //   ====== get user email ======
  const userPassword = document.getElementById("user-password");
  const userPasswordValue = userPassword.value;
  console.log(userPasswordValue);
  //   ====== get user password ======
  if (userEmailValue == "") {
    document.getElementById("message").innerHTML = "**Fill the email please!";
    return false;
  }
  if (userPasswordValue == "") {
    document.getElementById("message").innerHTML =
      "**Fill the password please!";
    return false;
  }
});

// ======= log in section to transaction part =========
