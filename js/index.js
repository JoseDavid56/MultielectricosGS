document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    
    // Aquí puedes agregar la lógica para validar el usuario y la contraseña
    
    // Ejemplo de validación básica
    if (username === 'usuario' && password === 'contraseña') {
      alert('Inicio de sesión exitoso');
      // Aquí podrías redirigir al usuario a otra página, por ejemplo:
      // window.location.href = 'pagina-secreta.html';
    } else {
      alert('Usuario o contraseña incorrectos');
    }
  });
  