function getUserInput(num){
    const display=document.getElementById("calcDisplay");
    display.value+=num;
}
function calculate(){
    const display=document.getElementById("calcDisplay");
    try{
        display.value=eval(display.value.replace(/\^/g,'**'));
    }catch(error){
        display.value="ERROR";
    }
}
function erase(){
    const display=document.getElementById("calcDisplay");
    display.value="";
}
function backspace(){
    const display=document.getElementById("calcDisplay");
    display.value=display.value.slice(0,-1);
}
document.addEventListener('keydown',function(event){
    if(document.activeElement.id==='calcDisplay') return;
    if(event.key=='Backspace') backspace();
    else if(event.key=='Enter') calculate();
    else if(event.key=='Escape') erase();
    else if('0123456789+-*/^()'.includes(event.key)) getUserInput(event.key);
});
