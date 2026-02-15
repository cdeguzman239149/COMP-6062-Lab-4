//Variable declaration
const characterSel = document.getElementById("characterSelection"); //To save the character selected
const textInput =  document.getElementById("inputText"); //To check if the the enter button will be pressed

//Functions
function showHidden(){
    if (characterSel.value == "kylo"){ //selected choice by user will show a hidden option
        document.getElementById("secretBox").removeAttribute("hidden");    //Unhides the checkbox by removing the hidden attribute
    }
    else{ //any other choice will hide the option
        document.getElementById("secretBox").setAttribute("hidden", "");   //Hides the checkbox by applying the hidden attribute again
        document.getElementById("hiddenBox").checked = false;              //Unchecks the box when it is hidden
    }
}

function showAlert(event){ //event is needed as a parameter to see if 
      if (event.key == "Enter"){ //Keypress was an enter key
        alert("You have confirmed your selection by pressing the enter key"); //Show an alert to the user
      }
}

//Event Handler for form
characterSel.addEventListener("change", showHidden); //Whenever there is a value change in the form, the function will be called
textInput.addEventListener("keydown", showAlert);    //Whenever there is a key press in the text box, the function will be called