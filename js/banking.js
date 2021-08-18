function getInputValue(inputId){
    const depositeInput = document.getElementById(inputId);
    const newDepositeAmountText = depositeInput.value;
    const newDepositeAmount = parseFloat(newDepositeAmountText);
    // clear deposite input field 
    depositeInput.value ='';
    return newDepositeAmount;

}

function updateTotalField(totalField,newDepositeAmount){
    const depositeTotal = document.getElementById(totalField);
    const previousDepositeText = depositeTotal.innerText;
    const previousDeposite = parseFloat(previousDepositeText);
    depositeTotal.innerText = previousDeposite + newDepositeAmount;
}

function getCurrentBalance(){
    const balanceTotal = document.getElementById("balance-total");
    const previousBalanceText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceText);
    return previousBalanceTotal;
}

function updateBalance(newWithdrawAmount,isAdd){
    const balanceTotal = document.getElementById("balance-total");
    // const previousBalanceText = balanceTotal.innerText;
    // const previousBalanceTotal = parseFloat(previousBalanceText);
    const previousBalanceTotal = getCurrentBalance();

    if(isAdd == true){
        balanceTotal.innerText = previousBalanceTotal + newWithdrawAmount;
    }
    else{
        balanceTotal.innerText = previousBalanceTotal - newWithdrawAmount;

    }
}


document.getElementById("deposite-button").addEventListener('click',function(){
    // const depositeInput = document.getElementById("deposite-input");
    // const newDepositeAmountText = depositeInput.value;
    // const newDepositeAmount = parseFloat(newDepositeAmountText);
   

    // deposite 
    // const depositeTotal = document.getElementById("deposite-total");
    // const previousDepositeText = depositeTotal.innerText;
    // const previousDeposite = parseFloat(previousDepositeText);
    // depositeTotal.innerText = previousDeposite + newDepositeAmount;

    // update account balance 
    // const balanceTotal = document.getElementById("balance-total");
    // const balanceTotalText = balanceTotal.innerText;
    // const previousBalanceTotal = parseFloat(balanceTotalText);
    // const newBalanceTotal = previousBalanceTotal + newDepositeAmount;   
    // balanceTotal.innerText = newBalanceTotal;
    const newDepositeAmount = getInputValue("deposite-input");
    if(newDepositeAmount > 0){
        updateTotalField("deposite-total",newDepositeAmount);

        updateBalance(newDepositeAmount,true)
    }
    
});
// withdraw handler

document.getElementById("withdraw-button").addEventListener("click",function(){
   
    // const withdrawInput = document.getElementById("withdraw-input");
    // const withdrawAmountText = withdrawInput.value;
    // const newWithdrawAmount = parseFloat(withdrawAmountText);
    // console.log(newWithdrawAmount);


    // set withdraw total 

    // const withdrawTotal = document.getElementById("withdraw-total");
    // const previousWithdrawText = withdrawTotal.innerText;
    // const previousWithdrawTotal = parseFloat(previousWithdrawText);

    // const newWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;
    // withdrawTotal.innerText = newWithdrawTotal;



    // // update balance 
    // const balanceTotal = document.getElementById("balance-total");
    // const previousBalanceText = balanceTotal.innerText;
    // const previousBalanceTotal = parseFloat(previousBalanceText);
    // balanceTotal.innerText = previousBalanceTotal - newWithdrawAmount;

    const newWithdrawAmount = getInputValue("withdraw-input")
    const currentBalance = getCurrentBalance();
    if(newWithdrawAmount > 0 && newWithdrawAmount < currentBalance){
        updateTotalField("withdraw-total",newWithdrawAmount);

        updateBalance(newWithdrawAmount,false);
    }
    if(newWithdrawAmount > currentBalance){
        alert("Please enter valid number");
    }
});

