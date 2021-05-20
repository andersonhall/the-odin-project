const calculator = {
  displayValue: '0',
  firstOperand: null,
  waitingForSecondOperand: false,
  operator: null,
};

function updateDisplay() {
  const display = document.querySelector('.display');
  display.textContent = calculator.displayValue;
}

updateDisplay();

const keys = Array.from(document.querySelectorAll('button'));
keys.map(key => {
  key.addEventListener('click', event => {
    const { id } = event.target.dataset;
    const { classList } = event.target;

    if (classList.contains('btn-operator')) {
      handleOperator(id);
      updateDisplay();
    }

    if (id === 'decimal') {
      inputDecimal();
      updateDisplay();
    }

    if (id === 'clear') {
      resetCalculator();
      updateDisplay();
    }

    if (classList.contains('btn-number')) {
      inputDigit(id);
      updateDisplay();
    }
  });
});

function inputDigit(digit) {
  const { displayValue, waitingForSecondOperand } = calculator;

  if (waitingForSecondOperand) {
    calculator.displayValue = digit;
    calculator.waitingForSecondOperand = false;
  } else {
    calculator.displayValue = displayValue === '0' ? digit : displayValue + digit;
  }
}

function inputDecimal() {
  if (calculator.waitingForSecondOperand === true) {
    calculator.displayValue = '0.';
    calculator.waitingForSecondOperand = false;
    return;
  }

  if (!calculator.displayValue.includes('.')) {
    calculator.displayValue += '.';
  }
}

function handleOperator(nextOperator) {
  const { firstOperand, displayValue, operator } = calculator;
  const inputValue = parseFloat(displayValue);

  if (operator && calculator.waitingForSecondOperand) {
    calculator.operator = nextOperator;
    return;
  }

  if (firstOperand === null && !isNaN(inputValue)) {
    calculator.firstOperand = inputValue;
  } else if (operator) {
    const result = calculate(firstOperand, inputValue, operator);
    calculator.displayValue = `${parseFloat(result.toFixed(7))}`;
    calculator.firstOperand = result;
  }

  calculator.waitingForSecondOperand = true;
  calculator.operator = nextOperator;
}

function calculate(firstOperand, secondOperand, operator) {
  switch (operator) {
    case 'add':
      return firstOperand + secondOperand;
    case 'subtract':
      return firstOperand - secondOperand;
    case 'multiply':
      return firstOperand * secondOperand;
    case 'divide':
      return firstOperand / secondOperand;
    default:
      return secondOperand;
  }
}

function resetCalculator() {
  calculator.displayValue = '0';
  calculator.firstOperand = null;
  calculator.waitingForSecondOperand = false;
  calculator.operator = null;
}
