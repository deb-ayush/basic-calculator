const display = document.getElementById("display");

function appendToDisplay(input){
    display.value += input;
}

function clearDisplay(){
    display.value = "";
}

function calculate(){
    try{
        display.value = eval(display.value);
    }
    catch(error){
        display.value = "Error";
    }
}

document.addEventListener('keydown', function(event) {
    const key = event.key;
    if (isFinite(key) || key === '.') {
        appendToDisplay(key);
    } else if (key === '/' || key === '*' || key === '-' || key === '+') {
        appendToDisplay(key);
    } else if (key === 'Enter') {
        calculate();
    } else if (key === 'Backspace') {
        display.value = display.value.slice(0, -1);
    } else if (key.toLowerCase() === 'c' || key === 'Escape') {
        clearDisplay();
    }
})