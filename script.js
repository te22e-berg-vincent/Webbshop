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
  const totalItemsElement = document.getElementById("totalItems");
  const totalPriceElement = document.getElementById("totalPrice");
  const totalItems = cartItems.length; //räkna ut antalet varor

  let totalPrice = 0; //räkna ut totala priset
  cartItems.forEach((item) => {
    totalPrice += item.price;
  });
  totalItemsElement.textContent = `Total Items: ${totalItems}`; //antal varor
  totalPriceElement.textContent = `Total Price: ${totalPrice.toFixed(2)} kr`; //totala priset
}
