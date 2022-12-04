let numberArray = [];   // contains the numbers
let inputArray = [];  // contains both numbers and operators
let infixExpression = '';

function expression(number,operator){

    if (operator === ')'){
        if(inputArray.includes('(')){
            numberArray.push(parseInt(number));
            console.log(`numbers:${numberArray}`);

            inputArray.push(number, operator);
            infixExpression = inputArray.toString().replace(/,/g, '');
            console.log(`expression:${infixExpression}`);

            operationLine.textContent = `${infixExpression}`;
        }
    }

    if(operator === '='){
        evaluate(infixExpression);
    }

    else{

        numberArray.push(parseInt(number));
        console.log(`numbers:${numberArray}`);
    
        inputArray.push(number, operator);
        infixExpression = inputArray.toString().replace(/,/g, '');
        console.log(`expression:${infixExpression}`);
    
        operationLine.textContent = `${infixExpression}`;
    }


}