document.addEventListener('DOMContentLoaded', function () {
    const loggedInUser = localStorage.getItem('loggedInUser');

  if  (loggedInUser) {
  document.getElementById('loggedInUser').innerText = `${loggedInUser}`;
    }  else {
        // Redirect to login page if not logged in
        /* window.location.href = 'login.html'; */
        document.getElementById('loggedInUser').innerText = `Guest`;
        document.getElementById("logout").innerHTML = "Login";
        
    }
});

function logout() {
    localStorage.removeItem('loggedInUser');
    window.location.href = 'orderlogin.html';
}


  // Check if a value is saved in local storage and display it
    var savedValue = localStorage.getItem("selectedValue");
    if (savedValue) {
      document.getElementById("displayValue").textContent = "" + savedValue;
    }
     else{
      document.getElementById("displayValue").textContent = "" + "Please Select The Location";
     }


const coveredDiv = document.getElementById('covered-div');
const button = document.getElementById('more-button');
const i = document.getElementById('i');
 var flag = 0
button.addEventListener("click", function () {
if (flag == 0) {  
coveredDiv.style.height = "160px"
button.innerHTML='See Less';
flag = 1        
} else {
coveredDiv.style.height = 0;
button.innerHTML='See More';
flag = 0
}
})


  var swiper = new Swiper(".mySwiper", {
      slidesPerView: 4,
      spaceBetween: 10,
      freeMode: false,
      
      },
    );
