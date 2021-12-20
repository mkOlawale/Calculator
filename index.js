let display = document.querySelector('.display');
var controlButtton = document.querySelector('.controls').children;
// const controlButtton = document.getElementById('control').children;

let allsymbols = ['+', '-', '=', 'x', 'c', '%', '/'];
let firstValue = '';
let secondValue = ''; 
let symbol = '';
let result = '';
let index = -1;

const calculate = () => {
    firstValue = parseFloat(firstValue);
    secondValue = parseFloat(secondValue);

    if(symbol === '+') result = firstValue + secondValue;
    if(symbol === '-') result = firstValue - secondValue;
    if(symbol === 'x') result = firstValue * secondValue;
    if(symbol === '/') result = firstValue / secondValue;
    if(symbol === '%') result = firstValue % secondValue;

    display.innerText = result;
    firstValue = result;
    secondValue = ''
}
// function reverseNumberFormat(num){
//     return Number(num.replace(/,/g,''));
// };
// if(this.id=="backspace"){
//     var output = reverseNumberFormat(getOutput()).toString();
//     if(output){
//         output = output.substr(0,output.length-1);
//         PrintOutput(output)
//     }
// }
for (let button of controlButtton){
        button.addEventListener('click', () => {
            const {innerText : btnVal } = button;
            const btnSymbol = allsymbols.includes(btnVal);

            if(btnVal === 'C'){
                firstValue = '';
                secondValue = '';
                symbol = '';
               return display.innerText = ''
            }
            if(btnVal === 'CE'){
               
               return firstValue = secondValue = index;
            }
            if (!secondValue && btnVal === '=') return null; 
            if(firstValue && btnSymbol){
                secondValue && calculate();
                symbol = btnVal
            }
            else if(!symbol) firstValue += btnVal;
            else if(symbol) secondValue += btnVal;
            if(btnVal !== '=') display.innerText += btnVal;
    })
}

// Tutorial 
let hello = ['hello', 'how', 'are', 'you'];
let magic = hello.length -1;
console.log(hello, 'this is the second', magic)