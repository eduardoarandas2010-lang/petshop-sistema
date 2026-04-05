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

if (logoutBtn) {
  logoutBtn.addEventListener('click', function () {
    window.location.href = 'index.html';
  });
}

if (salvarTudoBtn) {
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

    resultado.innerHTML = `
      <div class="resultado-card">
        <p><strong>Cliente:</strong> ${clienteNome}</p>
        <p><strong>Telefone:</strong> ${clienteTelefone}</p>
        <p><strong>Pet:</strong> ${petNome}</p>
        <p><strong>Tipo do Pet:</strong> ${petTipo}</p>
        <p><strong>Data:</strong> ${agendamentoData}</p>
        <p><strong>Hora:</strong> ${agendamentoHora}</p>
        <p><strong>Serviço:</strong> ${servico}</p>
        <p><strong>Valor:</strong> R$ ${valorPagamento}</p>
        <p><strong>Pagamento:</strong> ${formaPagamento}</p>
      </div>
    `;
  });
}
