const display = document.querySelector("#screen");
const clearButton = document.querySelector(".clear");
const numberButtons = document.querySelectorAll(".numbers").forEach(numberButtons => {
    numberButtons.addEventListener("click", (chooseNumber));
});
const operatorButtons = document.querySelectorAll(".operator").forEach(operatorButtons => {
    operatorButtons.addEventListener("click", (chooseOperator));
});


function updateDisplay () {
    if(value1 != 0 && value2 === 0){
        display.textContent = value1;
    }else if(value1 != 0 && value2 != 0){
        display.textContent = value2;
    }else if(value1 === 0 && value2 === 0){
        display.textContent = 0;
    }
}

let value1 = 0;
let value2 =0 ;
let result;
let operator = 0;
updateDisplay();


function allClear () {
    value1 = 0;
    value2 = 0;
    result = 0;
    updateDisplay();
};

clearButton.addEventListener("click", allClear);

function chooseNumber () {
    if(value1 === 0){
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
        value1 += operator;
    }
    updateDisplay();
};