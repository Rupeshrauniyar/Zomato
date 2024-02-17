  // Retrieve cart items from local storage
        const savedCart = localStorage.getItem('cart');
        const cartItems = savedCart ? JSON.parse(savedCart) : {};

        // Display selected items and calculate total bill
        const orderItemsElement = document.getElementById('order-items');
        let totalBill = 0;

        for (const [product, info] of Object.entries(cartItems)) {
            const p = document.createElement('p');
            
            // Display image
            const img = document.createElement('img');
            img.src = info.imagePath;
            img.alt = product;
            p.appendChild(img);

            // Display product name, quantity, and rate
            p.innerHTML += `${product} - ${info.quantity} (Rate: ₹${getRate(product)})`;
            orderItemsElement.appendChild(p);

            // Calculate total bill
            totalBill += info.quantity * getRate(product);
        }

        // Add 13% tax and ₹25 depvery charge
        totalBill += totalBill * 0.02; // 13% tax
        totalBill += 25; // ₹25 depvery charge

        // Display total bill
        const totalBillElement = document.getElementById('total-bill');
        totalBillElement.textContent = totalBill.toFixed(2); // Display total bill with two decimal places

        // Function to get the rate of a product (replace with your actual rates)
        function getRate(product) {
            // Replace this with your actual rates for each product
            const rates = {
                'PCCOE Pizza': 500,
                'PCCOE Burger': 350
                // Add more products and their rates as needed
            };

            return rates[product] || 0; // Default to 0 if the product rate is not defined
        }
        
