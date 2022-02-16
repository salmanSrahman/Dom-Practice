const depositBtn = document.getElementById("deposit_btn");

function inputField(id) {
  const depositAmount = document.getElementById(id);
  const depositAmountValue = document.getElementById(id).value;
  const depositAmountValueNumber = parseFloat(depositAmountValue);
  return depositAmountValueNumber;
}
function updateField(name, id) {
    const addDeposit = document.getElementById(id);
    const addDepositText = document.getElementById(id).innerText;
    const addDepositNumber = parseFloat(addDepositText);

    const totalDeposit = name + addDepositNumber;
    document.getElementById(id).innerText = totalDeposit;
}

function getCurrentBalance() {
    const addBalance = document.getElementById("add_Balance");
    const addBalanceText = document.getElementById("add_Balance").innerText;
    const addBalanceNumber = parseFloat(addBalanceText);
    return addBalanceNumber;

}

function updateBalance(value) {
    const addBalanceNumber = getCurrentBalance();
    const totalBalance = addBalanceNumber + value;
    document.getElementById("add_Balance").innerText = totalBalance;
}

// =========== all function part end ===========
depositBtn.addEventListener("click", function () {
    const depositAmountValueNumber = inputField("deposit_amount");
    if (depositAmountValueNumber > 0) {
        updateField(depositAmountValueNumber, "add_deposit")
        updateBalance(depositAmountValueNumber);

    }
})


// ============== deposit button part end ===========

const withdrawBtn = document.getElementById("withdraw_btn");
withdrawBtn.addEventListener("click", function () {
    const currentBalance = getCurrentBalance()

    const withdrawAmountValueNumber = inputField("withdraw_amount");
    if (withdrawAmountValueNumber > 0 && withdrawAmountValueNumber < currentBalance) {
        updateField(withdrawAmountValueNumber, "add_withdraw");
        updateBalance(-1 * withdrawAmountValueNumber);

    }

    if (withdrawAmountValueNumber > currentBalance) {
        alert("Withdraw Not Possible. You Dont Have Enough Money")
    }


    // ========= withdraw part end =========


})
