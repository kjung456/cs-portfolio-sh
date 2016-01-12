//var stands for variable and it means that you have declared a variable msg which empty and same with the focus name.
var button = document.getElementById("submitButton");
var input1 = document.getElementById('input1');
var input2 = document.getElementById('input2');
var answer;
var display = document.getElementById('display');
var dropdown = document.getElementById("dropdown");

button.addEventListener("click", doMath);
//This is all of the functions that work for my calculator. I have addition, substraction, multiplication, division, square root, and exponents. 
function doMath() {
    if  (dropdown.value === "+"){
        answer = parseInt(input1.value) + parseInt(input2.value);
        display.innerHTML = answer;
    }
    if  (dropdown.value === "-"){
        answer = parseInt(input1.value) - parseInt(input2.value);
        display.innerHTML = answer;
    }
    if  (dropdown.value === "x"){
        answer = parseInt(input1.value) * parseInt(input2.value);
        display.innerHTML = answer;
    }
    if  (dropdown.value === "/"){
        answer = parseInt(input1.value) / parseInt(input2.value);
        display.innerHTML = answer;
    }
    if  (dropdown.value === "sqrt"){
        answer = Math.sqrt(input1.value)
        display.innerHTML = answer;
    }
    if  (dropdown.value === "^"){
        answer = Math.pow(input1.value,input2.value);
        display.innerHTML = answer;
    }
}