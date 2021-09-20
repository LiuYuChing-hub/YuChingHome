//alert("hello");
const idfb=document.getElementById("idfb");
const idig=document.getElementById("idig");
idfb.addEventListener('mouseenter',e=>{
    idfb.classList.remove('col-sm-2');
    idfb.classList.add('col-sm-3');
});
idfb.addEventListener('mouseout',e=>{
    idfb.classList.remove('col-sm-3');
    idfb.classList.add('col-sm-2');
});

idig.addEventListener('mouseenter',e=>{
    idig.classList.remove('col-sm-2');
    idig.classList.add('col-sm-3');
});
idig.addEventListener('mouseout',e=>{
    idig.classList.remove('col-sm-3');
    idig.classList.add('col-sm-2');
});
idfb.addEventListener("click",function(){
    window.open("https://www.facebook.com/profile.php?id=100000129657673");
});
idig.addEventListener("click",function(){
    window.open("https://www.instagram.com/claire875/");
});