// script.js
document.getElementById("loginForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const message = document.getElementById("message");

  if (email === "usuario@teste.com" && password === "123456") {
    message.style.color = "green";
    message.textContent = "Login bem-sucedido!";
  } else {
    message.style.color = "red";
    message.textContent = "E-mail ou senha incorretos.";
  }
});