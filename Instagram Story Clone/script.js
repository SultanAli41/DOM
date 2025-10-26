var arr=[
    {dp:"https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bW9kZWx8ZW58MHx8MHx8fDA%3D",story:"https://unsplash.com/photos/woman-holding-heft-long-blonde-hair-et_78QkMMQs"}
    ,{dp:"https://plus.unsplash.com/premium_photo-1673757121102-0ca51260861f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8bW9kZWx8ZW58MHx8MHx8fDA%3D",story:"https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bW9kZWx8ZW58MHx8MHx8fDA%3D"}
    ,{dp:"https://images.unsplash.com/photo-1556347961-f9521a88cb8a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bW9kZWxzfGVufDB8fDB8fHww",story:"https://images.unsplash.com/photo-1564485377539-4af72d1f6a2f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fG1vZGVsfGVufDB8fDB8fHww"}
    ,{dp:"https://images.unsplash.com/photo-1611601322175-ef8ec8c85f01?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bW9kZWxzfGVufDB8fDB8fHww",story:"https://images.unsplash.com/photo-1562572159-4efc207f5aff?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fG1vZGVsfGVufDB8fDB8fHww"}
    ,{dp:"https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8bW9kZWxzfGVufDB8fDB8fHww",story:"https://images.unsplash.com/photo-1613005798967-632017e477c8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bW9kZWx8ZW58MHx8MHx8fDA%3D"}
];
var cluter="";
arr.forEach( function(dets,idx){
cluter+=`<div class="story"><img id=${idx} src="${dets.dp}" alt=""></div>`
})
var storiyan=document.querySelector(".storiyan");
storiyan.innerHTML=cluter;
storiyan.addEventListener("click", function (dets) {
console.log("HY")
document.querySelector(".fs").style.display="block";
document.querySelector(".fs").style.backgroundImage =`url(${arr[dets.target.id].story})`;
/*dets sy pointer position milti hai aur usy target krny ka matlab hai k jis pr event kr rahain hain us ki detail .id yani k us ki id 
jb dets sy target kr k us elem ki id hammary pass aa gai yani k ab usy array name likh k array brackets main lekh dain gy aur .story kr 
dain gy is sy jo id number hoo ga wahi index no ban kr story sy images pic kray ga*/
setTimeout(function(){
    document.querySelector(".fs").style.display="none";
},3000);
});