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

 let numA;
 let operator;
 let numB;

 function operate(operator, numA, numB) {
    switch(operator) {
        case "+":
            return add(numA, numB);
        case "-":
            return subtract(numA, numB);
        case "*":
            return multiply(numA, numB);
        case "/":
            return divide(numA, numB);
        default:
            throw new Error("error");
    }
 };

 let addButton = document.getElementById("add");
 addButton.addEventListener("click", () => {
    add();
 });