document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Impede o envio do formulário
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    
    // Aqui você pode adicionar sua lógica de validação
    if(username === 'user' && password === '123') {
      alert('Login bem-sucedido!');
    } else {
      alert('Credenciais inválidas!');
    }
  });
  