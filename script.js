const showPlace = document.getElementById("show");

let firstNum = 0;
let secondNum = 0;
let operator = "";
let result = 0;

function point() {
    if (!showPlace.textContent.includes(".")) {
        showPlace.textContent += ".";
    }
}
function zero() {
    showPlace.textContent += "0";
}
function one() {
    showPlace.textContent += "1";
}
function two() {
    showPlace.textContent += "2";
}
function three() {
    showPlace.textContent += "3";
}
function four() {
    showPlace.textContent += "4";
}
function five() {
    showPlace.textContent += "5";
}
function six() {
    showPlace.textContent += "6";
}
function seven() {
    showPlace.textContent += "7";
}
function eight() {
    showPlace.textContent += "8";
}
function nine() {
    showPlace.textContent += "9";
}
function c() {
    showPlace.textContent = Math.floor(showPlace.textContent / 10);
}
function ac() {
    firstNum = 0;
    secondNum = 0;
    operator = "";
    result = 0;
    showPlace.textContent = "";
}
function plus() {
    firstNum = showPlace.textContent;
    operator = "+";
    showPlace.textContent = "";
}
function minus() {
    showPlace.textContent += " - ";
}
function multiply() {
    showPlace.textContent += " x ";
}
function division() {
    showPlace.textContent += " / ";
}