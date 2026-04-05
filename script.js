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

if (logoutBtn) {
  logoutBtn.addEventListener('click', function () {
    window.location.href = 'index.html';
  });
}

const salvarCliente = document.getElementById('salvarCliente');
const salvarPet = document.getElementById('salvarPet');
const salvarAgendamento = document.getElementById('salvarAgendamento');
const salvarPagamento = document.getElementById('salvarPagamento');

if (salvarCliente) {
  salvarCliente.addEventListener('click', function () {
    const nome = document.getElementById('clienteNome').value;
    const telefone = document.getElementById('clienteTelefone').value;

    document.getElementById('listaClientes').innerHTML += `
      <p><strong>Cliente:</strong> ${nome} - ${telefone}</p>
    `;
  });
}

if (salvarPet) {
  salvarPet.addEventListener('click', function () {
    const nome = document.getElementById('petNome').value;
    const raca = document.getElementById('petRaca').value;

    document.getElementById('listaPets').innerHTML += `
      <p><strong>Pet:</strong> ${nome} - ${raca}</p>
    `;
  });
}

if (salvarAgendamento) {
  salvarAgendamento.addEventListener('click', function () {
    const data = document.getElementById('agendamentoData').value;
    const hora = document.getElementById('agendamentoHora').value;

    document.getElementById('listaAgendamentos').innerHTML += `
      <p><strong>Agendamento:</strong> ${data} às ${hora}</p>
    `;
  });
}

if (salvarPagamento) {
  salvarPagamento.addEventListener('click', function () {
    const valor = document.getElementById('pagamentoValor').value;
    const forma = document.getElementById('pagamentoForma').value;

    document.getElementById('listaPagamentos').innerHTML += `
      <p><strong>Pagamento:</strong> ${valor} - ${forma}</p>
    `;
  });
}
