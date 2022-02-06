let value1=0;
let value2=0;
let result;


const display = document.querySelector("#screen");
const clearButton = document.querySelector(".clear");
const numberButtons = document.querySelectorAll(".numbers").forEach(numberButtons => {
    numberButtons.addEventListener("click", (chooseNumber));
});

function allClear () {
    value1=0;
    value2=0;
};

clearButton.addEventListener("click", allClear);

function chooseNumber () {
    if(value1 == 0){
        value1 = this.innerHTML; 
    }else{
        value1 += this.innerHTML;
    }
    updateDisplay();
};


function updateDisplay () {
    display.textContent = value1;
}