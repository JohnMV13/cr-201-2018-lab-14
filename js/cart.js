"use strict";

var Cart = [];

// Create an event listener so that when the delete link is clicked, the removeItemFromCart method is invoked.
var table = document.getElementById("cart");
table.addEventListener("click", removeItemFromCart);

function loadCart() {
  Cart = JSON.parse(localStorage.getItem("cart")) || [];
}

// Make magic happen --- re-pull the Cart, clear out the screen and re-draw it
function renderCart() {
  loadCart();
  clearCart();
  showCart();
}

// TODO: Remove all of the rows (tr) in the cart table (tbody)
function clearCart() {

}

// TODO: Fill in the <tr>'s under the <tbody> for each item in the cart
function showCart() {

  // TODO: Find the table body
  var cartTB = document.querySelectorAll("tbody");
  // TODO: Create a TR
  var tr = document.createElement("tr");
  cartTB.appendChild(tr);
    // TODO: Create a TD for the delete link, quantity,  and the item
  var td = document.createElement("td");
  tr.appendChild(td);
  var item = cart.item;
  var quantity = cart.quantity;
  td.textcontent = item;
  for (var i; i < Cart.length; i++); {
    var orders = Cart[i];

  }
  
  // TODO: Iterate over the items in the cart


  // TODO: Add the TR to the TBODY and each of the TD's to the TR

};

function removeItemFromCart(event) {

  // TODO: When a delete link is clicked, rebuild the Cart array without that item
  // TODO: Save the cart back to local storage
  // TODO: Re-draw the cart table

}

// This will initialize the page and draw the cart on screen
renderCart();
