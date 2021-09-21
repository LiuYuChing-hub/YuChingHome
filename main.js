//alert("hello");
const idfb=document.getElementById("idfb");
const idig=document.getElementById("idig");

const ques=document.getElementById("ques");
const idname=document.getElementById("idname");
const btn=document.getElementById("btn");
const info=document.getElementById("info");

const url="http://ipinfo.io/json?token=96c23e8b1c9f73"

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

btn.addEventListener("click",function(){
    if(idname==""||idname==null){
        info.innerHTML="Empty!"
    }else{
        info.innerHTML="Hello!"+idname.value;
        idname.style.display="none";
        btn.style.display="none";
        ques.style.display="none";
        axios
            .get(url)
            .then(function(res){
                info.innerHTML+='<br>IP:'+res.data.ip;
                info.innerHTML+='<br>City:'+res.data.city;
                info.innerHTML+='<br>Country:'+res.data.country;
            })
            .catch(function(err){
                info.innerHTML+='<br>'+err;
            });
    }
});