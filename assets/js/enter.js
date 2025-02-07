
document.getElementById('loginForm').addEventListener('submit', function(event) {
  event.preventDefault(); // Impede o envio do formulário
  var username = document.getElementById('username').value;
  var password = document.getElementById('password').value;
  
  // Aqui você pode adicionar sua lógica de validação
  if(username === 'user' && password === '123') {
    window.location.href = '../../pages/success.html'; // Redireciona para a página de sucesso
  } else {
    alert('Credenciais inválidas!');
  }
});
