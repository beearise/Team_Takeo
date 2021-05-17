
const form = document.querySelector('#form');
const firstname = document.querySelector('#firstname');
const lastname = document.querySelector('#lastname');
const emailInput = document.querySelector('#email');
const phoneInput = document.querySelector('#Phone');
const cityInput = document.querySelector('#city');
const zipCodeInput = document.querySelector('#zip');

const user = document.querySelector('#users');

form.addEventListener("submit",onsubmit);
function onsubmit(e){
e.preventDefault();    

const li=document.createElement("li");
li.appendChild(document.createTextNode("Name"+firstname.value+lastname.value +" Email:"+emailInput.value+"Phone"+phoneInput.value+"city:"+cityInput.value));

user.appendChild(li);
firstname.value="";
lastname.value="";
emailInput.value="";
phoneInput.value="";
cityInput.value="";
}
