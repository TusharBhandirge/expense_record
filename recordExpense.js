

var addButton = document.querySelector("#button-add");
var divOutput = document.querySelector("#div-output");
var divInput = document.querySelector("#input-id");
var count = 0;



function addClicked(){
    var input=divInput.value;
    const expense = parseInt(input,10);
    count = count+expense;
    divOutput.textContent = count;
}

addButton.addEventListener("click",addClicked);