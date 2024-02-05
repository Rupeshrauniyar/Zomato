document.addEventListener('DOMContentLoaded', function () {
    const loggedInUser = localStorage.getItem('loggedInUser');

  if  (loggedInUser) {
  document.getElementById('loggedInUser').innerText = `${loggedInUser}`;
    }  else {
        // Redirect to login page if not logged in
        /* window.location.href = 'login.html'; */
        window.location.assign('cartregister.html')
    }
});

function logout() {
    localStorage.removeItem('loggedInUser');
    window.location.href = 'cartlogin.html';
}



  var cartItems = {};

    function addToCart(product, imagePath) {
        if (cartItems[product]) {
            // Product already in the cart, increase quantity
            cartItems[product].quantity++;
        } else {
            // Product not in the cart, add with quantity 1
            cartItems[product] = {
                quantity: 1,
                imagePath: imagePath,
            };
        }

        updateCartCount();
        updateCartDisplay();
        saveCartToLocalStorage();
    }

    function updateCartCount() {
        const cartCountElement = document.getElementById('cart-count');
        const totalItems = Object.values(cartItems).reduce((total, info) => total + info.quantity, 0);
        cartCountElement.textContent = totalItems;
    }

    function updateCartDisplay() {
        var cartItemsElement = document.getElementById('cart-items');
        cartItemsElement.innerHTML = '';

        for (const [product, info] of Object.entries(cartItems)) {
            const p = document.createElement('p');
            
            // Display image
            const img = document.createElement('img');
            img.src = info.imagePath;
            img.alt = product;
            p.appendChild(img);

            // Display product name and quantity
            p.innerHTML += `${product} - ${info.quantity} `;
            
            // Plus button
            const plusButton = document.createElement('button');
            plusButton.textContent = '+';            
            plusButton.onclick = () => {
                cartItems[product].quantity++;
                updateCartCount();
                updateCartDisplay();
                saveCartToLocalStorage();
            };
            p.appendChild(plusButton);

            // Minus button
            const minusButton = document.createElement                        ('button');
            minusButton.textContent = '-';
            minusButton.onclick = () => {
                if (cartItems[product].quantity > 1) {
                    cartItems[product].quantity--;
                    
                } else {
                    delete cartItems[product];
                }
                 
                updateCartCount();
                updateCartDisplay();
                saveCartToLocalStorage();
            };
            p.appendChild(minusButton);

            cartItemsElement.appendChild(p);
        }
    }


const cartModal = document.getElementById('cart-modal');      
const cartContainer = document.getElementById('cart-container');      

var flag = 0
cart.addEventListener("click", function () {
if (flag == 0) {     
cartContainer.style.display = 'block';
cartModal.style.display = 'block';
flag = 1        
} else {
cartContainer.style.display = 'none';
cartModal.style.display = 'none';
flag = 0
}
})
function placeOrder() {
for (const [product, info] of Object.entries(cartItems)) {
            const p = document.createElement('p');
                  if (cartItems[product].quantity > 0) {
                  window.location.href = 'cart-order.html';                 
                } 
                else {
                  alert('Hello')    
                  return;          
                 } 
                  
}
        
    }
    
 
    function clearCart() {
    
        cartItems = {};
        updateCartCount();
        updateCartDisplay();
        saveCartToLocalStorage();
    }

    function saveCartToLocalStorage() {
        localStorage.setItem('cart', JSON.stringify(cartItems));
    }

    function loadCartFromLocalStorage() {
        let savedCart = localStorage.getItem('cart');
        cartItems = savedCart ? JSON.parse(savedCart) : {};
        updateCartCount();
        updateCartDisplay();
    }

    loadCartFromLocalStorage();

    function saveCartToLocalStorage() {
        localStorage.setItem('cart', JSON.stringify(cartItems));
    }

  const scalableContainer = document.getElementById('scalable-container');
  const scalableImage = document.getElementById('scalable-image');
  const button = document.getElementById('button');
  let isScaling = false;

  scalableContainer.addEventListener('touchstart', handleTouchStart);
  scalableContainer.addEventListener('touchend', handleTouchEnd);
  button.addEventListener('touchstart', handleButtonHold);
  button.addEventListener('touchend', handleButtonLeave);

  function handleTouchStart() {
    isScaling = true;
    scalableImage.style.transform = 'scale(1.2)';
     
  }
  
  
    function handleButtonHold() {
    isScaling = true;
    button.style.transform = 'scale(.9)';
    button.style.backgroundColor = '#dadada';
  }
  
     function handleButtonLeave() {
     if (isScaling) {
      isScaling = false;
       button.style.transform = 'scale(1)';
       button.style.backgroundColor = '#ff1515bf';
    }
  }

  

  function handleTouchEnd() {
    if (isScaling) {
      isScaling = false;
      scalableImage.style.transform = 'scale(1)';
      
    }
  }


function filterItems() {
      const searchTerm = document.getElementById('search').value.toLowerCase();
      const items = document.getElementsByClassName('item');

      for (const item of items) {
        const itemId = item.getAttribute('data-id').toLowerCase();
        const itemText = item.innerText.toLowerCase();

        if (itemId.includes(searchTerm) || itemText.startsWith(searchTerm)) {
          item.style.display = 'block';
        } else {
          item.style.display = 'none';
        }
      }
    }
