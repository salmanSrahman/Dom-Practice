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
