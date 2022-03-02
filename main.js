window.addEventListener('keydown', writeScreen);

function writeScreen(e){
    let aux1 = parseFloat(e.key);
    if(aux1 >=0 && aux1 <=9){
        console.log("You clicked on a number.");
    }
    
}

//Add sumbers
function add (var1, var2){
    let numb1 = parseFloat(var1);
    let numb2 = parseFloat(var2);
    let result = numb1 + numb2;
  
    //Check if int
    // if (result % 1 === 0){
    //     console.log(result);
    // }
    return result
}