let namename=prompt("Lütfen adınızı giriniz");
let namenameDOM=document.querySelector("#myName");
namenameDOM.innerHTML=namename;
var gunler = ["Pazar","Pazartesi","Salı","Çarşamba","Perşembe","Cuma","Cumartesi"];
var today = new Date();
var clock = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds() + ", " + gunler[today.getDay()];
var clockDOM=document.querySelector("#myClock");
clockDOM.innerHTML=clock