//array som sparar varor
let cartItems = [];

function addToCart(itemName, price) {
  //lägger till vara i kundvagnen
  const item = {
    //objekt som läggs till
    name: itemName,
    price: price,
  };
  cartItems.push(item); // lägtill vara i array
  displayCart();
}
function displayCart() {
  // Funktion visar totala andalet varor & priser i kundvagnen
  const cartElement = document.getElementById('cart');
  const totalItemsElement = document.getElementById("totalItems");
  const totalPriceElement = document.getElementById("totalPrice");
  const totalItems = cartItems.length; //räkna ut antalet varor

  let totalPrice = 0; //räkna ut totala priset
  cartItems.forEach((item) => {
    totalPrice += item.price;

  });
  totalItemsElement.textContent = `Antal varor: ${totalItems}`; //antal varor
  totalPriceElement.textContent = `Totala priset: ${totalPrice.toFixed(2)} kr`; //totala priset
}

function addToCart(itemName, price) {
  // Funktion för att lägga till item till varukorg
  const item = {
    // detta representerar varan
    name: itemName,
    price: price,
  };

  cartItems.push(item); // lägg till vara till arrayen

  displayCart();

  localStorage.setItem("cartItems", JSON.stringify(cartItems)); // uppdatera local storage med uppdaterad varor
}

function loadCartFromStorage() {
  //funktion för att hämta vara från local storage
  const storedCartItems = localStorage.getItem("cartItems");

  if (storedCartItems) {
    const storedItems = JSON.parse(storedCartItems);
    cartItems = storedItems; // uppdatera arrayen
    displayCart(); // Uppdatera vad kundvagnen visar
  }
}

// Call loadCartFromStorage när sidan laddas
window.onload = loadCartFromStorage;

function clearCart() {
  localStorage.removeItem('cartItems');
  cartItems = [];  // Reset arrayen
  displayCart();
}

const clearCartButton = document.getElementById('clearCartButton');
clearCartButton.addEventListener('click', clearCart);