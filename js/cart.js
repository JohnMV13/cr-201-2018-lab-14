"use strict";

var Cart = [];

// Create an event listener so that when the delete link is clicked, the removeItemFromCart method is invoked.
var table = document.getElementById("cart");
table.addEventListener("click", removeItemFromCart);

function loadCart() {
  Cart = JSON.parse(localStorage.getItem("Cart")) || [];
}

// Make magic happen --- re-pull the Cart, clear out the screen and re-draw it
function renderCart() {
  loadCart();
  clearCart();
  showCart();
}

// TODO: Remove all of the rows (tr) in the cart table (tbody)
function clearCart() {
  var tbody = document.querySelector("tbody");
  tbody.innerHTML = "";
}

// TODO: Fill in the <tr>'s under the <tbody> for each item in the cart
function showCart() {

  // TODO: Find the table body
  var cartTB = document.querySelector("tbody");
  console.log(cartTB);
  // TODO: Create a TR
 
    // TODO: Create a TD for the delete link, quantity,  and the item
  function createRow(i) {    
    var tr = document.createElement("tr");
    var td = document.createElement("td");
    var button = document.createElement("button");
    button.textContent = "x";
    td.appendChild(button);
    tr.appendChild(td);
    var td = document.createElement("td");
    td.textContent = Cart[i].item;
    tr.appendChild(td);
    var td = document.createElement("td");
    td.textContent = Cart[i].quantity;
    tr.appendChild(td);
    cartTB.appendChild(tr);
  }
  
  // TODO: Iterate over the items in the cart
  for (var i = 0; i < Cart.length; i++) {

    console.log("hi", createRow(i));
  }
    


  // TODO: Add the TR to the TBODY and each of the TD's to the TR


};


function removeItemFromCart(event) {

  // TODO: When a delete link is clicked, rebuild the Cart array without that item
  Cart.splice(0, 1, 0);
  clearCart();
  table.addEventListener("click", removeItemFromCart);
  showCart();


  // TODO: Save the cart back to local storage
  // TODO: Re-draw the cart table

}

// This will initialize the page and draw the cart on screen
renderCart();
