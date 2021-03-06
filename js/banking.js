/* function doubleIt(num) {
    const result = num * 2;
    return result;
}
const first = doubleIt(3);
const second = doubleIt(2); */

/* function getInputValue(inputId) {
    const depositInput = document.getElementById(inputId);
    const depositAmountText = depositInput.value;
    const depositAmount = parseFloat(depositAmountText);
    //clear input field
    depositInput.value = '';
    return depositAmount;
} */

function getInputValue(inputId) {
    const inputField = document.getElementById(inputId);
    const amountText = inputField.value;
    const amount = parseFloat(amountText);
    //clear input field
    inputField.value = '';
    return amount;
}
function updateTotalField(totalFieldId, depositAmount) {
    // debugger;
    const totalElement = document.getElementById(totalFieldId);
    const totalText = totalElement.innerText;
    const previousDepositTotal = parseFloat(totalText);
    totalElement.innerText = previousDepositTotal + depositAmount;
}
function getCurrentBalance() {
    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(balanceTotalText);
    return previousBalanceTotal;
}
function updateBalance(depositAmount, isAdd) {
    const balanceTotal = document.getElementById('balance-total');
    /* const balanceTotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(balanceTotalText); */
    const previousBalanceTotal = getCurrentBalance()
    if (isAdd == true) {
        balanceTotal.innerText = previousBalanceTotal + depositAmount;
    }
    else {
        balanceTotal.innerText = previousBalanceTotal - depositAmount;
    }
}


//Handle Deposit Money
document.getElementById('deposit-button').addEventListener('click', function () {

    //get event handler button
    /* const depositInput = document.getElementById('deposit-input');
    const depositAmountText = depositInput.value;
    const depositAmount = parseFloat(depositAmountText); */
    // const depositAmount = getInputValue('deposit-input');

    //get and update deposit total
    /* const depositTotal = document.getElementById('deposit-total');
    const depositTotalText = depositTotal.innerText;
    const previousDepositTotal = parseFloat(depositTotalText);
    depositTotal.innerText = previousDepositTotal + depositAmount; */
    // updateTotalField('deposit-total', depositAmount);

    //update balance
    /* const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(balanceTotalText);
    balanceTotal.innerText = previousBalanceTotal + depositAmount; */
    // updateBalance(depositAmount, true);

    const depositAmount = getInputValue('deposit-input');
    if (depositAmount > 0) {
        updateTotalField('deposit-total', depositAmount);
        updateBalance(depositAmount, true);
    }
});

//Handle Withdraw Money
document.getElementById('withdraw-button').addEventListener('click', function () {
    const withdrawAmount = getInputValue('withdraw-input');
    const currentBalance = getCurrentBalance();
    if (withdrawAmount > 0 && withdrawAmount < currentBalance) {
        updateTotalField('withdraw-total', withdrawAmount);
        updateBalance(withdrawAmount, false);
    }
    if (withdrawAmount > currentBalance) {
        console.log('You can not withdraw more than what you have in your account');
    }

    /* const withdrawInput = document.getElementById('withdraw-input');
    const withdrawAmountText = withdrawInput.value;
    const withdrawAmount = parseFloat(withdrawAmountText); */
    // const withdrawAmount = getInputValue('withdraw-input');

    //get and update withdraw Total 
    /* const withdrawTotal = document.getElementById('withdraw-total');
    const withdrawTotalText = withdrawTotal.innerText;
    const previousWithdrawTotal = parseFloat(withdrawTotalText);
    withdrawTotal.innerText = previousWithdrawTotal + withdrawAmount; */
    // updateTotalField('withdraw-total', withdrawAmount);

    //Update Balance after withdraw
    /* const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(balanceTotalText);
    balanceTotal.innerText = previousBalanceTotal - withdrawAmount; */
    // updateBalance(withdrawAmount, false);
});