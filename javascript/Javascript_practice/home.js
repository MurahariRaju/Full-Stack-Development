function switchOff(){
    // document.getElementById("bulbImage").src=""
    // document.getElementById("cat-Image").src=""
    document.getElementById("switchStatus").textContent="Switched OFF";
    document.getElementById("OnButton").style.background="#cbd2d9";
    document.getElementById("OffButton").style.background="red";
    

}

function switchOn(){
    // document.getElementById("bulbImage").src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/bulb-go-on-img.pn";
    // document.getElementById("cat-Image").src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/cat-img.png";
    document.getElementById("switchStatus").textContent="Switched ON";
    document.getElementById("OnButton").style.background="green";
    document.getElementById("OffButton").style.background="#cbd2d9";
    
    

}