var add=document.querySelector(".add");
var txt=document.querySelector("h2");
var check=0;
add.addEventListener("click",function(){
    if (check==0) {
        add.innerHTML="remove";
        add.style.color="black";
        add.style.backgroundColor="#dadada";
        txt.innerHTML="Friend";
        txt.style.color="green";   
        check=1;
    } else {
        add.innerHTML="Add Friend";
        add.style.color="white";
        add.style.backgroundColor="cadetBlue";
        txt.innerHTML="Stranger";
        txt.style.color="red";
        check=0;
    }
    
})