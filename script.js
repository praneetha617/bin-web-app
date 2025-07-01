document.getElementById("login-form").addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const password = document.getElementById("password").value;
  const confirmPassword = document.getElementById("confirm-password").value;

  if (password !== confirmPassword) {
    alert("Passwords do not match!");
    return;
  }

  document.getElementById("login-container").style.display = "none";
  document.getElementById("main-page").style.display = "block";
});

document.getElementById("logout").addEventListener("click", function () {
  document.getElementById("login-form").reset();
  document.getElementById("main-page").style.display = "none";
  document.getElementById("login-container").style.display = "block";
});
