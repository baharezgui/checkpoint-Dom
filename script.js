var plus = document.querySelectorAll(".plus")
var mins = document.querySelectorAll(".mins")
var qty = document.querySelectorAll(".qty")
var price = document.querySelectorAll(".price")
var total_price = document.querySelector("#total-price")
var deleteItem = document.querySelectorAll(".bi-trash3")
var like = document.querySelectorAll(".bi-heart-fill")

//console.log(deleteItem)

// Initial Total Price 


function calcTotal() {
    var qty = document.querySelectorAll(".qty")
    var price = document.querySelectorAll(".price")
    var total = 0;
    qty.forEach(function (quantity, i) {
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
      calcTotal()
})
})
}

mins.forEach(function (item, i) {
    item.addEventListener("click", function () {
        if (parseInt(qty[i].innerHTML) === 1) {
            return false
        } else {

            qty[i].innerHTML = parseInt(qty[i].innerHTML) - 1
            calcTotal()
        }
    })
})
deleteItem.forEach(function (deleteBtn, i) {
    deleteBtn.addEventListener("click", function () {
        deleteBtn.parentNode.parentNode.remove()
        calcTotal()
    })
})

like.forEach(function (likeBtn) {
    likeBtn.addEventListener("click", function (event) {
event.stopPropagation();
        if (likeBtn.style.color === "red") {
            likeBtn.style.color = ""
        } else {

            likeBtn.style.color = "red"
        }
    })
})
// console.log(price)