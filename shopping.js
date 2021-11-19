window.onload = function(){
let buttonRemoved = document.querySelectorAll("button[class=remove]");
let cartItemQuantity = document.querySelectorAll("input[class=cartItemQuantityInput");
let buttonAdded = document.querySelectorAll('button[class=Add]');


for(let button of buttonRemoved){
    button.addEventListener("click", removeItem);
}

for(let cartItemQuantityUpdate of cartItemQuantity){
    cartItemQuantityUpdate.addEventListener("change", quantityUpdate);
}

for(let buttonAdd of buttonAdded){
    buttonAdd.addEventListener("click", addItem);
}

function removeItem(event){
    let buttonClick = event.target;
    buttonClick.parentElement.parentElement.remove();
    cartTotalUpdate();
}

function addItem(event){
    let addButton = event.target;
    let shopItem = addButton.parentElement.parentElement;
    
    let itemImg = shopItem.getElementsByClassName("storeImage")[0].src;
    let itemName = shopItem.getElementsByClassName("itemName")[0].innerText;
    let itemDescription = shopItem.getElementsByClassName("itemDescription")[0].innerText;
    let itemPrice = shopItem.getElementsByClassName("itemPrice")[0].innerText;

    toCart(itemImg, itemName, itemDescription, itemPrice);
    cartTotalUpdate();
}

function toCart(itemImg, itemName, itemDescription, itemPrice){
    
    let addedRow = document.createElement("tr");
    addedRow.classList.add("cartRow");
    let addedItem = document.getElementsByClassName("cart")[0];
    console.log(addedItem);
    
    let addedItemNames = addedItem.getElementsByClassName("cartItemName");

    for(let i = 0; i <addedItemNames.length; i++){
        if(addedItemNames[i].innerText == itemName){
            alert('Item already added to cart');
            return;
        }
    }
 //*/
    let addedItemContents = `
        <th class="cartItemImg"><img class="storeImage" src="${itemImg}" width="115" height="90"/></th>
        <th class="cartItemName"> ${itemName} </th>
        <th class="cartItemDescription"> ${itemDescription}</th>
        <th class="cartItemPrice"> ${itemPrice}</th>
        <th class="cartItemQuantity"> <input class="cartItemQuantityInput" type="number" value="1"/> </th>
        <th class="cartItemRemove"> <button class="remove"> Remove from cart </button></th>`;
    addedRow.innerHTML = addedItemContents;
    addedItem.append(addedRow);
    
    addedRow.getElementsByClassName('remove')[0].addEventListener("click", removeItem);
    addedRow.getElementsByClassName('cartItemQuantityInput')[0].addEventListener("change", quantityUpdate);
    //*/
}

function cartTotalUpdate(){
    let cart = document.querySelectorAll("table[class=cart]")[0];
    let cartRows = cart.getElementsByClassName("cartRow");
    let total = 0

    for(let cartRow of cartRows){
        let itemPrice = cartRow.getElementsByClassName("cartItemPrice")[0];
        let itemQuantity = cartRow.getElementsByClassName("cartItemQuantityInput")[0];
        let price = itemPrice.innerText.replace('$', '');
        let quantity = itemQuantity.value;
        total += (price*quantity);
    }
    total = Math.round(total*100)/100;
    document.getElementsByClassName("cartTotalValue")[0].innerText = '$' + total;   
}

function quantityUpdate(event){
    let quantity = event.target;
    if(isNaN(quantity.value) || quantity.value <= 0){
        quantity.value = 1;
    }
    cartTotalUpdate();
}



function myAlert(){
    alert("Hello, alert");
}

function myLog(){
    console.log("Hello, log");
}
}