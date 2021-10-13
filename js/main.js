/* const numbers = document.querySelectorAll('.number');
for (const number of numbers) {
    number.addEventListener('click', function (event) {
        const convert = parseFloat(number.value);
        const previousOperand = document.getElementById('previous-operand');
        const currentOperand = document.getElementById('current-operand');

        const converPre = parseFloat(previousOperand.innerText);
        const convetCurrent = parseFloat(currentOperand.innerText)

        if (typeof convert == 'number') {
            console.log(convert);
        } else if (event.target.value == '+') {
            // addtion()
            console.log('he');
        }

    })
}; */

/* const oparetors = document.querySelectorAll('.operator');
for (const oparetor of oparetors) {
    oparetor.addEventListener('click', function (event) {
        // const convert = parseFloat(oparetor.value);
        // console.log(convert);
    })
}; */

const buttons = document.querySelectorAll('button');
for (const button of buttons) {
    button.addEventListener('click', function (event) {
        const buttonValue = button.value;
        const convert = parseFloat(buttonValue);
        const previousOperand = document.getElementById('previous-operand');
        const currentOperand = document.getElementById('current-operand');
        const converPre = parseFloat(previousOperand.innerText);
        const convetCurrent = parseFloat(currentOperand.innerText);

        if (typeof convert == 'number') {

            const convert = parseFloat(buttonValue);
            let valuess = parseFloat(currentOperand.innerText += convert)
            // console.log(valuess);
            if (buttonValue == '+') {
                debugger
                const add = addtion(valuess, convert)
                currentOperand.innerText = add;
            }
        } else if (buttonValue == '+') {
            console.log('he');
        } else if (buttonValue == '-') {
            console.log('minus');
        } else if (buttonValue == '*') {
            console.log('gon');
        } else if (buttonValue == '/') {
            console.log('bag');
        } else if (buttonValue == '=') {
            console.log('equal');
        } else if (buttonValue == 'clear') {
            console.log('clear');
        } else if (buttonValue == 'back-space') {
            console.log('back-space');
        }



    })
};

function addtion(num1, num2) {
    const result = num1 + num2;
    return result;
}

function subtraction(num1, num2) {
    const result = num1 - num2;
    return result;
}

function multiply(num1, num2) {
    const result = num1 * num2;
    return result;
}

function division(num1, num2) {
    const result = num1 / num2;
    return result;
}