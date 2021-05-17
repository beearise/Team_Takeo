var amt = 0;
var final = "";
var c = 0;
const temp = document.querySelector("#amount");
const cc = document.querySelector("#count");

const m = document.querySelector(".name");
const n = document.querySelector(".email");
const o = document.querySelector(".card");
const p = document.querySelector(".ccv");
const q = document.querySelector(".exp");
const r = document.querySelector(".city");

const t = document.querySelector(".zip");

function addAmount(){
    amt = amt+7.99;
    final = amt.toFixed(2)+"$";
    c++
    cc.innerHTML=c;
    temp.innerHTML=final;
}
    
function resetAmount(){
    amt = 0;
    c = 0;
    cc.innerHTML = 0;
    temp.innerHTML = amt+"$";
}
