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
  logoutBtn.addEventListener('click', function () {
    window.location.href = 'index.html';
  });
}

if (salvarTudoBtn) {
  carregarDados();

  salvarTudoBtn.addEventListener('click', function () {
    const clienteNome = document.getElementById('clienteNome').value;
    const clienteTelefone = document.getElementById('clienteTelefone').value;
    const petNome = document.getElementById('petNome').value;
    const petTipo = document.getElementById('petTipo').value;
    const agendamentoData = document.getElementById('agendamentoData').value;
    const agendamentoHora = document.getElementById('agendamentoHora').value;
    const servico = document.getElementById('servico').value;
    const valorPagamento = document.getElementById('valorPagamento').value;
    const formaPagamento = document.getElementById('formaPagamento').value;

    const dados = {
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

    localStorage.setItem('petshopDados', JSON.stringify(dados));

    exibirDados(dados);

    alert('Informações salvas com sucesso!');
  });
}

function carregarDados() {
  const dadosSalvos = localStorage.getItem('petshopDados');

  if (dadosSalvos) {
    const dados = JSON.parse(dadosSalvos);

    document.getElementById('clienteNome').value = dados.clienteNome || '';
    document.getElementById('clienteTelefone').value = dados.clienteTelefone || '';
    document.getElementById('petNome').value = dados.petNome || '';
    document.getElementById('petTipo').value = dados.petTipo || '';
    document.getElementById('agendamentoData').value = dados.agendamentoData || '';
    document.getElementById('agendamentoHora').value = dados.agendamentoHora || '';
    document.getElementById('servico').value = dados.servico || '';
    document.getElementById('valorPagamento').value = dados.valorPagamento || '';
    document.getElementById('formaPagamento').value = dados.formaPagamento || '';

    exibirDados(dados);
  }
}

function exibirDados(dados) {
  resultado.innerHTML = `
    <div class="resultado-card">
      <p><strong>Cliente:</strong> ${dados.clienteNome}</p>
      <p><strong>Telefone:</strong> ${dados.clienteTelefone}</p>
      <p><strong>Pet:</strong> ${dados.petNome}</p>
      <p><strong>Tipo do Pet:</strong> ${dados.petTipo}</p>
      <p><strong>Data:</strong> ${dados.agendamentoData}</p>
      <p><strong>Hora:</strong> ${dados.agendamentoHora}</p>
      <p><strong>Serviço:</strong> ${dados.servico}</p>
      <p><strong>Valor:</strong> R$ ${dados.valorPagamento}</p>
      <p><strong>Forma de Pagamento:</strong> ${dados.formaPagamento}</p>
    </div>
  `;
}
