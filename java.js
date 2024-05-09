
function salvarDados() {
  // Obter os valores dos campos
  var nome = document.getElementById("nome").value;
  var email = document.getElementById("email").value;
  var senha = document.getElementById("senha").value;
  var data = document.getElementById("data").value;
  var telefone = document.getElementById("telefone").value;
  var cidade = document.getElementById("cidade").value;

  // Salvar os valores no localStorage
  localStorage.setItem("nome", nome);
  localStorage.setItem("email", email);
  localStorage.setItem("senha", senha);
  localStorage.setItem("data", data);
  localStorage.setItem("telefone", telefone);
  localStorage.setItem("cidade", cidade);

  // Redirecionar para a página "minhaconta.html"
  window.location.href = "minhaconta.html";
}

