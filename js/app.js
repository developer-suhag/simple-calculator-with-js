// get all elements
const numberButtons = document.querySelectorAll("[data-number]");
const operationButton = document.querySelectorAll("[data-operation]");
const equlasButton = document.querySelector("[data-equals]");
const allClearButton = document.querySelector("[data-all-clear]");
const deleteButton = document.querySelector("[data-delete]");
const previousOperandText = document.querySelector("[data-previous-operand]");
const currentOperandText = document.querySelector("[data-current-operand]");

// Calculator class
class Calculator {
  constructor(previousText, currentText) {
    this.previousText = previousText;
    this.currentText = currentText;
    this.clear();
  }
  // clear the calculator
  clear() {
    this.current = "";
    this.previous = "";
    this.operation = undefined;
  }
  // delete number one by one
  delete() {
    this.current = this.current.toString().slice(0, -1);
  }
  // append number
  appendNumber(number) {
    if (number === "." && this.current.includes(".")) {
      return;
    }
    this.current = this.current.toString() + number.toString();
  }

  // select operator
  chooseOperation(operation) {
    if (this.currentText === "") {
      return;
    }
    if (this.previousText !== "") {
      this.compute();
    }
    this.operation = operation;
    this.previous = this.current;
    this.current = "";
  }
  // compute
  compute() {
    let computation;
    const prev = parseFloat(this.previous);
    const curnt = parseFloat(this.current);
    if (isNaN(prev) || isNaN(curnt)) {
      return;
    }
    switch (this.operation) {
      case "+":
        computation = prev + curnt;
        break;
      case "-":
        computation = prev - curnt;
        break;
      case "*":
        computation = prev * curnt;
        break;
      case "/":
        computation = prev / curnt;
        break;
      default:
        return;
    }
    this.current = computation;
    this.previous = "";
    this.operation = undefined;
  }
  // get display number
  getDisplayNumber(number) {
    const stringNumber = number.toString();
    const integerDigits = parseFloat(stringNumber.split(".")[0]);
    const decimalDigits = stringNumber.split(".")[1];
    let integerDispaly;
    if (isNaN(integerDigits)) {
      integerDispaly = "";
    } else {
      integerDispaly = integerDigits.toLocaleString("en", {
        maximumFractionDigits: 0,
      });
    }
    if (decimalDigits != null) {
      return `${integerDispaly}.${decimalDigits}`;
    } else {
      return integerDispaly;
    }
  }
  // update display
  updateDisplay() {
    this.currentText.innerText = this.getDisplayNumber(this.current);
    if (this.operation != null) {
      this.previousText.innerText = `${this.getDisplayNumber(this.previous)} ${
        this.operation
      }`;
    } else {
      this.previousText.innerText = "";
    }
  }
}

const calculator = new Calculator(previousOperandText, currentOperandText);
// number buttons
numberButtons.forEach((button) => {
  button.addEventListener("click", () => {
    calculator.appendNumber(button.innerText);
    calculator.updateDisplay();
  });
});

// operator button
operationButton.forEach((button) => {
  button.addEventListener("click", () => {
    calculator.chooseOperation(button.innerText);
    calculator.updateDisplay();
  });
});

// equal button
equlasButton.addEventListener("click", () => {
  calculator.compute();
  calculator.updateDisplay();
});

// all clear button
allClearButton.addEventListener("click", () => {
  calculator.clear();
  calculator.updateDisplay();
});

// delete button

deleteButton.addEventListener("click", () => {
  calculator.delete();
  calculator.updateDisplay();
});
