const loginBtn = document.getElementById('loginBtn');
const mensagem = document.getElementById('mensagem');

if (loginBtn) {
  loginBtn.addEventListener('click', function () {
    const email = document.getElementById('email').value;
    const senha = document.getElementById('senha').value;

    if (email === '' || senha === '') {
      mensagem.textContent = 'Preencha todos os campos.';
      mensagem.style.color = 'red';
    } else {
      mensagem.textContent = 'Login realizado com sucesso!';
      mensagem.style.color = 'green';

      setTimeout(() => {
        window.location.href = 'gerenciamento.html';
      }, 1500);
    }
  });
}

const logoutBtn = document.getElementById('logoutBtn');
const salvarTudoBtn = document.getElementById('salvarTudoBtn');
const resultado = document.getElementById('resultado');

if (logoutBtn) {
  logoutBtn.addEventListener('click', () => {
    window.location.href = 'index.html';
  });
}

if (salvarTudoBtn) {
  carregarDados();

  salvarTudoBtn.addEventListener('click', () => {

    const clienteNome = document.getElementById('clienteNome').value;
    const clienteTelefone = document.getElementById('clienteTelefone').value;
    const petNome = document.getElementById('petNome').value;
    const petTipo = document.getElementById('petTipo').value;
    const agendamentoData = document.getElementById('agendamentoData').value;
    const agendamentoHora = document.getElementById('agendamentoHora').value;
    const servico = document.getElementById('servico').value;
    const valorPagamento = document.getElementById('valorPagamento').value;
    const formaPagamento = document.getElementById('formaPagamento').value;

    if (
      !clienteNome ||
      !clienteTelefone ||
      !petNome ||
      !petTipo ||
      !agendamentoData ||
      !agendamentoHora ||
      !servico ||
      !valorPagamento ||
      !formaPagamento
    ) {
      alert('Preencha todos os campos!');
      return;
    }

    const novoRegistro = {
      clienteNome,
      clienteTelefone,
      petNome,
      petTipo,
      agendamentoData,
      agendamentoHora,
      servico,
      valorPagamento,
      formaPagamento
    };

    let registros =
      JSON.parse(localStorage.getItem('petshopDados')) || [];

    registros.push(novoRegistro);

    localStorage.setItem(
      'petshopDados',
      JSON.stringify(registros)
    );

    limparFormulario();

    exibirDados();

    alert('Cadastro realizado com sucesso!');
  });
}

function carregarDados() {
  exibirDados();
}

function exibirDados() {

  if (!resultado) return;

  const registros =
    JSON.parse(localStorage.getItem('petshopDados')) || [];

  if (registros.length === 0) {
    resultado.innerHTML = `
      <p style="text-align:center">
        Nenhum cadastro encontrado.
      </p>
    `;
    return;
  }

  let tabela = `
    <table class="tabela-clientes">
      <thead>
        <tr>
          <th>Cliente</th>
          <th>Telefone</th>
          <th>Pet</th>
          <th>Tipo</th>
          <th>Data</th>
          <th>Hora</th>
          <th>Serviço</th>
          <th>Valor</th>
          <th>Pagamento</th>
          <th>Ações</th>
        </tr>
      </thead>
      <tbody>
  `;

  registros.forEach((registro, index) => {

    tabela += `
      <tr>
        <td>${registro.clienteNome}</td>
        <td>${registro.clienteTelefone}</td>
        <td>${registro.petNome}</td>
        <td>${registro.petTipo}</td>
        <td>${registro.agendamentoData}</td>
        <td>${registro.agendamentoHora}</td>
        <td>${registro.servico}</td>
        <td>R$ ${registro.valorPagamento}</td>
        <td>${registro.formaPagamento}</td>
        <td>
          <button
            class="btn-excluir"
            onclick="excluirRegistro(${index})">
            Excluir
          </button>
        </td>
      </tr>
    `;
  });

  tabela += `
      </tbody>
    </table>
  `;

  resultado.innerHTML = tabela;
}

function excluirRegistro(index) {

  if (!confirm('Deseja realmente excluir este cadastro?')) {
    return;
  }

  let registros =
    JSON.parse(localStorage.getItem('petshopDados')) || [];

  registros.splice(index, 1);

  localStorage.setItem(
    'petshopDados',
    JSON.stringify(registros)
  );

  exibirDados();
}

function limparFormulario() {

  document.getElementById('clienteNome').value = '';
  document.getElementById('clienteTelefone').value = '';
  document.getElementById('petNome').value = '';
  document.getElementById('petTipo').value = '';
  document.getElementById('agendamentoData').value = '';
  document.getElementById('agendamentoHora').value = '';
  document.getElementById('servico').value = '';
  document.getElementById('valorPagamento').value = '';
  document.getElementById('formaPagamento').value = '';
}
