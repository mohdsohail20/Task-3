let display = document.getElementById('display');
let buttons = document.querySelectorAll('.button-grid button');

let operand1 = '';
let operand2 = '';
let operator = '';

buttons.forEach(button => {
    button.addEventListener('click', () => {
        let buttonText = button.textContent;

        if (buttonText === 'C') {
            display.value = '';
            operand1 = '';
            operand2 = '';
            operator = '';
        } else if (buttonText === '=' && operand1 !== '' && operand2 !== '' && operator !== '') {
            let result = calculate(operand1, operand2, operator);
            display.value = result;
            operand1 = result;
            operand2 = '';
            operator = '';
        } else if (buttonText === '+' || buttonText === '-' || buttonText === '*' || buttonText === '/') {
            operator = buttonText;
            operand1 = display.value;
            display.value = '';
        } else if (buttonText === '.') {
            if (!display.value.includes('.')) {
                display.value += buttonText;
            }
        } else {
            display.value += buttonText;
        }
    });
});

function calculate(operand1, operand2, operator) {
    let result = 0;

    switch (operator) {
        case '+':
            result = parseFloat(operand1) + parseFloat(operand2);
            break;
        case '-':
            result = parseFloat(operand1) - parseFloat(operand2);
            break;
        case '*':
            result = parseFloat(operand1) * parseFloat(operand2);
            break;
        case '/':
            result = parseFloat(operand1) / parseFloat(operand2);
            break;
    }

    return result;
}