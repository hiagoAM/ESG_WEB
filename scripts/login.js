document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;


    if (username === 'admin' && password === 'admin') {
        window.location.href = 'private.html';
    } else {
        document.getElementById('error-message').textContent = 'Usuário ou senha incorretos.';
    }
});
