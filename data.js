$(document).ready(function(){

console.log('ready');

// Initialize collapse button
$(".button-collapse").sideNav();
// Initialize collapsible (uncomment the line below if you use the dropdown variation)
//$('.collapsible').collapsible();

$('#add-to-cart').click(function(){
  const thing = $("<p>").text("hello");
  $(".show-cart").append("thing");
})

$('.add-to-cart').click(function(event){
  event.preventDefault();
  var name = $(this).attr('data-name');
  var price = Number($(this).attr('data-price'));

  addItemToCart(name, price, 1);
  displayCart();

});

function displayCart(){
  console.log("*** display Cart ***");

  var cartArray = listCart();
  console.log('*** Count Cart :' + cartArray.length);

  var output = '';
  for (var i in cartArray) {
    output += "<td>" + cartArray[i].name + "</td>"
  }

  $('.show-cart').html(output);
  $('#total-cart').html(totalCart());
}

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
      saveCart();
      return;
    }
  var item = new Item(name, price, count);
  cart.push(item);
}
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

function clearCart(){
  cart = [];
  saveCart();
}

console.log(cart);

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
   totalCost += cart[i].price * cart[i].count;
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
 displayCart();




var array = listCart();
console.log("---------------");
console.log(array);













});
