var plus = document.querySelectorAll(".plus")
var mins = document.querySelectorAll(".mins")
var qty = document.querySelectorAll(".qty")
var price = document.querySelectorAll(".price")
var total_price = document.querySelector("#total-price")
var deleteItem = document.querySelectorAll(".bi-trash3")
var like = document.querySelectorAll("bi-heart-fill")

//console.log(deleteItem)

// Initialize total price 

function calcTotal() {
    var qty = document.querySelectorAll(".qty")
    var price = document.querySelectorAll(".price")
    var total = 0;
    qty.forEach(function(quantity, i){
        total += parseInt(quantity.innerHTML) * parseInt(price[i].innerHTML)
        console.log(quantity)
    })
    total_price.innerHTML = total
}
calcTotal()

let plusAdded = false;
if (!plusAdded){
plus.forEach(function(item, i){
    item.addEventListener("click", function(){
        console.log("Plus button clicked");
       let quantity = parseInt(qty[i].innerHTML);
       qty[i].innerHTML = parseInt(qty[i].innerHTML) + 1;
      
})
})
}

