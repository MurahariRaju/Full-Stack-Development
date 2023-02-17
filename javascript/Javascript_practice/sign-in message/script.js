let inputElement= document.getElementById("Username");
let signInTextElement = document.getElementById("signInText");
function signIn(){
    let inputValue = inputElement.value;
    let Text = "Hi "+ inputValue +", verifying your account...";
    signInTextElement.textContent = Text;
}