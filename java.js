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

// Chama a função para exibir os livros quando a página é carregada
window.onload = exibirLivros;
