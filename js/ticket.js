var amt = 0;
var final = "";
var c = 0;
const temp = document.querySelector("#amount");
const cc = document.querySelector("#count");

const ff = document.querySelector("#final");
const empty = document.querySelector(".awe");
const modalBody = document.querySelector(".modal-body");

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


function onSubmit(e){
    e.preventDefault();
   

}