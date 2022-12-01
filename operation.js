let numberArray = [];   // contains the numbers
let inputArray = [];  // contains both numbers and operators

function operation(number,operator){

    // console.log(`${number}\n${operator}`);

    if (number !== ''){           //this condition prevents multiple operators being sent simultaneously

        numberArray.push(parseInt(number));
        console.log(`numbers:${numberArray}`);

        inputArray.push(number,operator);
        console.log(`inputArray:${inputArray}`);
    
        operationLine.textContent = `${inputArray.toString().replace(/,/g,' ')}`;

        if(numberArray.length > 1){

            if (operator == '\u00d7'){     // unicode no. for multiply sign
                let product = 1;

                for (i = 0;i<numberArray.length; i++){
                    product *= numberArray[i];
                }
    
                console.log(product);
            }
        }

    }


}