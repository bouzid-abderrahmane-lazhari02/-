let arabic = document.getElementById("ar");
let english = document.getElementById("en");
let titel = document.getElementById("h3");
let t = document.getElementById("div2");
let a1 = document.getElementById("a1");
let div3 = document.getElementById("div3");
let p1 = document.getElementById("p1");

arabic.onclick = () =>{
    setLanugage("ar");
    localStorage.setItem("leng","ar");
};

english.onclick = () =>{
    setLanugage("en");
    localStorage.setItem("leng","en");
};

onload = ()=>{
    setLanugage(localStorage.getItem("leng"));
};
function setLanugage(getLanuage){
    if(getLanuage === "ar"){
      titel.innerHTML = "بوزيد عبدالرحمان الازهاري"
      t.innerHTML = "مرحبا"
      a1.innerHTML = "عبدالرحمان ";
      div3.innerHTML = "مطعم";
      p1.innerHTML = "اترك لنا رسالة عبر البريد الالكتروني ";
    }else if(getLanuage === "en"){
        titel.innerHTML = "Bouzid Abderrahmane Lazhari"
        t.innerHTML = "Welcome"
        a1.innerHTML = "Abderrahmane";
        div3.innerHTML = "Resturant";
        p1.innerHTML = "Leave us a message via email";
    }
}  