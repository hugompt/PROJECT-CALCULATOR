//Listen to keys pressed on the keyboard
window.addEventListener('keydown', writeScreen);

window.addEventListener()
//function to change colors of cells that are hovered
function changeBackColor(){
    $('.cell').hover( 
        function() {
            $(this)
            .css('color','blue')
            .animate({'color': 'red'}, 400);
        },
        function() {
            $(this)
            .animate({'color': 'blue'}, 400);
        }
    );
}

//Check if typed key is a number
//if it is, then write it on the calculator
//screen
function writeScreen(e){
    let aux1 = parseFloat(e.key);
    let screenValue = document.querySelector('.calcScreen');

    if(aux1 >=0 && aux1 <=9){
        console.log("You clicked on a number.");
        screenValue.textContent.trim() === "0" ? 
            screenValue.textContent = aux1 : screenValue.textContent += aux1;
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
  
    //Check if int
    // if (result % 1 === 0){
    //     console.log(result);
    // }
    return result
}