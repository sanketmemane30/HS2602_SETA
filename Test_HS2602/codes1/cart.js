// cart.js

// Function to handle adding items to the cart
function addToCart(itemName, price) {
    // Retrieve the cart data from localStorage or initialize an empty array
    let cartItems = JSON.parse(localStorage.getItem('cart')) || [];
  
    // Create an object representing the item
    const item = {
      name: itemName,
      price: price
    };
  
    // Add the item to the cart
    cartItems.push(item);
  
    // Save the updated cart data back to localStorage
    localStorage.setItem('cart', JSON.stringify(cartItems));
  
    // Show a success message or perform any other necessary actions
    alert('Item added to cart successfully!');
  
    // Redirect to the cart.html page
    window.location.href = 'cart.html';
  }
  