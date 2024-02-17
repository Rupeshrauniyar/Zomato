document.addEventListener('DOMContentLoaded', function () {
    const loggedInUser = localStorage.getItem('loggedInUser');

    if (loggedInUser) {
        document.getElementById('loggedInUser').innerText = `${loggedInUser}`;
    } else {
        // Redirect to login page if not logged in
        window.location.assign('cartregister.html');
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
        const minusButton = document.createElement('button');
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

document.addEventListener('DOMContentLoaded', function () {
    // Load cart items from local storage when the page loads
    loadCartFromLocalStorage();

    const loggedInUser = localStorage.getItem('loggedInUser');
    if (loggedInUser) {
        document.getElementById('loggedInUser').innerText = `${loggedInUser}`;
    } else {
        // Redirect to login page if not logged in
        window.location.assign('cartregister.html');
    }
});

function loadCartFromLocalStorage() {
    let savedCart = localStorage.getItem('cart');
    cartItems = savedCart ? JSON.parse(savedCart) : {};
    updateCartCount();
    updateCartDisplay();
    saveCartToLocalStorage(); // Save cart items to local storage
}

function saveCartToLocalStorage() {
    localStorage.setItem('cart', JSON.stringify(cartItems));
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
        if (cartItems[product].quantity > 0) {
            window.location.href = 'cart-order.html';
        }
    }
}

function clearCart() {
    const confirmation = confirm("Are you sure you want to clear the cart?");
    if (confirmation) { 
    cartItems = {};
    updateCartCount();
    updateCartDisplay();
    saveCartToLocalStorage();
    alert("Cart cleared successfully!");
}
}

function filterItems() {
    const searchTerm = document.getElementById('search').value.toLowerCase();
    const items = document.getElementsByClassName('item');
    const noResult = document.getElementById('no-result');
    for (const item of items) {
        const itemId = item.getAttribute('data-id').toLowerCase();
        const itemText = item.innerText.toLowerCase();

        if (itemId.includes(searchTerm) || itemText.startsWith(searchTerm)) {
            item.style.display = 'block';
            noResult.style.display = 'none';
        } else {
            item.style.display = 'none';
            noResult.style.display = 'block';
        }
    }
}

document.getElementById('selectedImage').src = localStorage.getItem('selectedImage');
document.getElementById('selectedTitle').innerText = localStorage.getItem('selectedTitle'); 



window.onload = function() {
  
  const urlParams = new URLSearchParams(window.location.search);
  const restaurant = urlParams.get('restaurant');
  

  if (restaurant === 'The Royal Biryani House') {
    document.getElementById('restaurantImage').innerHTML=`<div class="item" data-id="royal special biryani"  >
<div class="product">
<div class="img-container">
<div class="card">
<div id="scalable-container">
<img id="scalable-image" src="https://e1.pxfuel.com/desktop-wallpaper/206/969/desktop-wallpaper-edigest-chicken-biryani.jpg" alt="Restaurant Cards">
</div>
<div class="page3-img-details">
<h3>Royal Special Biryani
<p>Biryani-flavoured rice,leg piece,meat piece,egg,salad<br>
<i>Price : 170</i></p></h3><br>
<button onclick="addToCart('Royal Special Biryani', 'https://e1.pxfuel.com/desktop-wallpaper/206/969/desktop-wallpaper-edigest-chicken-biryani.jpg')" id="button">Add to plate<ul id="cart-items"></ul></button>
 </div>
 </div>
 </div> 
 </div>
 </div>
 
 
<div class="item" data-id="royal normal biryani"  >
<div class="product">
<div class="img-container">
<div class="card">
<div id="scalable-container">
<img id="scalable-image" src="https://www.ruchifoodline.com/recipes//cdn/recipes/Best-Mutton-Biryani-Recipe.jpg" alt="Restaurant Cards">
</div>
<div class="page3-img-details">
<h3>Royal Normal Biryani
<p>Biryani-rice,2 meat piece<br>
<i>Price : 120</i></p></h3><br>
<button onclick="addToCart('Royal Normal Biryani', 'https://www.ruchifoodline.com/recipes//cdn/recipes/Best-Mutton-Biryani-Recipe.jpg')" id="button">Add to plate<ul id="cart-items"></ul></button>
 </div>
 </div>
 </div> 
 </div>
 </div>
 
 
 

<div class="item" data-id="Royal Momo"  >
<div class="product">
<div class="img-container">
<div class="card">
<div id="scalable-container">
<img id="scalable-image" src="https://m.economictimes.com/thumb/height-450,width-600,imgsize-348620,msid-70813564/momos.jpg" alt="Restaurant Cards">
</div>
<div class="page3-img-details">
<h3>Royal Momo
<p>Well Stuffed and Steamed With Our Special Chutney<br>
<i>Price : 120</i></p></h3><br>
<button onclick="addToCart('Royal Momo', 'https://m.economictimes.com/thumb/height-450,width-600,imgsize-348620,msid-70813564/momos.jpg')" id="button">Add to plate<ul id="cart-items"></ul></button>
 </div>
 </div>
 </div> 
 </div>
 </div>`
  }
  
   else if (restaurant === 'Aangan') {
    document.getElementById('restaurantImage').innerHTML = `<div class="item" data-id="Aangan Special Dosa"  >
<div class="product">
<div class="img-container">
<div class="card">
<div id="scalable-container">
<img id="scalable-image" src="https://upload.wikimedia.org/wikipedia/commons/6/6e/Masala_dosa_2.jpg" alt="Restaurant Cards">
</div>
<div class="page3-img-details">
<h3>Aangan Special Dosa
<p>Dosa-South Indian Special Flavoured<br>
<i>Price : 230</i></p></h3><br>
<button onclick="addToCart('Aangan Special Dosa', 'https://upload.wikimedia.org/wikipedia/commons/6/6e/Masala_dosa_2.jpg')" id="button">Add to plate<ul id="cart-items"></ul></button>
 </div>
 </div>
 </div> 
 </div>
 </div>
 
 
<div class="item" data-id="Aangan Samosa"  >
<div class="product">
<div class="img-container">
<div class="card">
<div id="scalable-container">
<img id="scalable-image" src="https://w0.peakpx.com/wallpaper/13/502/HD-wallpaper-samosa-breakfast-chola-food-foodie.jpg" alt="Restaurant Cards">
</div>
<div class="page3-img-details">
<h3>Samosa
<p>Samosa With Special Chuteny and Onion Slice<br>
<i>Price : 30/</i></p></h3><br>
<button onclick="addToCart('Aangan Samosa', 'https://w0.peakpx.com/wallpaper/13/502/HD-wallpaper-samosa-breakfast-chola-food-foodie.jpg')" id="button">Add to plate<ul id="cart-items"></ul></button>
 </div>
 </div>
 </div> 
 </div>
 </div>
 
 
 

<div class="item" data-id="Laccha Paratha"  >
<div class="product">
<div class="img-container">
<div class="card">
<div id="scalable-container">
<img id="scalable-image" src="https://www.scratchingcanvas.com/wp-content/uploads/2019/04/Laccha-Paratha-Easy.3-1200x801.jpg" alt="Restaurant Cards">
</div>
<div class="page3-img-details">
<h3>Laccha Paratha
<p>With Onion zslices And Awesome Taste<br>
<i>Price : 50/</i></p></h3><br>
<button onclick="addToCart('Laccha Paratha', 'https://www.scratchingcanvas.com/wp-content/uploads/2019/04/Laccha-Paratha-Easy.3-1200x801.jpg')" id="button">Add to plate<ul id="cart-items"></ul></button>
 </div>
 </div>
 </div> 
 </div>
 </div>`;
} 

 else if (restaurant === 'Kiran') {
    document.getElementById('restaurantImage').innerHTML =`<div class="item" data-id="Kiran Biscuits"  >
<div class="product">
<div class="img-container">
<div class="card">
<div id="scalable-container">
<img id="scalable-image" src="https://www.imarcgroup.com/blogs/files/1b425004-41f1-45c2-a66c-d3fa92d29f6findian-bakery.webp" alt="Restaurant Cards">
</div>
<div class="page3-img-details">
<h3>Kiran Biscuits
<p>Filled With Crunchness<br>
<i>Price : 99</i></p></h3><br>
<button onclick="addToCart('Kiran Biscuits', 'https://www.imarcgroup.com/blogs/files/1b425004-41f1-45c2-a66c-d3fa92d29f6findian-bakery.webp')" id="button">Add to plate<ul id="cart-items"></ul></button>
 </div>
 </div>
 </div> 
 </div>
 </div>
 
 
<div class="item" data-id="Aangan Samosa"  >
<div class="product">
<div class="img-container">
<div class="card">
<div id="scalable-container">
<img id="scalable-image" src="https://w0.peakpx.com/wallpaper/13/502/HD-wallpaper-samosa-breakfast-chola-food-foodie.jpg" alt="Restaurant Cards">
</div>
<div class="page3-img-details">
<h3>Samosa
<p>Samosa With Special Chuteny and Onion Slice<br>
<i>Price : 30/</i></p></h3><br>
<button onclick="addToCart('Aangan Samosa', 'https://w0.peakpx.com/wallpaper/13/502/HD-wallpaper-samosa-breakfast-chola-food-foodie.jpg')" id="button">Add to plate<ul id="cart-items"></ul></button>
 </div>
 </div>
 </div> 
 </div>
 </div>
 
 
 

<div class="item" data-id="Laccha Paratha"  >
<div class="product">
<div class="img-container">
<div class="card">
<div id="scalable-container">
<img id="scalable-image" src="https://www.scratchingcanvas.com/wp-content/uploads/2019/04/Laccha-Paratha-Easy.3-1200x801.jpg" alt="Restaurant Cards">
</div>
<div class="page3-img-details">
<h3>Laccha Paratha
<p>With Onion zslices And Awesome Taste<br>
<i>Price : 50/</i></p></h3><br>
<button onclick="addToCart('Laccha Paratha', 'https://www.scratchingcanvas.com/wp-content/uploads/2019/04/Laccha-Paratha-Easy.3-1200x801.jpg')" id="button">Add to plate<ul id="cart-items"></ul></button>
 </div>
 </div>
 </div> 
 </div>
 </div>`;
    
  }
  
  
  
  
  
 else {
    document.getElementById('restaurantName').innerHTML = `<i>Error 404.Please Return Back To Previous Page And Visit Again.</i>`;
  }
}
