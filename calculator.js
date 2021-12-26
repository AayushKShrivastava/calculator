// functions
 function add(firstNum, SecondNum){
     return firstNum + SecondNum;
 }
 
 function substract(firstNum, SecondNum){
     return firstNum - SecondNum;
 }

 function multiply(firstNum, SecondNum){
    return firstNum * SecondNum;
}

function divide(firstNum, SecondNum){
    return firstNum / SecondNum;
}

function operate(firstNum, SecondNum, operator){
    if(operator == '+') return add(firstNum, SecondNum);
    else if(operator == '-') return substract(firstNum, SecondNum);
    else if(operator == '*') return multiply(firstNum, SecondNum);
    else if(operator == '/') return divide(firstNum, SecondNum);
}
