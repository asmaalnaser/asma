
var x = document.getElementById("fnumber");
var y = document.getElementById("snumber");
function addition(){
var sum = parseInt(x.value)+parseInt(y.value);
document.getElementById("result").innerHTML = sum;
}
function multiplication(){
var mutli = parseInt(x.value)*parseInt(y.value);
document.getElementById("result").innerHTML = mutli;
}
function mod(){
var mod = parseInt(x.value)%parseInt(y.value);
document.getElementById("result").innerHTML = mod;
}