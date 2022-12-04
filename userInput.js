let userInputAndResult = document.querySelector('.user-input-and-result-line');
let operationLine = document.querySelector('.operation-line');

let numberButtons = document.querySelectorAll('.number');
let operatorButtons = document.querySelectorAll('.operator');

let clickCounter = 0;
let initial = '0';

numberButtons.forEach( (button) => {
    button.addEventListener( 'click', (e) => {
        // console.log(e.target.textContent);
        clickCounter++;
        
        if (clickCounter === 1){

            if (e.target.textContent.includes('.')) {
                initial = '0.';
                userInputAndResult.textContent = initial;
            }

            else{
                initial = userInputAndResult.textContent.replace('0',e.target.textContent);
                userInputAndResult.textContent = initial;
            }
            
            
        }
        
        if (clickCounter > 1){

            if (e.target.textContent.includes('.')) {
                initial = '0';
                userInputAndResult.textContent = initial;
            }

            userInputAndResult.textContent = initial + e.target.textContent;
            initial = userInputAndResult.textContent;
        }

    },false);

});

operatorButtons.forEach( (operatorButton) => {
    operatorButton.addEventListener('click', (e) => {
        console.log(initial);

        if (e.target.textContent === '('){

            if(initial === '0'){
                initial = '';
            }

            else{
                initial += '\u00d7';
            }
        }

        expression(initial, e.target.textContent);
        
        initial = '';

    });

});