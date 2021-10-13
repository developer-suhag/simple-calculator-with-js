const numberButtons = document.querySelectorAll("[data-number]");
const operationButton = document.querySelectorAll("[data-operation]");
const equlasButton = document.querySelector("[data-equals]");
const allClearButton = document.querySelector("[data-all-clear]");
const deleteButton = document.querySelector("[data-delete]");
const previousOperandText = document.querySelector("[data-previous-operand]");
const currentOperandText = document.querySelector("[data-current-operand]");

class Calculator {
  constructor(previousText, currentText) {
    this.previousText = previousText;
    this.currentText = currentText;
    this.clear();
  }

  clear() {
    this.current = "";
    this.previous = "";
    this.operation = undefined;
  }
  delete() {
    this.current = this.current.toString().slice(0, -1);
  }
  appendNumber(number) {
    if (number === "." && this.current.includes(".")) {
      return;
    }
    this.current = this.current.toString() + number.toString();
  }
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

  getDisplayNumber(number) {
    const stringNumber = number.toString();
    const integerDigits = parseFloat(stringNumber.split(".")[0]);
    const decimalDigits = stringNumber.split(".")[1];
    // const floatNumber = parseFloat(number);
    // if (isNaN(floatNumber)) {
    //   return "";
    // }
    // return floatNumber.toLocaleString("en");
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

numberButtons.forEach((button) => {
  button.addEventListener("click", () => {
    calculator.appendNumber(button.innerText);
    calculator.updateDisplay();
  });
});
operationButton.forEach((button) => {
  button.addEventListener("click", () => {
    calculator.chooseOperation(button.innerText);
    calculator.updateDisplay();
  });
});

equlasButton.addEventListener("click", () => {
  calculator.compute();
  calculator.updateDisplay();
});
allClearButton.addEventListener("click", () => {
  calculator.clear();
  calculator.updateDisplay();
});
deleteButton.addEventListener("click", () => {
  calculator.delete();
  calculator.updateDisplay();
});
