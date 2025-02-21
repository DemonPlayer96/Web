const showPlace = document.getElementById("show");
const showPast = document.getElementById("showPast");

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
    showPlace.textContent = showPlace.textContent.toString().split('').slice(0, -1).join('')
}
function ac() {
    firstNum = 0;
    secondNum = 0;
    operator = "";
    showPlace.textContent = "";
    showPast.textContent = "";
}
function plus() {
    firstNum = showPlace.textContent;
    operator = "+";
    showPast.textContent = firstNum;
    showPlace.textContent = "";
}
function minus() {
    firstNum = showPlace.textContent;
    operator = "-";
    showPast.textContent = firstNum;
    showPlace.textContent = "";
}
function multiply() {
    firstNum = showPlace.textContent;
    operator = "*";
    showPast.textContent = firstNum;
    showPlace.textContent = "";
}
function division() {
    firstNum = showPlace.textContent;
    operator = "/";
    showPast.textContent = firstNum;
    showPlace.textContent = "";
}
function modules() {
    firstNum = showPlace.textContent;
    operator = "%";
    showPast.textContent = firstNum;
    showPlace.textContent = "";
}
function ans() {
    showPlace.textContent = result;
}
function equal() {
    if(operator == "+") {
        secondNum = showPlace.textContent;
        result = Number(firstNum) + Number(secondNum);
        showPlace.textContent = result;
        showPast.textContent = firstNum + " + " + secondNum + " = " + result;
    }
    else if(operator == "-") {
        secondNum = showPlace.textContent;
        result = Number(firstNum) - Number(secondNum);
        showPlace.textContent = result;
        showPast.textContent = firstNum + " - " + secondNum + " = " + result;
    }
    else if(operator == "*") {
        secondNum = showPlace.textContent;
        result = Number(firstNum) * Number(secondNum);
        showPlace.textContent = result;
        showPast.textContent = firstNum + " x " + secondNum + " = " + result;
    }
    else if(operator == "/") {
        secondNum = showPlace.textContent;
        result = Number(firstNum) / Number(secondNum);
        showPlace.textContent = result;
        showPast.textContent = firstNum + " / " + secondNum + " = " + result;
    }
    else if(operator == "%") {
        secondNum = showPlace.textContent;
        result = Number(firstNum) % Number(secondNum);
        showPlace.textContent = result;
        showPast.textContent = firstNum + " % " + secondNum + " = " + result;
    }
}