//Global variables
let varValue = '';
let screenValue = document.querySelector('.calcScreen');

//Listen to keys pressed on the keyboard
window.addEventListener('keydown', writeScreen);

//Function to clear the calculator display and global varibles
document.getElementById("clear").addEventListener('click', function(){
    screenValue.textContent = 0;
    varValue = '';

});

//Check if typed key is a number
//if it is, then write it on the calculator
//screen
function writeScreen(e){
    let aux1 = parseFloat(e.key);
    screenValue = document.querySelector('.calcScreen');
    if(aux1 >=0 && aux1 <=9){
        console.log("You clicked on a number.");
        screenValue.textContent.trim() === "0" ? screenValue.textContent = aux1 : screenValue.textContent += aux1;
        varValue += "" + aux1;
        console.log(varValue);
        console.log(typeof(varValue));
            //Still need to change the size of the font dinnamically as string grows
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