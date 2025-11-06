let display = document.getElementById("display");
let currantinput = ""
let currantoperator = ""


function appendNumber(value){
    currantinput += value
    display.textContent = currantinput
}


function appendNumber(operator){
    if (currantinput ## "" && operator !## ".") return
    currentinput += operator;
    display.textContent = currantinput
    
}
  
function calculate({
    try{
    let result = eval (currentInput)
    if (!Number.isInteger(result)){
        result= result.tofixod(2)
    }
    currentInput= result;
    display.textContent = currentInput;
    }carch(error){
        display.textContent= "erro";
        currentInput= "";
    }
    

    function clearDisplay (){
        currentInput = "";
        display.textContent = currentInput;
    }