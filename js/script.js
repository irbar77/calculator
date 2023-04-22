console.log('hello from js');

let number = ''; //текущее число, которое мы вводим кнопками
let num1 = null; //переменная, которая сохранит значение number после нажатия *, /, +, -
let b = []; //массив всех кнопок с цифрами и точкой
let operator; //это будет математический оператор

//получаем кнопки 0-9 и точку, это класс .b1 и тд (сохраним в элементы массива b)

for (let i = 0; i < 11; i++) {
    b[i] = document.querySelector(`.b${i}`);
}

// в массив operators записываем  кнопки с математическими операторами

let operators = document.getElementsByClassName('operator');

// делаем кнопку очищения экрана

function cleanAll() {
    document.querySelector('.clean').onclick = () => {
        document.querySelector('.output').innerHTML = '0';
        number = '';
        num1 = '';
    }
}
cleanAll();

//собираем число при нажатии кнопок с цифрами

function clickDigit() {
    for (let i = 0; i < 11; i++) {
        b[i].onclick = () => {
            if (b[i].innerHTML.includes('.') && number.includes('.')) {
                console.log('error');
            } else {
                number += b[i].innerHTML;
                console.log(number);
                document.querySelector('.output').innerHTML = +number;
            }
        }
    }
}

clickDigit();

console.log('до нажатия кнопки оператора значение num1 = ', num1);

function asignOperator() {
    for (let i = 0; i < operators.length; i++) {

        operators[i].onclick = () => {
            if (operators[i].innerHTML === '-' && number === '') {
                number = '-';
            } else {
                switch (operators[i].innerHTML) {
                    case '*':
                        console.log(number, '*');
                        operator = '*';
                        break;
                    case '/':
                        console.log(number, '/');
                        operator = '/';
                        break;
                    case '+':
                        console.log(number, '+');
                        operator = '+';
                        break;
                    case '-':
                        console.log(number, '-');
                        operator = '-';
                        break;
                }
                num1 = +number;
                number = '';
            }
        }
    }
}
asignOperator()

function calculate() {
    document.querySelector('.equal').onclick = () => {
        number = +number;
        let result;
        switch (operator) {
            case '*':
                result = num1 * number;
                break;
            case '/':
                result = num1 / number;
                break;
            case '+':
                result = num1 + number;
                break;
            case '-':
                result = num1 - number;
                break;

        }
        console.log(result);
        document.querySelector('.output').innerHTML = result;
        number = result;
    }

}
calculate();