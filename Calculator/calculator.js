const display = document.querySelector('#display');
const operators = document.querySelectorAll('.operator');
const numbers = document.querySelectorAll('.number');
const back = document.querySelector('.back');
const equal = document.querySelector('.equal');
const allClear = document.querySelector('.clear');
const history = document.querySelector('.history');

let input = '';
let calculationHistory = '';

numbers.forEach(num => {
    num.addEventListener('click', () =>  getValue(num.value));
});

operators.forEach(opp => {
    opp.addEventListener('click', () => getOperator(opp.value));
});

allClear.addEventListener('click', () => {
    allClearValue()
})

back.addEventListener('click', () => {
    backOneStep()
})

equal.addEventListener('click', () => {
    getEqual()
})

function backOneStep() {
    input = input.slice(0, -1);
    showNumber(input, display);
}
function allClearValue() {
    input = '';
    calculationHistory = '';
    showNumber(input, display);
    showNumber(input, history);
}
function getEqual() {
    let str = operatorConvertor(input); 
    let result = calculate(str);
    calculationHistory = `${input} = ${result}`;
    showNumber(calculationHistory, history);
    showNumber(result, display);
    input = result;
}

function getValue(num) {    
    if (num === ".") {
        // Get the current number (after the last operator)
        let currentNum = input.split(/[+\-×÷%]/).pop();

        // Don't allow another decimal point
        if (currentNum.includes(".")) return;

        // If decimal is first character, make it 0.
        if (currentNum === "") {
            input += "0";
        }
    }
    input += num;
    showNumber(input, display);
}
function getOperator(opp) {
    if (input === '') return;

    let lastChar = input[input.length - 1];

    if ('+−-×÷'.includes(lastChar)) {
        input = input.slice(0, -1);
    }

    input += opp;
    showNumber(input, display);
}

function showNumber(numStr, elem) {
    elem.value = numStr;

    elem.scrollLeft = elem.scrollWidth;
}

function operatorConvertor(expression) {
    let isLastCharOpe = expression[expression.length - 1];

    if ('+÷-×'.includes(isLastCharOpe)) {
        expression = expression.slice(0, -1);
    }
    // convert x and ÷ to * and /
    let newStr = '';
    for (let i = 0; i < expression.length; i++) {
        if (expression[i] == '×') {
            newStr = newStr + '*';
        } else if (expression[i] == '÷') {
            newStr = newStr + '/';
        } else {
            newStr += expression[i];
        }
    }
    let lastChar = newStr[newStr.length - 1];
    return /[+\-*/%]/.test(lastChar) ? newStr.slice(0, -1) : newStr;
}

function calculate(expression) {
    const nums = expression.split(/[+\-*%/]/).map(Number);
    const ops = expression.match(/[+\-*%/]/g) || [];

    if (ops.length < 1) return nums[0];

    for (let i = 0; i < ops.length; i++) {
        if (ops[i] === "*" || ops[i] === "/" || ops[i] === "%") {
            let result;
            switch (ops[i]) {
                case "*":
                    result = nums[i] * nums[i + 1];
                    break;
                case "/":
                    result = nums[i + 1] == 0 ? 'cannot divide by 0' : nums[i] / nums[i + 1];
                    break;
                case "%":
                    result = nums[i] % nums[i + 1];
            }
            nums.splice(i, 2, result);
            ops.splice(i, 1);
            i--;
        }
    }
    // for calculate left to right uncomment other lines and comment for loop on above
    let result = nums[0];
    for (let i = 0; i < ops.length; i++) {
        switch (ops[i]) {
            case "+":
                result += nums[i + 1];
                break;
            case "-":
                result -= nums[i + 1];
                break;
        }
    }
    return result;
}

document.addEventListener('keydown', (e) => {
    const key = e.key;
    if ('1234567890.'.includes(key)) {
        getValue(key);   
    }
    else if ('+-*/'.includes(key)) {
        if (key === '*') {
            getOperator('×');
        }
        else if (key === '/') {
            getOperator('÷');
        }
        else {
            getOperator(key);
        }
    }
    else if (key === 'Enter' || key === '=') {
        e.preventDefault();
        getEqual();
    }
    else if (key === 'Backspace') {
        backOneStep();
    }
    else if (key === 'Escape') {
        allClearValue();
    }
});
