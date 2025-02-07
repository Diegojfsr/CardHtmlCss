document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('submit_button').addEventListener('click', function(event) {
        event.preventDefault(); // Impede o envio do formulário

        // Obtém os valores dos campos do formulário
        const username = document.getElementById('user').value;
        const password = document.getElementById('password').value;

        // Verifica se os valores são corretos
        if (username === 'user' && password === '123') {
            // Redireciona para a página de produtos
            // window.location.href = '../ProductPage/cars.html';
            alert('Ok, tudo certo!');
        } else {
            // Mostra uma mensagem de erro
            alert('Nome de usuário ou senha incorretos!');
        }
    });
});
