/* global Product, CartItem */

"use strict";

var counter= 0;

// On screen load, we call this method to put all of the busmall options
// (the things in the Product.allProducts array) into the drop down list.
function populateForm() {
  var selectElement = document.getElementById("items");
  for (var i in Product.allProducts) {
    var option=document.createElement("option");
    option.value=Product.allProducts[i].name;
    option.textContent=Product.allProducts[i].name;
    selectElement.appendChild(option);
  }

}

// When someone submits the form, we need to add the selected item to the cart
// object, save the whole thing back to local storage and update the screen
// so that it shows the # of items in the cart and a quick preview of the cart itself.
function handleSubmit(event) {

  event.preventDefault();

  // Do all the things ...
  addSelectedItemToCart(event);
  saveCartToLocalStorage();
  updateCounter();
  updateCartPreview();

}

function addSelectedItemToCart(event) {
  var item=event.target.items.value;
  var quantity=event.target.quantity.value;
  new CartItem(item,quantity);
}

function saveCartToLocalStorage() {
  localStorage["Cart"]=JSON.stringify(CartItem.all);
}

function updateCounter() {
  counter++;
  var span=document.getElementById("itemCount");
  span.textContent=counter;
}

function updateCartPreview() {
  var div=document.getElementById("cartContents");
  div.innerHTML="";
  var ul=document.createElement("ul");
  for(var i=0;i<CartItem.all.length;i++){
    var li=document.createElement("li");
    li.textContent=CartItem.all[i].item+" : "+CartItem.all[i].quantity;
    ul.appendChild(li);
  }
  div.appendChild(ul);
}

// Set up the "submit" event listener on the form.
// This is the trigger for the app. When a user "submits" the form, it will
// Call that handleSubmit method above and kick off the whole process
var catalogForm = document.getElementById("catalog");
catalogForm.addEventListener("submit", handleSubmit);

// Before anything else of value can happen, we need to fill in the select
// drop down list in the form.
populateForm();
