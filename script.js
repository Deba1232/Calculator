let userInputAndResult = document.querySelector('.user-input-and-result-line');
let operationLine = document.querySelector('.operation-line');

let calculatorButtons = document.querySelectorAll('button');

let clickCounter = 0;
let initial = '';

calculatorButtons.forEach( (button) => {
    button.addEventListener( 'click', (e) => {
        console.log(e.target.textContent);
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

        if (!e.target.textContent.match(/[0-9.]/)){
            userInputAndResult.textContent = '';
            operationLine.textContent = initial;
        }

    },false);

});