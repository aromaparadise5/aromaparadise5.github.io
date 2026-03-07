let cart = JSON.parse(localStorage.getItem("cart")) || [];

function addToCart(name,price){

cart.push({name,price});

localStorage.setItem("cart",JSON.stringify(cart));

alert("Added to cart");

updateCart();
}

function updateCart(){

let count=document.getElementById("cart-count");

if(count){
count.innerText=cart.length;
}

}

updateCart();
