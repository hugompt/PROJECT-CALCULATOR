//Global variables
let varValue = '';
let varValue2 = '';
let firstNumber = true;
let clearOrNot = false;
let screenValue = document.querySelector('.calcScreen');
let operatorSymbol = '';

//Listen to keys pressed on the keyboard
window.addEventListener('keydown', writeScreen);

//Function to clear the calculator display and global varibles
document.getElementById("clear").addEventListener('click', function(){
    screenValue.textContent = 0;
    varValue = '';
    varValue2 = '';
    firstNumber = true;
    clearOrNot = false;
    operatorSymbol = '';
});

//Check if typed key is a number
//if it is, then write it on the calculator
//screen
function writeScreen(e){
    let aux1 = e.key;
    screenValue = document.querySelector('.calcScreen');
    console.log("keyCode = " + e.keyCode);
    console.log("aux1 = " + aux1);
    if(aux1 >=0 && aux1 <=9){
        //console.log("You clicked on a number.");
        if (screenValue.textContent.trim() === "0"){
            screenValue.textContent = aux1;
            varValue = aux1;
        }else if (firstNumber == false && clearOrNot == true){
            screenValue.textContent = aux1;
            clearOrNot = false;
            varValue2 = aux1;
        }else if(firstNumber == false && clearOrNot == false){
            screenValue.textContent += aux1;
            varValue2 +="" + aux1;
        }else{
            screenValue.textContent += aux1;
            varValue +="" + aux1;
        }
    
        //Still need to change the size of the font dynamically as string grows
    }else if(aux1 == ',' && screenValue.textContent.includes('.') == false ||
             aux1 == '.' && screenValue.textContent.includes('.') == 0){
        screenValue.textContent += '.';
    }else if(e.keyCode >= 106 && e.keyCode <= 109 || e.keyCode == 111){
        operatorSymbol = e.key;

        if (firstNumber = false){

            firstNumber = true;
        }else{
            firstNumber = false;
            clearOrNot = true
        }

        //////////////////
        //NEEDS CHECKING//
        //////////////////
        if(varValue != '' && varValue2 != ''){
            screenValue.textContent = operate(varValue,varValue2, operatorSymbol);
        }
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

//Add sumbers
function add (var1, var2){
    let numb1 = parseFloat(var1);
    let numb2 = parseFloat(var2);
    let result = numb1 + numb2;
    return result
}

//Subtract sumbers
function subtract (var1, var2){
    let numb1 = parseFloat(var1);
    let numb2 = parseFloat(var2);
    let result = numb1 - numb2;
    return result
}

//Multiply sumbers
function multiply (var1, var2){
    let numb1 = parseFloat(var1);
    let numb2 = parseFloat(var2);
    let result = numb1 * numb2;
    return result
}

//Divide sumbers
function divide (var1, var2){
    let numb1 = parseFloat(var1);
    let numb2 = parseFloat(var2);
    let result = numb1 / numb2;
    return result
}

//Main function to choose witch math function to use
function operate (var1,var2, operator){
    let result = 0;
    switch (operator){
        case "+": result = add(var1,var2);
        break;
        case "-": result = subtract(var1,var2);
        break;
        case "*": result = multiply(var1,var2);
        break;
        case "/": result = divide(var1, var2);
        break;
    }
}