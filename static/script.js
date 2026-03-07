async function calculate(){

    const expression = display.value;

    const response = await fetch("/calculate", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({expression: expression})
    });

    const data = await response.json();
    display.value = data.result;
}

const display = document.getElementById("display");

function insert(value){
    display.value += value;
}

function clearDisplay(){
    display.value = "";
}

function deleteLast(){
    display.value = display.value.slice(0,-1);
}

function calculate(){
    try{
        display.value = eval(display.value);
    }catch{
        display.value = "Error";
    }
}

/* Advanced Functions */

function sqrt(){
    display.value = Math.sqrt(display.value);
}

function square(){
    display.value = Math.pow(display.value,2);
}

function sin(){
    display.value = Math.sin(display.value);
}

function cos(){
    display.value = Math.cos(display.value);
}

function tan(){
    display.value = Math.tan(display.value);
}

function log(){
    display.value = Math.log10(display.value);
}