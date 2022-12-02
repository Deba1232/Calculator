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

            if (!e.target.textContent.match(/[0-9]/)) {
                initial = `0${e.target.textContent}`;
                userInputAndResult.textContent = initial;
            }

            else{
                initial = userInputAndResult.textContent.replace('0',e.target.textContent);
                userInputAndResult.textContent = initial;
            }
            
            
        }
        
        if (clickCounter > 1){
            userInputAndResult.textContent = initial + e.target.textContent;
            initial = userInputAndResult.textContent;
        }

        

    },false);

});

operatorButtons.forEach( (operatorButton) => {
    operatorButton.addEventListener('click', (e) => {
        console.log(initial);
        
        // operationLine.textContent = `${initial} ${e.target.textContent}`;

        operation(initial, e.target.textContent);
        
        initial = '';

    });


});

// let equalButton = document.querySelector('.equals');
// equalButton.addEventListener( 'click', (evt) => {
//     // operationLine.textContent = `${initial} ${evt.target.textContent}`;

//     operation(initial, evt.target.textContent);
// });