document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('loginForm');

    loginForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        // Simulando la validación de las credenciales
        if (username === 'admin' && password === '12345') {
            // Redirigir a la página de gestión de propietarios si las credenciales son correctas
            window.location.href = 'gestion-propietarios.html';
        } else {
            alert('Usuario o contraseña incorrectos. Por favor, inténtalo de nuevo.');
        }
    });
});
