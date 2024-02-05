function loginUser() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const button = document.getElementById('button');
    const existingUsers = JSON.parse(localStorage.getItem('users')) || [];
    const isAuthenticated = existingUsers.some(user => user.username === username && user.password === password);

  


  
    if (isAuthenticated) {
        localStorage.setItem('loggedInUser', username);
        // Redirect to index page
        button.style.backgroundColor=" #ff1515bf"
        window.location.href = 'index.html';
    } else {
        alert('Invalid username or password. Please try again.');
    }
}


  function togglePasswordVisibility() {
            var password = document.getElementById("password");
            var toggleBtn = document.getElementById("toggleBtn");

            if (password.type === "password") {
                password.type = "text";
             
            } else {
                password.type = "password";
               
            }
        }
        
          function toggleIcon() {
            var iconElement = document.getElementById("toggleIcon");

            if (iconElement.classList.contains("fa-eye-slash")) {
                iconElement.classList.add("fa-eye");
                iconElement.classList.remove("fa-eye-slash");
            } else {
                iconElement.classList.add("fa-eye-slash");
                iconElement.classList.remove("fa-eye");
            }
        }
