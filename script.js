// script.js

// Adiciona um ouvinte de evento para o envio do formulário
document.getElementById("loginForm").addEventListener("submit", function (e) {
  e.preventDefault(); // Impede o envio padrão do formulário

  // Captura os valores dos campos
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const message = document.getElementById("message");

  // Verifica se os dados estão corretos (simulação)
  if (email === "usuario@teste.com" && password === "123456") {
    message.style.color = "green";
    message.textContent = "Login bem-sucedido!";
  } else {
    message.style.color = "red";
    message.textContent = "E-mail ou senha incorretos.";
  }
});