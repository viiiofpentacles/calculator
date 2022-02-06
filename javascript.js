const display = document.querySelector("#screen");
const clearButton = document.querySelector(".clear");
const numberButtons = document.querySelectorAll(".numbers").forEach(numberButtons => {
    numberButtons.addEventListener("click", chooseNumber);
});
const operatorButtons = document.querySelectorAll(".operator").forEach(operatorButtons => {
    operatorButtons.addEventListener("click", chooseOperator);
});
const decimalButton = document.querySelector(".decimal");
const equalsButton = document.querySelector(".equalsButton");


function updateDisplay () {
    if(value1 == result && operator != 0 && value2 != 0){
        display.textContent = value2;
    }else if(value1 == result && operator != 0){
        display.textContent = result;
    }else if(result != 0){
        display.textContent = result;
    }else if(value1 != 0 && value2 === 0){
        display.textContent = value1;
    }else if(value1 != 0 && value2 != 0){
        display.textContent = value2;
    }else if(value1 === 0 && value2 === 0){
        display.textContent = 0;
    }
}

let value1 = 0;
let value2 = 0;
let result = 0;
let operator = 0;
updateDisplay();


function allClear () {
    value1 = 0;
    value2 = 0;
    result = 0;
    operator = 0;
    decimalButton.disabled = false;
    updateDisplay();
};

clearButton.addEventListener("click", allClear);

function chooseNumber () {
    if(value1 === 0 && value2 === 0){
        value1 = this.innerHTML; 
    }else if(value1!=0 && value2 === 0 && operator===0){
        value1 += this.innerHTML;
    }else if(value1!=0 && value2 === 0){
        value2 = this.innerHTML;
    }else if(value1!=0 && value2 != 0){
        value2 += this.innerHTML;
    };
    updateDisplay();
};

function addDecimal () {
    if(operator===0){
        value1 += this.innerHTML;
        decimalButton.disabled =true;
    }else {
        value2 += this.innerHTML;
        decimalButton.disabled =true;
    }
};

decimalButton.addEventListener("click", addDecimal);

function chooseOperator () {
    if(value1 === 0){
        alert("You must input a number first.");
    }else if (operator === 0){
        operator = this.innerHTML;
        decimalButton.disabled =false;
    }else {
        getOutcome();
        operator = this.innerHTML;
        decimalButton.disabled =false;
    };
};

function getOutcome () {
    if(operator == "+"){
        if((parseFloat(value1) + parseFloat(value2)) % 1 === 0) {
            result = (parseFloat(value1) + parseFloat(value2))
        }else {result = (parseFloat(value1) + parseFloat(value2)).toFixed(2);
        }value1 = result;
         value2 = 0;
         operator = 0;
    }else if(operator == "-"){
        if((parseFloat(value1) - parseFloat(value2)) % 1 === 0) {
            result = (parseFloat(value1) - parseFloat(value2))
        }else {result = (parseFloat(value1) - parseFloat(value2)).toFixed(2);
        }value1 = result;
         value2 = 0;
    }else if(operator == "*"){
        if((parseFloat(value1) * parseFloat(value2)) % 1 === 0) {
            result = (parseFloat(value1) * parseFloat(value2))
        }else {result = (parseFloat(value1) * parseFloat(value2)).toFixed(2);
        }value1 = result;
         value2 = 0;
    }else if(operator == "/" && value2 === "0"){
        result = ":)";
    }else if(operator == "/"){
        if((parseFloat(value1) / parseFloat(value2)) % 1 === 0) {
            result = (parseFloat(value1) / parseFloat(value2))
        }else {result = (parseFloat(value1) / parseFloat(value2)).toFixed(2);
        }value1 = result;
         value2 = 0;
    }else{
        console.log("error");
    }
    updateDisplay();
}

equalsButton.addEventListener("click", getOutcome);