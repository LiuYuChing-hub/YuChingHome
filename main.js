//alert("hello");
const idfb=document.getElementById("idfb");
const idig=document.getElementById("idig");

const ques=document.getElementById("ques");
const idname=document.getElementById("idname");
const btn=document.getElementById("btn");
const info=document.getElementById("info");

const url="http://ipinfo.io/json?token=96c23e8b1c9f73"

idfb.addEventListener('mouseenter',e=>{
    idfb.style.border="5px solid";
    idfb.style.color="#3b5998";
    //  idfb.classList.remove('col-lg-2');
    //  idfb.classList.add('col-lg-4');

});
idfb.addEventListener('mouseout',e=>{
    idfb.style.border="";
    idfb.style.color="#3b5998";
    //  idfb.classList.remove('col-lg-4');
    //  idfb.classList.add('col-lg-2');
});

idig.addEventListener('mouseenter',e=>{
    idig.style.border="5px solid";
    idig.style.color="#E74C3C";
    //  idig.classList.remove('col-lg-2');
    //  idig.classList.add('col-lg-4');
});
idig.addEventListener('mouseout',e=>{
    idig.style.border="";
    idig.style.color="#E74C3C";
    //  idig.classList.remove('col-lg-4');
    //  idig.classList.add('col-lg-2');
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