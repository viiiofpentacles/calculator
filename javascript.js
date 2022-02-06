const display = document.querySelector("#screen");
const clearButton = document.querySelector(".clear");
const numberButtons = document.querySelectorAll(".numbers").forEach(numberButtons => {
    numberButtons.addEventListener("click", (chooseNumber));
});
const operatorButtons = document.querySelectorAll(".operator").forEach(operatorButtons => {
    operatorButtons.addEventListener("click", (chooseOperator));
});
const equalsButton = document.querySelector(".equalsButton");


function updateDisplay () {
    if(result != 0){
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

function chooseOperator () {
    if(value1 === 0){
        alert("You must input a number first.");
    }else{
        operator = this.innerHTML;
    }
};

function getOutcome () {
    if(operator == "+"){
        result = parseFloat(value1) + parseFloat(value2);
        value1 = result;
    }else if(operator == "-"){
        result = parseFloat(value1) - parseFloat(value2);
        value1 = result;
    }else if(operator == "*"){
        result = parseFloat(value1) * parseFloat(value2);
        value1 = result;
    }else if(operator == "/"){
        result = parseFloat(value1) / parseFloat(value2);
        value1 = result;
    }else{
        console.log("error");
    }
    updateDisplay();
}

equalsButton.addEventListener("click", getOutcome);