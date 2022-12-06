const expression = '4^2*3-3+8/4/(1+1*(1+6))'

let postfixExpression = [];
let operatorStack = [];

function infixToPostfixExpression(expression){

    let infixExpression = expression.split('');

    let precedenceOrder = {
        '(' : 8,
        '^' : 7,
        '/' : 6,
        '*' : 6,
        '+' : 5,
        '-' : 5,
    }
    
    infixExpression.forEach( (symbol) => {
        if(parseInt(symbol)){
            postfixExpression.push(symbol);
        }

        else{
            if (operatorStack.length != 0){

                if(symbol === ')'){
                    let temp = operatorStack.pop();
                    operatorStack.push(temp);
                    while(temp !== '('){
                        temp = operatorStack.pop();
                        postfixExpression.push(temp);
                    }
                    postfixExpression.pop();
                    return;
                }


                let previousSymbol = operatorStack.pop();

                if(previousSymbol === '('){
                    operatorStack.push(previousSymbol,symbol);
                    return;
                }
    
                if(precedenceOrder[previousSymbol] >= precedenceOrder[symbol]){
                    postfixExpression.push(previousSymbol);
                    operatorStack.push(symbol);
                }
                else{
                    operatorStack.push(previousSymbol,symbol);
                }
            }

            else{
                operatorStack.push(symbol);
            }
        }
        console.log(operatorStack);
        
    } );

    while(operatorStack.length != 0){
        postfixExpression.push(operatorStack.pop());
    }

    console.log(`postfixExpression:${postfixExpression}\noperatorstack:${operatorStack}`);
}

infixToPostfixExpression('4^2*3-3+8/4/(1+1*(1+6^(1/6)))');