

var addButton = document.querySelector("#button-add");
var divOutput = document.querySelector("#div-output");
var inputAmount = document.querySelector("#input-id-amount");
var inputDesc = document.querySelector("#input-id-desc");
var expenseEle = document.querySelector('#id-Expense-table');
const allExpenses = [];
var count = 0;



function addClicked(){

    var expenseObj = {};
    var amount=inputAmount.value;
    var desc = inputDesc.value;

    expenseObj.amount = amount;
    expenseObj.desc = desc;
    expenseObj.moment = new Date();

    allExpenses.push(expenseObj);
    console.clear();
    console.table(allExpenses);

    const expense = parseInt(amount,10);
    count = count+expense;
    divOutput.textContent = count;

    const expenseEleArr = allExpenses.map((item)=>getListElement(item));

    const expenseEleHtmlStr = expenseEleArr.join("");


    expenseEle.innerHTML = expenseEleHtmlStr;

}

addButton.addEventListener("click",addClicked);

//view Elements

//add list element
function getListElement({amount,desc,moment}){

    return `
        <li class="list-group-item d-flex justify-content-between">
        <div class="d-flex flex-column">
            ${desc}
            <small class="text-muted">${getDateElement(moment)}</small>
        </div>
        <div>
            <span class="px-5">
            ${amount}
            </span>
            <button 
            onclick='deleteItem(${moment.valueOf()})'
            type="button" class="btn btn-outline-danger btn-sm">
                <i class="fas fa-trash-alt"></i>
            </button>
        </div>
        </li>
        
        `;

};


function renderList(arrayList){


    
}




//delete elment 

function deleteItem(dateValue){

    var newArray=[];
    console.log("delete item clicked");
    for(var i = 0; i<allExpenses.length; i++){
        if(allExpenses[i].moment.valueOf() !== dateValue){
            newArray.push(allExpenses[i]);
        }
    }

    const expenseEleArr = newArray.map((item)=>getListElement(item));

    const expenseEleHtmlStr = expenseEleArr.join("");


    expenseEle.innerHTML = expenseEleHtmlStr;
    

}


//controler element
function getDateElement(moment){

    return moment.toLocaleDateString('en-US',{
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    });
}



