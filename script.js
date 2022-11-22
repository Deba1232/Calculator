let calculatorScreenNumbers = document.querySelector('.numbers');
let calculatorButtons = document.querySelectorAll('button');

let clickCounter = 0;
let initial = '';

calculatorButtons.forEach( (button) => {
    button.addEventListener( 'click', (e) => {

        clickCounter++;
        
        if (clickCounter === 1){

            if (!e.target.textContent.match(/[0-9]/)) {
                initial = `0${e.target.textContent}`;
                calculatorScreenNumbers.textContent = initial;
            }

            else{
                initial = calculatorScreenNumbers.textContent.replace('0',e.target.textContent);
                calculatorScreenNumbers.textContent = initial;
            }
            
            
        }
        
        if (clickCounter > 1){
            calculatorScreenNumbers.textContent = initial + e.target.textContent;
            initial = calculatorScreenNumbers.textContent;
        }

    },false);

});