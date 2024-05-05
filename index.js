// Calculator Functions

const display = document.getElementById("display");

function appendToDisplay(input){ // Changes the appearance of the display
    display.value += input;
}

function clearDisplay(){ // Function for the clear button
    display.value = "";
}

function calculate(){ // Function for the calculators calculations
    try{
        display.value = eval(display.value);
    }
    catch(error){
        display.value = "Error";
    }
}
