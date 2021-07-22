console.log("hello");
function one() {
  let string = document.getElementById("out");
  let a = string.innerText + "1";
  console.log(a);
  document.getElementById("out").innerText = a;
}
function two() {
  let string = document.getElementById("out");
  let a = string.innerText + "2";
  console.log(a);
  document.getElementById("out").innerText = a;
}
function three() {
  let string = document.getElementById("out");
  let a = string.innerText + "3";
  console.log(a);
  document.getElementById("out").innerText = a;
}
function four() {
  let string = document.getElementById("out");
  let a = string.innerText + "4";
  console.log(a);
  document.getElementById("out").innerText = a;
}
function five() {
  let string = document.getElementById("out");
  let a = string.innerText + "5";
  console.log(a);
  document.getElementById("out").innerText = a;
}
function six() {
  let string = document.getElementById("out");
  let a = string.innerText + "6";
  console.log(a);
  document.getElementById("out").innerText = a;
}
function seven() {
  let string = document.getElementById("out");
  let a = string.innerText + "7";
  console.log(a);
  document.getElementById("out").innerText = a;
}
function eight() {
  let string = document.getElementById("out");
  let a = string.innerText + "8";
  console.log(a);
  document.getElementById("out").innerText = a;
}
function nine() {
  let string = document.getElementById("out");
  let a = string.innerText + "9";
  console.log(a);
  document.getElementById("out").innerText = a;
}
function zero() {
  let string = document.getElementById("out");
  let a = string.innerText + "0";
  console.log(a);
  document.getElementById("out").innerText = a;
}
function dzero() {
  let string = document.getElementById("out");
  let a = string.innerText + "00";
  console.log(a);
  document.getElementById("out").innerText = a;
}
function plus() {
  let string = document.getElementById("out");
  let a = string.innerText + "+";
  console.log(a);
  document.getElementById("out").innerText = a;
}
function minus() {
  let string = document.getElementById("out");
  let a = string.innerText + "-";
  console.log(a);
  document.getElementById("out").innerText = a;
}
function multiply() {
  let string = document.getElementById("out");
  let a = string.innerText + "*";
  console.log(a);
  document.getElementById("out").innerText = a;
}
function divide() {
  let string = document.getElementById("out");
  let a = string.innerText + "/";
  console.log(a);
  document.getElementById("out").innerText = a;
}
function modulo() {
  let string = document.getElementById("out");
  let a = string.innerText + "%";
  console.log(a);
  document.getElementById("out").innerText = a;
}
function dot() {
  let string = document.getElementById("out");
  let a = string.innerText + ".";
  console.log(a);
  document.getElementById("out").innerText = a;
}
function ans() {
  let string = document.getElementById("out").innerText;
  // let a=string.innerText;
  let aa = eval(string);
  console.log(aa);
  //console.log("works")
  document.getElementById("out").innerText = aa;
}
function clearr() {
  document.getElementById("out").innerText = "";
  console.log("clicked");
}
function backSpace() {
  let string = document.getElementById("out").innerText;
  let a=string.substr(0,string.length-1);
  document.getElementById("out").innerText=a;
}
