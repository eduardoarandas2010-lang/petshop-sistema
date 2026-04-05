let clientes = JSON.parse(localStorage.getItem('clientes')) || [];

function cadastrarCliente() {
  const nome = document.getElementById('nomeCliente').value;
  const telefone = document.getElementById('telefoneCliente').value;

  clientes.push({ nome, telefone });
  localStorage.setItem('clientes', JSON.stringify(clientes));
  carregarClientes();
}

function cadastrarAnimal() {
  const nome = document.getElementById('nomeAnimal').value;
  const tipo = document.getElementById('tipoAnimal').value;
  const dono = document.getElementById('donoAnimal').value;

  animais.push({ nome, tipo, dono });
  localStorage.setItem('animais', JSON.stringify(animais));
  carregarAnimais();
}

function registrarServico() {
  const animal = document.getElementById('animalServico').value;
  const servico = document.getElementById('tipoServico').value;
  const data = document.getElementById('dataServico').value;

  servicos.push({ animal, servico, data });
  localStorage.setItem('servicos', JSON.stringify(servicos));
  carregarServicos();
}

function carregarClientes() {
  const lista = document.getElementById('listaClientes');
  lista.innerHTML = '';

  clientes.forEach(cliente => {
    lista.innerHTML += `
      <tr>
        <td>${cliente.nome}</td>
        <td>${cliente.telefone}</td>
      </tr>
    `;
  });
}

function carregarAnimais() {
  const lista = document.getElementById('listaAnimais');
  lista.innerHTML = '';

  animais.forEach(animal => {
    lista.innerHTML += `
      <tr>
        <td>${animal.nome}</td>
        <td>${animal.tipo}</td>
        <td>${animal.dono}</td>
      </tr>
    `;
  });
}

function carregarServicos() {
  const lista = document.getElementById('listaServicos');
  lista.innerHTML = '';

  servicos.forEach(item => {
    lista.innerHTML += `
      <tr>
        <td>${item.animal}</td>
        <td>${item.servico}</td>
        <td>${item.data}</td>
      </tr>
    `;
  });
}

function carregarDados() {
  carregarClientes();
  carregarAnimais();
  carregarServicos();
}
