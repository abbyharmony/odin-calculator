// Create functions to add, subtract, multiply and divide
function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return b - a;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    if (b === 0) {
        throw new Error("error");
    }
    return a / b;
}

//create variables to store numbers, operator and display values
 let numA = "";
 let operator = "";
 let numB = "";
 let displayValue = "";

//create a function that will be used to activate math functions above
function operate(operator, numA, numB) {
    const a = parseFloat(numA);
    const b = parseFloat(numB);
    switch(operator) {
        case "+":
            return add(a, b);
        case "-":
            return subtract(a, b);
        case "*":
            return multiply(a, b);
        case "/":
            return divide(a, b);
        default:
            throw new Error("error");
    }
};

 /*create a function that will populate the display when the number buttons are clicked
 and store the display value */
 function appendNumber(number) {
    displayValue += number;
    document.getElementById('display').value = displayValue;
};


//Create event listeners for math buttons
 let addButton = document.getElementById("add");
 addButton.addEventListener("click", () => {
    add();
 });