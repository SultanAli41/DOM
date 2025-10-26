var card =document.querySelector(".card");
var icon=document.querySelector("i");
card.addEventListener("dblclick",function(){
    icon.style.opacity=0.8;
    icon.style.transform="translate(-50%,-50%) scale(1)";
    icon.style.transition="    transition: all ease-in 1"; 
    setTimeout(function(){
        icon.style.transform="translate(-50%,-50%) scale(0)";
     },2000)
})