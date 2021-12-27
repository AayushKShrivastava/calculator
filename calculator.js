const display = document.querySelector('.display');
const decimal = document.getElementById('decimal');
const numbers = document.querySelectorAll('.div1 button');
let firstNum = operator = secondNum = '';
numbers.forEach((button) => {
    button.addEventListener('click', () => {
        if(button.textContent == '.'){
            if(operator == ''){
                if(!firstNum.includes('.')){
                    console.log(firstNum);
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
            firstNum += button.textContent;
            display.textContent += button.textContent;
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

/*if(button.textContent == '='){
            if(firstNum != '' && secondNum != ''){
                if(operator == '/' && secondNum == 0){
                    alert('YOU ARE  NOT ALLOWED TO DIVIIDE A NUMBER BY "0"');
                    secondNum = '';
                    console.log(secondNum);
                    display.textContent = `${display.textContent.slice(0,-1)}`;
                }
                else{
                    display.textContent = '';
                    console.log(firstNum,secondNum);
                    display.textContent = `${Math.round(operate(firstNum, secondNum, operator)*100)/100}`;
                    firstNum = `${display.textContent}`;
                    secondNum = operator = '';
                }
            }
        }
        else if(button.classList.contains('backSpace')){
            display.textContent = `${display.textContent.slice(0,-1)}`;
            if(operator == ''){
                firstNum = `${display.textContent}`;
            }
            else{
                secondNum = `${secondNum.slice(0,-1)}`;
            }
        }
        else if(button.textContent == 'AC'){
            display.textContent = '';
            firstNum = secondNum = operator = '';
        }
        else if(button.textContent == '+' || button.textContent == '-' || button.textContent == '*' || button.textContent == '/'){
            if(firstNum == '' && (button.textContent == '+' || button.textContent == '-')){
                firstNum = `${button.textContent}`;
                display.textContent += `${button.textContent}`;
            }
            else if(firstNum != ''){
                operator += `${button.textContent}`;
                display.textContent += `${button.textContent}`;
            }
        }
        else{
            if(operator == ''){
                display.textContent += `${button.textContent}`;
                firstNum += `${display.textContent}`;
            }
            else{
                display.textContent += `${button.textContent}`;
                secondNum += `${button.textContent}`;
                console.log(secondNum);
            }
        }
    })
})*/
