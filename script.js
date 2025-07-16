let display = 0;

display = document.getElementById("display");

function append(value){
    if(display.value === "ERROR"){
        display.value = "";
    }
    if(display.value === "undefined"){
        display.value = "";
    }
    display.value += value;
}
function clearDisplay(){
    display.value="";
}
function del(){
    if(display.value === "ERROR" || display.value === "undefined"){
        display.value = "";
    } else {
        display.value = display.value.slice(0, -1);
    }
}

function calculate(){
    try{
        display.value = eval(display.value);
    } catch(e) {
        display.value = "ERROR";
    }
}