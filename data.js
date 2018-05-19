$(document).ready(function(){

console.log('ready');

// Initialize collapse button
$(".button-collapse").sideNav();
// Initialize collapsible (uncomment the line below if you use the dropdown variation)
//$('.collapsible').collapsible();


// var array = ['Royal with Cheese','Arugula Pie','Smoked Swine','Ice Cream Biscuit'];
// array.push('extras');
// for (var i = 0; i < array.length; i++) {
//   console.log(array[i]);
//   }
var cart =[];

var Item = function(name, price, count) {  //function literal
  this.name = name
  this.price = price
  this.count = count
};   // this syntax is to generate an object




function addItemToCart(name, price, count) {
for (var i in cart) {
    if (cart[i].name === name) {
      cart[i].count += count;
      return;
    }
}
  var item = new Item(name, price, count);
  cart.push(item);
  saveCart();
}

function removeItemFromCart(name) {   // Removes one item
  for (var i in cart) {
    if (cart[i].name === name) {
        cart[i].count --; //cart[i].count = cart[i].count -1
        if (cart[i].count  === 0) {
            cart.splice(i, 1);
        }
        break;
    }
  }
  saveCart();
}



function removeItemFromCartAll(name) {   // removes all items from the cart
  for (var i in cart) {
    if (cart[i].name === name) {
        cart.splice(i, 1);
        break;

    }
  }
  saveCart();
}

// tests
// addItemToCart('apple',1.99,1);
// addItemToCart(' Pie',5.99,1);
// addItemToCart('Arugula Pie',8.99,1);
// addItemToCart('shoe',5.99,1);
// addItemToCart('Arugula Pie',7.99,3);
// addItemToCart('banana',8.99,1);

console.log(cart.length);
console.log(cart);

function clearCart(){
  cart = [];
  saveCart();
}
// clearCart();
// console.log(cart);

function countCart() {  // --> return total count
  var  totalCount = 0;
  for (var i in cart) {
    totalCount += cart[i].count;
  }
  return totalCount;
}
console.log( countCart() );

function totalCart() { //--> return total cost
 var totalCost = 0;
 for (var i in cart) {
   totalCost += cart[i].price;
    }
    return totalCost;
}

// console.log(totalCart());

function listCart() {  //-> array of Items
  var cartCopy = [];
  for (var i in cart) {
    var item = cart[i];
    var itemCopy = {};
    for (var p in item) {
      itemCopy[p] = item[p];
    }
    cartCopy.push(itemCopy);
  }
  return cartCopy;
}


// //******************************
// var array = listCart();
// array[0].name = 'mistake';
// console.log(array);

function saveCart() {   //--> use local storage
 localStorage.setItem("shoppingCart", JSON.stringify(cart));
}


function loadCart() {//-> retrieve the cart from loal storage
cart = JSON.parse(localStorage.getItem("shoppingCart"));
}

loadCart();

var array = listCart();
console.log(array);

// var a = new Item(); // {name: "", price: 0.0, count: 0}
// // cart.push(new Item('Arugula Pie',8.99,1));
// // cart.push(new Item('Smoked Swine',7.99,2));



// console.log(cart);



























});
