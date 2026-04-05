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
const excluirDadosBtn = document.getElementById('excluirDadosBtn');
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

    if (
      clienteNome === '' ||
      clienteTelefone === '' ||
      petNome === '' ||
      petTipo === '' ||
      agendamentoData === '' ||
      agendamentoHora === '' ||
      servico === '' ||
      valorPagamento === '' ||
      formaPagamento === ''
    ) {
      alert('Preencha todos os campos antes de salvar.');
      return;
    }

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

    const clienteNome = document.getElementById('clienteNome');
    const clienteTelefone = document.getElementById('clienteTelefone');
    const petNome = document.getElementById('petNome');
    const petTipo = document.getElementById('petTipo');
    const agendamentoData = document.getElementById('agendamentoData');
    const agendamentoHora = document.getElementById('agendamentoHora');
    const servico = document.getElementById('servico');
    const valorPagamento = document.getElementById('valorPagamento');
    const formaPagamento = document.getElementById('formaPagamento');

    if (clienteNome) clienteNome.value = dados.clienteNome || '';
    if (clienteTelefone) clienteTelefone.value = dados.clienteTelefone || '';
    if (petNome) petNome.value = dados.petNome || '';
    if (petTipo) petTipo.value = dados.petTipo || '';
    if (agendamentoData) agendamentoData.value = dados.agendamentoData || '';
    if (agendamentoHora) agendamentoHora.value = dados.agendamentoHora || '';
    if (servico) servico.value = dados.servico || '';
    if (valorPagamento) valorPagamento.value = dados.valorPagamento || '';
    if (formaPagamento) formaPagamento.value = dados.formaPagamento || '';

    exibirDados(dados);
  }
}

function exibirDados(dados) {
  if (!resultado) return;

  resultado.innerHTML = `
    <div class="resultado-card">
      <p>
        <input type="checkbox" class="campoExcluir" data-campo="clienteNome">
        <strong>Cliente:</strong> ${dados.clienteNome || ''}
      </p>

      <p>
        <input type="checkbox" class="campoExcluir" data-campo="clienteTelefone">
        <strong>Telefone:</strong> ${dados.clienteTelefone || ''}
      </p>

      <p>
        <input type="checkbox" class="campoExcluir" data-campo="petNome">
        <strong>Pet:</strong> ${dados.petNome || ''}
      </p>

      <p>
        <input type="checkbox" class="campoExcluir" data-campo="petTipo">
        <strong>Tipo do Pet:</strong> ${dados.petTipo || ''}
      </p>

      <p>
        <input type="checkbox" class="campoExcluir" data-campo="agendamentoData">
        <strong>Data:</strong> ${dados.agendamentoData || ''}
      </p>

      <p>
        <input type="checkbox" class="campoExcluir" data-campo="agendamentoHora">
        <strong>Hora:</strong> ${dados.agendamentoHora || ''}
      </p>

      <p>
        <input type="checkbox" class="campoExcluir" data-campo="servico">
        <strong>Serviço:</strong> ${dados.servico || ''}
      </p>

      <p>
        <input type="checkbox" class="campoExcluir" data-campo="valorPagamento">
        <strong>Valor:</strong> R$ ${dados.valorPagamento || ''}
      </p>

      <p>
        <input type="checkbox" class="campoExcluir" data-campo="formaPagamento">
        <strong>Forma de Pagamento:</strong> ${dados.formaPagamento || ''}
      </p>
    </div>
  `;
}

if (excluirDadosBtn) {
  excluirDadosBtn.addEventListener('click', function () {
    const dadosSalvos = JSON.parse(localStorage.getItem('petshopDados'));

    if (!dadosSalvos) {
      alert('Não há dados salvos para excluir.');
      return;
    }

    const camposSelecionados = document.querySelectorAll('.campoExcluir:checked');

    if (camposSelecionados.length === 0) {
      alert('Selecione pelo menos um dado para excluir.');
      return;
    }

    camposSelecionados.forEach(campo => {
      const nomeCampo = campo.getAttribute('data-campo');
      dadosSalvos[nomeCampo] = '';

      const input = document.getElementById(nomeCampo);
      if (input) {
        input.value = '';
      }
    });

    localStorage.setItem('petshopDados', JSON.stringify(dadosSalvos));
    exibirDados(dadosSalvos);

    alert('Dados selecionados excluídos com sucesso!');
  });
}
