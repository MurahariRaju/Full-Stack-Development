function stopButton(){
    document.getElementById("stopLight").style.backgroundColor="red";
    document.getElementById("readyLight").style.backgroundColor="#4b5069";
    document.getElementById("goLight").style.backgroundColor="#4b5069";

}
function readyButton(){
    document.getElementById("stopLight").style.backgroundColor="#4b5069";
    document.getElementById("readyLight").style.backgroundColor="#f7c948"; 
    document.getElementById("goLight").style.backgroundColor="#4b5069";  
}
function goButton(){
    document.getElementById("stopLight").style.backgroundColor="#4b5069";
    document.getElementById("readyLight").style.backgroundColor="#4b5069";
    document.getElementById("goLight").style.backgroundColor="green";

   
}