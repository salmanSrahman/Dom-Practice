const balanceAmount = document.getElementById("balance-amount");
const balanceAmountText = parseFloat(balanceAmount.innerText);

function getInput(id) {
  const depositInput = document.getElementById(id);
  const depositValue = parseFloat(depositInput.value);
  depositInput.value = "";
  return depositValue;
}

document.getElementById("deposit-btn").addEventListener("click", function () {
  const depositValue = getInput("deposit-input");

  const depositAmount = document.getElementById("deposit-amount");
  const depositAmountText = parseFloat(depositAmount.innerText);
  const depositTotal = depositAmountText + depositValue;
  depositAmount.innerText = depositTotal;

  const balanceTotal = balanceAmountText + depositValue;
  balanceAmount.innerText = balanceTotal;
});

// ========== deposit & balance part end ============
document.getElementById("withdraw-btn").addEventListener("click", function () {
  const withdrawValue = getInput("withdraw-input");

  const withdrawAmount = document.getElementById("withdraw-amount");
  const withdrawAmountText = parseFloat(withdrawAmount.innerText);

  const withdrawTotal = withdrawValue + withdrawAmountText;
  withdrawAmount.innerText = withdrawTotal;

  const balanceTotal = balanceAmountText - withdrawTotal;
  balanceAmount.innerText = balanceTotal;
});

// ============ withdraw & balance part end ===========
document.getElementById("complete-btn").addEventListener("click", function () {
  window.location.href = "complete.html";
});
