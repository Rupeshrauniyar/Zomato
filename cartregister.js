function registerUser() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    
    
    // Check if user already exists
    const existingUsers = JSON.parse(localStorage.getItem('users')) || [];
    const isUserExists = existingUsers.some(user => user.username === username);


 

if (isUserExists) {
        alert('Username already exists. Please choose another one.');
        return;
    }
       
        
if (username.includes("@_")){
}
else{
        alert("Username Must Include '@_'");
        return;
      }  

      
if (username.length > 4 ){

      } else {
        alert("Username must be greater than 4 digits");
        return;
       }
       

       
   
   if (password.includes("@")){

      } else {
        alert("Password must include '@'");
        return;
       }
       
       if (password.includes("12345678")){
alert("Please create A Strong Password");
        return;
      } else {
        
       }
      
   
   
if (password.length > 8 ){
const newUser = { username, password };
existingUsers.push(newUser);
localStorage.setItem('users', JSON.stringify(existingUsers));
alert('Registration successful!');     
window.location.href = 'cartlogin.html';        
return;
      } else {
        alert("Password must be greater than 8 digits");
        return;
       }
      }
      
 const checkbox = document.getElementById('checkbox');
    const button = document.getElementById('button');

    checkbox.addEventListener('change', function() {
      if (this.checked) {
       
        button.classList.add('checked');
        button.disabled = false; 
                  
      }
       else {
        button.classList.remove('checked');
        button.disabled = true;
        return;
      }
    });


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
        
