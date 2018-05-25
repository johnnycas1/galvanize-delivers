$(document).ready(function(){

let total = 0;
let tax = 0;
let grandTotal = 0;

const pig = {
  name: 'Smoked-Swine',
  price: 14.99,
  count: 0,
  id: 'one'
}

const burger = {
  name: 'Royale with Cheese',
  price: 8.99,
  count: 0,
  id: 'two'
}

const pizza = {
  name: 'Arugula Pie',
  price: 11.99,
  count: 0,
  id: 'three'
}

const ice = {
  name: 'Ice Cream Biscuit',
  price: 7.99,
  count: 0,
  id: 'four'
}

function incCount(counter){
  counter.count++
  console.log(counter.count);
}

function subTotal(price){
  total += price;
  console.log(total);
  $('#subtotal').text(total)
}

function incTax(sub){
  tax += .08 * sub
  $('#tax').text(tax.toFixed(2))
}

function getTotal(){
  grandTotal = total + tax
  $('#total-cart').text(grandTotal.toFixed(2))
}

function createItem(product){
    tr = $('<tr class="'+ product.id +'">')
    const td1 = $('<td>').text(product.name)
    let tdc = $('<td>').text(product.count)
    const td2 = $('<td>').text(product.price)
    tr.append(td1)
    tr.append(tdc)
    tr.append(td2)
    $('#hellojohnny').append(tr)
}

$('#Smoked-Swine').click(function () {
  incCount(pig)
  subTotal(pig.price)
  incTax(pig.price)
  getTotal()
  createItem(pig)
});

$('#Royale-with-Cheese').click(function () {
  incCount(burger)
  subTotal(burger.price)
  incTax(burger.price)
  getTotal()
  createItem(burger)
});

$('#Arugula-Pie').click(function () {
  incCount(pizza)
  subTotal(pizza.price)
  incTax(pizza.price)
  getTotal()
  createItem(pizza)
});

$('#Ice-Cream-Biscuit').click(function () {
  incCount(ice)
  subTotal(ice.price)
  incTax(ice.price)
  getTotal()
  createItem(ice)
});







});

///////////////JOHNNYS CODE//////////////////////////////
// $(document).ready(function(){
//
// console.log('ready');
//
// // Initialize collapse button
// $(".button-collapse").sideNav();
// // Initialize collapsible (uncomment the line below if you use the dropdown variation)
// //$('.collapsible').collapsible();
//
// // $('#add-to-cart').click(function(){
// //   const thing = $("<p>").text("hello");
// //   $("#hellojohnny").append("thing");
// // })
//
// $('#Smoked-Swine').click(function () {
//   const tr = $('<tr>')
//   const td1 = $('<td>').text('Smoked Swine')
//   const tdc = $('<td>').text("x")
//   const td2 = $('<td>').text('$14.99')
//   tr.append(td1)
//   tr.append(tdc)
//   tr.append(td2)
//   $('#hellojohnny').append(tr)
//    addItemToCart()
//
//   var name = $(this).attr('data-name');
//   var price = Number($(this).attr('data-price'));
//
//   addItemToCart(name, price, 1);
//
// })
//
// $('#Royale-with-Cheese').click(function () {
//   const tr = $('<tr>')
//   const td3 = $('<td>').text('Royale with Cheese')
//   const tdc = $('<td>').text(countCart())
//   const td4 = $('<td>').text('8.99')
//   tr.append(td3)
//   tr.append(tdc)
//   tr.append(td4)
//   $('#hellojohnny').append(tr)
//
//   var name = $(this).attr('data-name');
//   var price = Number($(this).attr('data-price'));
//
//   addItemToCart(name, price, 1);
//
// })
//
// $('#Arugula-Pie').click(function () {
//   const tr = $('<tr>')
//   const td5 = $('<td>').text('Arugula Pie')
//   const tdc = $('<td>').text(countCart())
//   const td6 = $('<td>').text('11.99')
//   tr.append(td5)
//   tr.append(tdc)
//   tr.append(td6)
//   $('#hellojohnny').append(tr)
//
//   var name = $(this).attr('data-name');
//   var price = Number($(this).attr('data-price'));
//
//   addItemToCart(name, price, 1);
//
// })
//
// $('#Ice-Cream-Biscuit').click(function () {
//   const tr = $('<tr>')
//   const td7 = $('<td>').text('Ice Cream Biscuit')
//   const tdc = $('<td>').text(countCart())
//   const td8 = $('<td>').text('7.99')
//   tr.append(td7)
//   tr.append(tdc)
//   tr.append(td8)
//   $('#hellojohnny').append(tr)
//
//   var name = $(this).attr('data-name');
//   var price = Number($(this).attr('data-price'));
//
//   addItemToCart(name, price, 1);
//
// })
//
// $('.add-to-cart').click(function(event){
//   event.preventDefault();
//   var name = $(this).attr('data-name');
//   var price = Number($(this).attr('data-price'));
//
//   addItemToCart(name, price, 1);
//
//
// });
//
// function displayCart(){
//   console.log("*** display Cart ***");
//
//   var cartArray = listCart();
//   console.log('*** Count Cart :' + cartArray.length);
//
//   var output = '';
//   for (var i in cartArray) {
//     output += "<td>" + cartArray[i].name + "</td>"
//   }
//
//   $('.show-cart').html(output);
//   $('#total-cart').html(totalCart());
// }
//
// var cart =[];
//
// var Item = function(name, price, count) {  //function literal
//   this.name = name
//   this.price = price
//   this.count = count
// };   // this syntax is to generate an object
//
//
//
//
// function addItemToCart(name, price, count) {
// for (var i in cart) {
//     if (cart[i].name === name) {
//       cart[i].count += count;
//       saveCart();
//       return;
//     }
//   var item = new Item(name, price, count);
//   cart.push(item);
// }
//   saveCart();
// }
//
// function removeItemFromCart(name) {   // Removes one item
//   for (var i in cart) {
//     if (cart[i].name === name) {
//         cart[i].count --; //cart[i].count = cart[i].count -1
//         if (cart[i].count  === 0) {
//             cart.splice(i, 1);
//         }
//         break;
//     }
//   }
//   saveCart();
// }
//
//
//
// function removeItemFromCartAll(name) {   // removes all items from the cart
//   for (var i in cart) {
//     if (cart[i].name === name) {
//         cart.splice(i, 1);
//         break;
//
//     }
//   }
//   saveCart();
// }
//
// function clearCart(){
//   cart = [];
//   saveCart();
// }
//
// console.log(cart);
//
// function countCart() {  // --> return total count
//   var  totalCount = 0;
//   for (var i in cart) {
//     totalCount += cart[i].count;
//   }
//   return totalCount;
// }
// console.log( countCart() );
//
// function totalCart() { //--> return total cost
//  var totalCost = 0;
//  for (var i in cart) {
//    totalCost += cart[i].price * cart[i].count;
//     }
//     return totalCost;
// }
//
// // console.log(totalCart());
//
// function listCart() {  //-> array of Items
//   var cartCopy = [];
//   for (var i in cart) {
//     var item = cart[i];
//     var itemCopy = {};
//     for (var p in item) {
//       itemCopy[p] = item[p];
//     }
//     cartCopy.push(itemCopy);
//   }
//   return cartCopy;
// }
//
//
// // //******************************
// // var array = listCart();
// // array[0].name = 'mistake';
// // console.log(array);
//
// function saveCart() {   //--> use local storage
//  localStorage.setItem("shoppingCart", JSON.stringify(cart));
//  console.log("working");
//
// }
//
//
// function loadCart() {//-> retrieve the cart from loal storage
// cart = JSON.parse(localStorage.getItem("shoppingCart"));
// }
//
//  loadCart();
//  displayCart();
//
//
//
//
// var array = listCart();
// console.log("---------------");
// console.log(array);
//
//
//
//
//
//
//
//
//
//
//
//
//
// });
