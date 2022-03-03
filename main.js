//Global variables
let varValue = '';
let varValue2 = '';
let firstNumber = true;
let clearOrNot = false;
let screenValue = document.querySelector('.calcScreen');
let operatorSymbol = '';

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
    console.log(e);
    let aux1;
    typeof(e) == 'string' ? aux1 = e : aux1 = e.key;
    aux1 == 'x' ? aux1 = '*' : aux1;
    aux1 == '÷'? aux1 = '/' : aux1;
    screenValue = document.querySelector('.calcScreen');
    if(aux1 >=0 && aux1 <=9){
        //console.log("You clicked on a number.");
        if (screenValue.textContent.trim() === "0"){
            screenValue.textContent = aux1;
            varValue = aux1;
        }else if (firstNumber == false && clearOrNot == true && operatorSymbol != ''){
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
        //console.log("You clicked on a , or .");
        screenValue.textContent += '.';
        firstNumber ? varValue += '.' : varValue2 += '.';
    
    //Checks if user clicked on a operator symbol;
    }else if(aux1 == '+' || aux1 == '-' || aux1 == '*' || aux1 == '/'){
        if(varValue != '' && varValue2 != '' && operatorSymbol != ''){
            screenValue.textContent = operate(varValue,varValue2, operatorSymbol);
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