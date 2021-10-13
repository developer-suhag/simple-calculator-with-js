/* document.getElementById('restult-operator').addEventListener('click', function name() {
    // get output value 
    const outputField = document.getElementById('output-field');
    const outputText = outputField.value;
    const convertOutputValue = parseFloat(outputText);


    // get numbers
    const numbers = document.querySelectorAll('.number');
    for (const number of numbers) {
        const numberValue = number.innerText;
        const converNumber = parseFloat(numberValue)

        //set number in output
        number.addEventListener('click', function (event) {
            console.log('hee');
        })
    }
}); */

/* const allButtons = document.querySelectorAll('button')
for (const button of allButtons) {
    button.addEventListener('click', function (event) {
        const buttonValue = button.innerText;
        // debugger;
        if (buttonValue == '=') {
            console.log('====');
        } else if (buttonValue == '+') {
            console.log('+++');
        } else if (buttonValue == '-') {
            console.log('---');
        } else if (buttonValue == '*') {
            console.log('***');
        } else if (buttonValue == '/') {
            console.log('///');
        } else if (buttonValue == 'AC') {
            console.log('ac');
        } else {
            const converNumber = parseFloat(buttonValue)
            console.log(converNumber);
        }

    })
}; */

function calculator() {




    const allButtons = document.querySelectorAll('button')
    for (const button of allButtons) {
        button.addEventListener('click', function () {
            const buttonValue = button.innerText;
            // debugger;

            const inputNumbers = document.querySelectorAll('.number');
            for (const number of numbers) {

            }

            function numbers() {
                if (buttonValue == '=') {
                    console.log('====');
                } else if (buttonValue == '+') {
                    console.log('+++');
                } else if (buttonValue == '-') {
                    console.log('---');
                } else if (buttonValue == '*') {
                    console.log('***');
                } else if (buttonValue == '/') {
                    console.log('///');
                } else if (buttonValue == 'AC') {
                    console.log('ac');
                } else {
                    const converNumber = parseFloat(buttonValue)
                    // console.log(converNumber);
                    return converNumber
                }
                // return converNumber;
            }

            // get output
            const outputField = document.getElementById('output-field');
            const outputText = outputField.value;
            const convertOutputValue = parseFloat(outputText);
            const inputValue = numbers();
            // const updateOutput = convertOutputValue + inputValue;

            const numberClicked = parseFloat(outputField.value += inputValue + ' ' + ' + ' + ' ' + inputValue)
            console.log(numberClicked);
            // debugger;
            if (buttonValue == '+') {
                addition(numberClicked, numberClicked)
            }

            function addition(num1, num2) {
                const result = num1 + num2;
                return result;
            }

        })
    };
}

calculator()