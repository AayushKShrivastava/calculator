const display = document.querySelector('.display');
const numbers = document.querySelectorAll('.div1 button');
let firstNum = operator = secondNum = '';
numbers.forEach((button) => {
    button.addEventListener('click', () => {
        if(button.textContent == '.'){
            if(operator == ''){
                if(!firstNum.includes('.')){
                    firstNum += button.textContent;
                    display.textContent += button.textContent;
                }   
            }
            else{
                if(!secondNum.includes('.')){
                    secondNum += button.textContent; 
                    display.textContent += button.textContent;
                }
            }
        }
        else{
            if(operator == ''){ 
                firstNum += button.textContent;
                display.textContent += button.textContent;
            }
            else{
                secondNum += button.textContent; 
                display.textContent += button.textContent;
            }
        }
    })
})       

const operators = document.querySelectorAll('.operators button');
operators.forEach((button) =>{
    button.addEventListener('click', () => {
        if(firstNum == ''){
            if(button.textContent == '+' || button.textContent == '-'){
                firstNum += button.textContent;
                display.textContent += button.textContent;
            }
        }
        else if(operator == ''){
            display.textContent += button.textContent;
            operator = button.textContent;
        }
        else if(secondNum != ''){
            if(operator == '/' && secondNum == '0'){
                alert('YOU ARE  NOT ALLOWED TO DIVIIDE A NUMBER BY "0"');
                display.textContent = display.textContent.slice(0,-1);
                secondNum = '';
            }
            else{
                firstNum = operate(firstNum, secondNum, operator);
                display.textContent = firstNum + button.textContent;
                operator = button.textContent;
                secondNum = '';
            }
        }
    })
})

const equals = document.querySelector('.equals');
equals.addEventListener('click', () => {
    if(firstNum != '' && secondNum != '' && operator != ''){
        if(operator == '/' && secondNum == '0'){
            alert('YOU ARE  NOT ALLOWED TO DIVIIDE A NUMBER BY "0"');
            display.textContent = display.textContent.slice(0,-1);
            secondNum = '';
        }
        else{
            display.textContent = operate(firstNum, secondNum, operator);
            firstNum = display.textContent;
            operator = secondNum = '';
        }
    }
})

const clear = document.querySelector('.clear');
clear.addEventListener('click', () => {
    display.textContent = firstNum = secondNum = operator = '';
})

const backspace = document.querySelector('.backspace');
backspace.addEventListener('click', () => {
    lastChar = display.textContent.slice(-1);
    display.textContent = display.textContent.slice(0,-1);
    if(lastChar == '+' || lastChar == '-' || lastChar == '*' || lastChar == '/')
        operator = '';
    else if(operator == '')
        firstNum = display.textContent;
    else{
        secondNum = secondNum.slice(0,-1);
    }
})




// functions
 function add(firstNum, secondNum){
     return Math.round((+firstNum + +secondNum)*100)/100;
 }
 
 function substract(firstNum, secondNum){
     return Math.round((firstNum - secondNum)*100)/100;
 }

 function multiply(firstNum, secondNum){
    return Math.round((firstNum * secondNum)*100)/100;
}

function divide(firstNum, secondNum){
    return Math.round((firstNum / secondNum)*100)/100;
}

function operate(firstNum, secondNum, operator){
    if(operator == '+') return add(firstNum, secondNum);
    else if(operator == '-') return substract(firstNum, secondNum);
    else if(operator == '*') return multiply(firstNum, secondNum);
    else if(operator == '/') return divide(firstNum, secondNum);
}

//adding keyboard support

window.addEventListener('keypress', (e) => {
    if((e.charCode >= 48 && e.charCode <= 57) || e.charCode == 46){
        if(e.key == "."){
            if(operator == ''){
                if(!firstNum.includes('.')){
                    firstNum += e.key;
                    display.textContent += e.key;
                }   
            }
            else{
                if(!secondNum.includes('.')){
                    secondNum += e.key; 
                    display.textContent += e.key;
                }
            }
        }
        else{
            if(operator == ''){ 
                firstNum += e.key;
                display.textContent += e.key;
            }
            else{
                secondNum += e.key; 
                display.textContent += e.key;
            }
        }
    }
    else if(e.key == '+' || e.key == '-' || e.key == '*' || e.key == '/'){
        if(firstNum == ''){
            if(e.key == '+' || e.key == '-'){
                firstNum += e.key;
                display.textContent += e.key;
            }
        }
        else if(operator == ''){
            display.textContent += e.key;
            operator = e.key;
        }
        else if(secondNum != ''){
            if(operator == '/' && secondNum == '0'){
                alert('YOU ARE  NOT ALLOWED TO DIVIIDE A NUMBER BY "0"');
                display.textContent = display.textContent.slice(0,-1);
                secondNum = '';
            }
            else{
                firstNum = operate(firstNum, secondNum, operator);
                display.textContent = firstNum + e.key;
                operator = e.key;
                secondNum = '';
            }
        }
    }
    else if(e.key == '=' || e.key == 'Enter'){
        if(firstNum != '' && secondNum != '' && operator != ''){
            if(operator == '/' && secondNum == '0'){
                alert('YOU ARE  NOT ALLOWED TO DIVIIDE A NUMBER BY "0"');
                display.textContent = display.textContent.slice(0,-1);
                secondNum = '';
            }
            else{
                display.textContent = operate(firstNum, secondNum, operator);
                firstNum = display.textContent;
                operator = secondNum = '';
            }
        }
    }
});

window.addEventListener('keydown', (e) => {
    if(e.keyCode == 8){
        lastChar = display.textContent.slice(-1);
        display.textContent = display.textContent.slice(0,-1);
        if(lastChar == '+' || lastChar == '-' || lastChar == '*' || lastChar == '/')
            operator = '';
        else if(operator == '')
            firstNum = display.textContent;
        else
            secondNum = secondNum.slice(0,-1);
    }
    else if(e.keyCode == 46){
        display.textContent = firstNum = secondNum = operator = '';
    }
})
