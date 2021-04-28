

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

    allExpenses.push(expenseObj);
    console.clear();
    console.table(allExpenses);

    const expense = parseInt(amount,10);
    count = count+expense;
    divOutput.textContent = count;

    const expenseEleArr = allExpenses.map((item)=>{
        return `<div> ${item.amount} :: ${item.desc}`;
    });

    const expenseEleHtmlStr = expenseEleArr.join("");


    expenseEle.innerHTML = expenseEleHtmlStr;

}

addButton.addEventListener("click",addClicked);