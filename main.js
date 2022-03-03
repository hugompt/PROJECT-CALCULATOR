//Global variables
let varValue = '';
let varValue2 = '';
let firstNumber = true;
let clearOrNot = false;
let screenValue = document.querySelector('.calcScreen');
let hiddenScreen = document.querySelector('.hiddenCont');
let operatorSymbol = '';
let newSize = 50;
let history = document.querySelector('.history');
let negNum = false;

//Listen to keys pressed on the keyboard
window.addEventListener('keydown', writeScreen);

//Get all elements with the 'cell' class name.
let allCells = document.getElementsByClassName('cell');

for(let i = 0; i < allCells.length; i++){
    // Event handler for mouseclick and to simulate key pressed 
    allCells[i].addEventListener('click', function(e){  
        writeScreen(allCells[i].textContent.substring(allCells[i].length-7)); 
    });
}

//Function to clear the calculator display and global varibles
document.getElementById('clear').addEventListener('click', function(){
    screenValue.textContent = 0;
    varValue = '';
    varValue2 = '';
    firstNumber = true;
    clearOrNot = false;
    operatorSymbol = '';
    history.textContent = '';
    negNum = false;
});

//Function to change number to negative or back to positive
document.getElementById('posNeg').addEventListener('click', function(){
    negNum != true && (screenValue.textContent.includes('-') == false) ? screenValue.insertAdjacentText('afterBegin', '-') : screenValue.textContent = screenValue.textContent.slice(1,screenValue.textContent.length) ;
    negNum == true ? false : true;
});

//Check if typed key is a number
//if it is, then write it on the calculator
//screen
function writeScreen(e){
    let aux1;
    typeof(e) == 'string' ? aux1 = e : aux1 = e.key;
    aux1 == 'x' ? aux1 = '*' : aux1;
    aux1 == '÷'? aux1 = '/' : aux1;
    screenValue = document.querySelector('.calcScreen');
    if(aux1 >=0 && aux1 <=9){
        //console.log("You clicked on a number.");
        negNum == true && (screenValue.textContent.includes('-') == false) ? (aux1 = '-' + aux1) : null ;
        if (screenValue.textContent.trim() === "0"){
            screenValue.textContent = aux1;
            varValue = aux1;
        }else if (firstNumber == false && clearOrNot == true && operatorSymbol != ''){
            screenValue.textContent = aux1;
            clearOrNot = false;
            varValue2 = aux1;
        }else if(firstNumber == false && clearOrNot == false){
            screenValue.textContent += aux1;
            checkSize();
            varValue2 +="" + aux1;
        }else{
            screenValue.textContent += aux1;
            checkSize();
            varValue +="" + aux1;
        }
    
        //Still need to change the size of the font dynamically as string grows
    }else if(aux1 == ',' && screenValue.textContent.includes('.') == false ||
             aux1 == '.' && screenValue.textContent.includes('.') == 0){
        //console.log("You clicked on a , or .");
        screenValue.textContent += '.';
        checkSize();
        firstNumber ? varValue += '.' : varValue2 += '.';
    
    //Checks if user clicked on a operator symbol;
    }else if(aux1 == '+' || aux1 == '-' || aux1 == '*' || aux1 == '/'){
        if(varValue != '' && varValue2 != '' && operatorSymbol != ''){
            screenValue.textContent = operate(varValue,varValue2, operatorSymbol);
            checkSize();
        }
        operatorSymbol = aux1;
        if (firstNumber = false){

            firstNumber = true;
        }else{
            firstNumber = false;
            clearOrNot = true
        }
    }else if(aux1 == 'Enter' && varValue != '' && varValue2 != '' 
            && operatorSymbol != '' || aux1 == '=' && varValue != '' && varValue2 != '' && operatorSymbol != ''){
                screenValue.textContent = operate(varValue,varValue2, operatorSymbol);
                checkSize();
    }
}

//Add sumbers
function add (var1, var2){
    let numb1 = parseFloat(var1);
    let numb2 = parseFloat(var2);
    let result = numb1 + numb2;
    result % 1 != 0 ? result = result.toFixed(2) : result;
    return result;

}

//Subtract sumbers
function subtract (var1, var2){
    let numb1 = parseFloat(var1);
    let numb2 = parseFloat(var2);
    let result = numb1 - numb2;
    result % 1 != 0 ? result = result.toFixed(2) : result;
    return result
}

//Multiply sumbers
function multiply (var1, var2){
    let numb1 = parseFloat(var1);
    let numb2 = parseFloat(var2);
    let result = numb1 * numb2;
    result % 1 != 0 ? result = result.toFixed(2) : result;
    return result
}

//Divide sumbers
function divide (var1, var2){
    let numb1 = parseFloat(var1);
    let numb2 = parseFloat(var2);
    if(numb2 == 0){
        document.getElementById("clear").click();
        alert("You can't divide by 0!");
        return 0
    }
    let result = numb1 / numb2;
    result % 1 != 0 ? result = result.toFixed(2) : result;
    return result
}

//Main function to choose witch math function to use
function operate (var1,var2, operator){
    history.textContent += '('+var1 + operator + var2+')';
    let result = 0;
    switch (operator){
        case "+":
            result = add(var1,var2);
            varValue = result;
            varValue2 = '';
            operatorSymbol =''
            return result
        case "-":
            result = subtract(var1,var2);
            varValue = result;
            varValue2 = '';
            operatorSymbol =''
            return result
        case "*": 
            result =  multiply(var1,var2);
            varValue = result;
            varValue2 = '';
            operatorSymbol =''
            return result
        case "/": 
            result = divide(var1, var2);
            varValue = result;
            varValue2 = '';
            operatorSymbol =''
            return result
    }
}

function checkSize (){
    if (screenValue.textContent.length >= 10) {
    screenValue.textContent = Number(screenValue.textContent).toExponential(2);
    }else {
        //Check for Infinity OR NaN in Display
        screenValue.textContent = screenValue.textContent.includes('N') ? 'NaN' : 
        screenValue.textContent.includes('I') ? 'Infinity' : screenValue.textContent;
    }
}

//does not work......
// function resize_to_fit() {
//     var fontsize = $('.hiddenCont .calcScreen').css('font-size');
//     $('.hiddenCont .calcScreen').css('fontSize', parseFloat(fontsize) - 1);
  
//     if ($('.hiddenCont .calcScreen').width() >= $('.hiddenCont').width()) {
//       resize_to_fit();
//     }
//   }


//does not work as intended, code commented out...
// function resizeText(){   
//     if(screenValue.textContent.length > 6){
//         switch(newSize){
//             case 50:
//             case 44:
//             case 38:
//             case 32:
//                 newSize = ($('.calcScreen').css('font-size').substring(0,2)-6);
//                 $('.calcScreen').css('font-size', newSize);
//                 break;
//             case 26:
//             case 24:
//             case 22:
//             case 20:
//                 newSize = ($('.calcScreen').css('font-size').substring(0,2)-2);
//                 $('.calcScreen').css('font-size', newSize);

//         }
//         console.log(newSize);
//     }
// }