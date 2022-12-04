// const expr = '4^2*3-3+8/4/(1+1*(1+6))';

function infixToPostfixExpression (expression){

    let infixExpressionArray = expression.split('');
    
    let postfixExpression = [];
    let stack = [];

    let precedenceOrder = {
        ')' : 11,
        '^' : 10,
        '*' : 9,
        '/' : 8,
        '-' : 7,
        '+' : 6,
        '(' : 1,
    };

    infixExpressionArray.forEach( (symbol) => {

        if (Number.isInteger(parseInt(symbol)) === true){
            postfixExpression.push(symbol);
        }

        else{

            if(stack.length !== 0){

                if (symbol === ')'){
                    
                    let temp;

                    while(temp !== '('){
                        temp = stack.pop();
                        if (temp !== '('){

                            postfixExpression.push(temp);
                        }
                    }
                    return;

                }


                let lastSymbol = stack.pop();

                if (precedenceOrder[lastSymbol] > precedenceOrder[symbol]){
                    postfixExpression.push(lastSymbol);
                    stack.push(symbol);

                }

                else{
                    stack.push(lastSymbol,symbol);
                }
            }

            else{

                stack.push(symbol);
            }
        }
    });

    while(stack.length > 0){

        postfixExpression.push(stack.pop());
    }

    console.log(`postfixExpression:${postfixExpression}\noperatorStack:${stack}`);
    return postfixExpression;

}


function operate(num1, num2, symbol) {
    if (symbol === '^') {
        return num1 ** num2;
    }

    if (symbol === '*') {
        return num1 * num2;
    }

    if (symbol === '/') {
        return num1 / num2;
    }

    if (symbol === '+') {
        return num1 + num2;
    }

    if (symbol === '-') {
        return num1 - num2;
    }
}

function evaluate(infixExpression) {

    const postfixExpression = infixToPostfixExpression(infixExpression);
    let stack = [];

    postfixExpression.forEach( (symbol) => {

        if(Number.isInteger(parseInt(symbol))){
            stack.push(symbol);
        }

        else{

            let num2 = parseInt(stack.pop());   // num2 is written first as pop happens in LIFO order in stack.
            let num1 = parseInt(stack.pop());

            result = operate(num1,num2,symbol);

            stack.push(result.toString());
    

        }

        console.log(stack);

    });

    return stack;

}



// console.log(evaluate(expression));