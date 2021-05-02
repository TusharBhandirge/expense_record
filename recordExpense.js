

var addButton = document.querySelector("#button-add");
var divOutput = document.querySelector("#div-output");
var inputAmount = document.querySelector("#input-id-amount");
var inputDesc = document.querySelector("#input-id-desc");
var expenseEle = document.querySelector('#id-Expense-table');
var allExpenses = [];
var count = 0;



function addClicked(){

    var expenseObj = {};
    var amount=inputAmount.value;
    var desc = inputDesc.value;

    

    
    //console.clear();
    //console.table(allExpenses);

    
    if(isNaN(amount) || amount===""){
        console.log("in if");
        alert("kindly put numeric values in amount field");
    }else{
        console.log("inside else");
        const expense = parseInt(amount,10);
        count = count+expense;

        expenseObj.amount = amount;
        expenseObj.desc = desc;
        expenseObj.moment = new Date();
        divOutput.textContent = count;
        allExpenses.push(expenseObj);
    }
    
    clearInputFileds();

    renderList(allExpenses);

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

    const expenseEleArr = arrayList.map((item)=>getListElement(item));

    const expenseEleHtmlStr = expenseEleArr.join("");


    expenseEle.innerHTML = expenseEleHtmlStr;

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
    renderList(newArray);
    allExpenses = newArray;
    

}


//controler element
function getDateElement(moment){

    return moment.toLocaleDateString('en-US',{
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    });
}


function clearInputFileds(){
    inputAmount.value='';
    inputDesc.value = '';

}


