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
var Item = function(name, price, count) {
  this.name = name
  this.price = price
  this.count = count
};

var a = new Item('Royal with Cheese', 8.99, 1); // {name: '', price: 0.0, count: 0}




console.log(a);
console.log(cart);



























});
