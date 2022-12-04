const expression = '4^2*3-3+8/4/(1+1*(1+6))'

let postfixExpr = [];
let operatorStack = [];

function infixToPostfixExpression(expression){

    let infixExpression = expression.split('');

    let precedenceOrder = {
        '(' : 10,
        '^' : 9,
        '/' : 8,
        '*' : 7,
        '+' : 6,
        '-' : 5,
    }
    
    infixExpression.forEach( (symbol) => {
        if(parseInt(symbol)){
            postfixExpr.push(symbol);
        }

        else{
            if (operatorStack.length != 0){

                let previousSymbol = operatorStack.pop();
    
                if(precedenceOrder[previousSymbol] > precedenceOrder[symbol]){
                    postfixExpr.push(previousSymbol);
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
        // console.log(operatorStack);
        
    } );

    while(operatorStack.length != 0){
        postfixExpr.push(operatorStack.pop());
    }

    let postfixExpression = postfixExpr.filter( (symbol) => {
        if (symbol === '(' || symbol === ')'){
            return;
        }
        else{
            return symbol;
        }
    } )

    console.log(`postfixExpr:${postfixExpression}\noperatorstack:${operatorStack}`);
}

infixToPostfixExpression('4^2*3-3+8/4/(1+1*(1^6*(1/6)))');