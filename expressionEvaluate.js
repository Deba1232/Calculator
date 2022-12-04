const expression = '4^2*3-3+8/4/(1+1*(1+6))'

let postfixExpression = [];
let operatorStack = [];

function infixToPostfixExpression(expression){

    let infixExpression = expression.split('');

    let precedenceOrder = {
        '^' : 10,
        '/' : 9,
        '*' : 8,
        '+' : 7,
        '-' : 6,
    }
    
    infixExpression.forEach( (symbol) => {
        if(parseInt(symbol)){
            postfixExpression.push(symbol);
        }

        else{
            let previousSymbol = operatorStack.pop();

            if(precedenceOrder[previousSymbol] > precedenceOrder[symbol]){
                postfixExpression.push(previousSymbol);
            }
            else{
                operatorStack.push(symbol);
            }
        }
        console.log(operatorStack);
        
    } );

    console.log(`postfixExpr:${postfixExpression}\noperatorstack:${operatorStack}`);
}

infixToPostfixExpression('4^2*3-3+8');