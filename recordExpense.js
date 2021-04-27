

var addButton = document.querySelector("#button-add");
var divOutput = document.querySelector("#div-output");
var divInput = document.querySelector("#input-id");
var count = 0;



function addClicked(){
    var input=divInput.value;
    count = count+input;
    divOutput.innerHTML = count;
}

addButton.addEventListener("click",addClicked);