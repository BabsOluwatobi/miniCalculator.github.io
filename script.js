// MINI CALCULATOR

let currentInput = "";

// Append a number to the current input
function appendNumber(numbers) {
  currentInput += numbers;
  document.getElementById("result").value = currentInput;
}

// Append an operator to the current input
function appendOperator(operator) {
  currentInput += ` ${operator} `;
  document.getElementById("result").value = currentInput;
}

// Calculate the result
function CalculateResult() {
  try {
    const result = eval(currentInput);
    document.getElementById("result").value = result;
    currentInput = result.toString();
  } catch (error) {
    document.getElementById("result").value = "Error";
    currentInput = "";
  }
}

// Clear the screen
function clearScreen() {
  currentInput = "";
  document.getElementById("result").value = "";
}
