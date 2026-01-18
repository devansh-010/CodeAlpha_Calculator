const display = document.getElementById('display');

// Adds numbers/operators to the screen
function appendToDisplay(input) {
    display.value += input;
}

// Clears everything
function clearDisplay() {
    display.value = "";
}

// Deletes the last character (backspace)
function deleteLast() {
    display.value = display.value.slice(0, -1);
}

// Performs the calculation
function calculate() {
    try {
        // eval() takes a string and executes it as math (e.g., "2+2" becomes 4)
        display.value = eval(display.value);
    } catch (error) {
        display.value = "Error";
    }
}