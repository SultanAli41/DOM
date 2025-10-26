let main=document.querySelector(".main");
let crsr=document.querySelector(".cursor");
main.addEventListener("mousemove",function(val){
    crsr.style.left=val.x+"px";
    crsr.style.top=val.y+"px";

})