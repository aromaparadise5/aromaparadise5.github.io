const candles=document.querySelectorAll(".candle");

window.addEventListener("scroll",()=>{

candles.forEach(c=>{

let top=c.getBoundingClientRect().top;

if(top<window.innerHeight-100){

c.classList.add("show");

}

});

});
