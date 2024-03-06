//array som sparar varor 
let varorna = [];

function addToCart(itemName, price) {
  //lägger till vara i kundvagnen
  const item = {
    //objekt som läggs till
    name: itemName,
    price: price,
  };
  varorna.push(item); // lägtill vara i array
  displayCart();
}
function displayCart() {
  // Funktion visar totala andalet varor & priser i kundvagnen
  const AntalVarorElement = document.getElementById("AntalVaror");
  const TotalPrisElement = document.getElementById("TotalPris");
  const AntalVaror = varorna.length; //räkna ut antalet varor

  let TotalPris = 0; //räkna ut totala priset
  varorna.forEach((item) => {
    TotalPris += item.price;
  });
  AntalVarorElement.textContent = `Antal varor: ${AntalVaror}`; //antal varor
  TotalPrisElement.textContent = `Totala priset: ${TotalPris.toFixed(2)} kr`; //totala priset


}
varorna.push(item); // lägg till vara till varorna arrayen
  displayCart();
  localStorage.setItem('varorna', JSON.stringify(varorna));
  function loadCartFromStorage() // Funktion för att hämta varor från storage
  {
  const storedvarorna = localStorage.getItem('varorna');

  if (storedvarorna) {
      const storedItems = JSON.parse(storedvarorna); // uppdatera arrayen
      varorna = storedItems;
      displayCart(); // uppdatera cart displayen
  }
}

// Call loadCartFromStorage on page load
window.onload = loadCartFromStorage;

