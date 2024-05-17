// Create functions to add, subtract, multiply and divide
function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    if (b === 0) {
        return "NaN";
    }
    return a / b;
}

// Create variables to store numbers, operator, and display values
let numA = "";
let operator = "";
let numB = "";
let displayValue = "";

// Create a function that will be used to activate math functions above
function operate(operator, numA, numB) {
    const a = parseFloat(numA);
    const b = parseFloat(numB);
    let result;
    switch(operator) {
        case "+":
            result = add(a, b);
            break;
        case "-":
            result = subtract(a, b);
            break;
        case "*":
            result = multiply(a, b);
            break;
        case "/":
            result = divide(a, b);
            break;
        default:
            throw new Error("Invalid operator");
    }
    return result;
}

// Create a function that will populate the display when the number buttons are clicked and store the display value
function appendNumber(number) {
    displayValue += number;
    document.getElementById('display').innerText = displayValue;
}

// Function to handle operator buttons
function setOperator(op) {
    if (displayValue === "") return; // Prevent setting an operator without a number
    if (numA === "") {
        numA = displayValue;
        operator = op;
        displayValue = "";
    } else if (operator !== "" && numB === "") {
        operator = op; // Update operator if pressed consecutively
    } else {
        numB = displayValue;
        const result = operate(operator, numA, numB);
        if (typeof result === "string") { // Check for error message
            document.getElementById('display').innerText = result;
            resetCalculator();
            return;
        }
        displayValue = roundResult(result).toString();
        document.getElementById('display').innerText = displayValue;
        numA = displayValue;
        operator = op;
        displayValue = "";
        numB = "";
    }
}

// Function to handle the equals button
function calculate() {
    if (operator === "" || displayValue === "") return; // Prevent calculating without all inputs
    numB = displayValue;
    const result = operate(operator, numA, numB);
    if (typeof result === "string") { // Check for error message
        document.getElementById('display').innerText = result;
        resetCalculator();
        return;
    }
    displayValue = roundResult(result).toString();
    document.getElementById('display').innerText = displayValue;
    numA = displayValue;
    operator = "";
    numB = "";
}

// Function to round results to prevent overflow
function roundResult(result) {
    return Math.round(result * 1000000) / 1000000; // Round to 6 decimal places
}

// Function to reset the calculator
function resetCalculator() {
    numA = "";
    operator = "";
    numB = "";
    displayValue = "";
    document.getElementById('display').innerText = "0";
}

// Event listeners for number buttons
document.querySelectorAll('.number').forEach(button => {
    button.addEventListener('click', () => {
        appendNumber(button.innerText);
    });
});

// Event listeners for operator buttons
document.getElementById('add').addEventListener('click', () => setOperator('+'));
document.getElementById('subtract').addEventListener('click', () => setOperator('-'));
document.getElementById('multiply').addEventListener('click', () => setOperator('*'));
document.getElementById('divide').addEventListener('click', () => setOperator('/'));

// Event listener for the equals button
document.getElementById('equal').addEventListener('click', calculate);

// Event listener for the clear button
document.getElementById('clear').addEventListener('click', resetCalculator);
