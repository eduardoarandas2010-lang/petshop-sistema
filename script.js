const loginBtn = document.getElementById('loginBtn');
const mensagem = document.getElementById('mensagem');

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

const logoutBtn = document.getElementById('logoutBtn');

if (logoutBtn) {
  logoutBtn.addEventListener('click', function () {
    window.location.href = 'index.html';
  });
}
