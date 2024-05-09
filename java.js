const formulario = document.getElementById('criarconta');

formulario.addEventListener('submit', function(event) {
  event.preventDefault(); // Evita o envio padrão do formulário

  const nome = document.getElementById('nome').value;
  const email = document.getElementById('email').value;
  const senha = document.getElementById('senha').value;
  const idade = document.getElementById('datanascimento').value;
  const telefone= document.getElementById('telefone').value;
  const cidade = document.getElementById('cidade').value;
 

  // Validação opcional (evita envio de dados incompletos)
  if (nome === '' || email === '' || senha === '' || idade === '' || cidade === '') {
    alert('Preencha todos os campos obrigatórios!');
    return; // Interrompe a execução do código caso a validação falhe
  }

  // Salva os dados do formulário no localStorage
  const dados = {
    nome: nome,
    email: email,
    senha: senha,
    idade: idade,
    telefone: telefone,
    cidade: cidade,
   
  };

  // Verifica se já existem dados salvos no localStorage
  let historico = JSON.parse(localStorage.getItem('historico')) || [];

  // Adiciona o novo livro à lista de livros salvos
  historico.push(dados);

  // Salva a lista atualizada de livros no localStorage
  localStorage.setItem('historico', JSON.stringify(historico));

 
});

function dado() {
  const dados = document.getElementById('dados');
  dados.innerHTML = ''; // Limpa a lista antes de exibir os novos dados

  // Recupera os dados do localStorage
  const nome = document.getElementById('nome').value;
  const email = document.getElementById('email').value;
  const senha = document.getElementById('senha').value;
  const idade = document.getElementById('datanascimento').value;
  const telefone= document.getElementById('telefone').value;
  const cidade = document.getElementById('cidade').value;
 
  // Cria uma nova linha na tabela com os dados recuperados
  const newRow = document.createElement('tr');
  newRow.innerHTML = `
      <td>${nome}</td>
      <td>${email}</td>
      <td>${senha}</td>
      <td>${idade}</td>
      <td>${telefone}</td>
      <td>${cidade}</td>
  `;
  dados.appendChild(newRow);
}

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

window.onload = function() {
  // Verificar se os dados estão salvos no localStorage
  if (localStorage.getItem("nome")) {
      // Se os dados estiverem presentes, obter os valores do localStorage
      var nome = localStorage.getItem("nome");
      var email = localStorage.getItem("email");
      var senha = localStorage.getItem("senha");
      var data = localStorage.getItem("data");
      var telefone = localStorage.getItem("telefone");
      var cidade = localStorage.getItem("cidade");

      // Preencher a tabela com os dados obtidos
      var tabela = document.getElementById("dados");
      var linha = tabela.insertRow();

      var celulaNome = linha.insertCell(0);
      celulaNome.innerHTML = nome;

      var celulaEmail = linha.insertCell(1);
      celulaEmail.innerHTML = email;

      var celulaSenha = linha.insertCell(2);
      celulaSenha.innerHTML = senha;

      var celulaData = linha.insertCell(3);
      celulaData.innerHTML = data;

      var celulaTelefone = linha.insertCell(4);
      celulaTelefone.innerHTML = telefone;

      var celulaCidade = linha.insertCell(5);
      celulaCidade.innerHTML = cidade;
  } else {
      // Se os dados não estiverem presentes, exibir uma mensagem
      var tabela = document.getElementById("dados");
      var linha = tabela.insertRow();
      var celula = linha.insertCell();
      celula.colSpan = "6";
      celula.innerHTML = "Nenhum dado encontrado.";
  }
};

// Chama a função para exibir os livros quando a página é carregada
window.onload = exibirLivros;
