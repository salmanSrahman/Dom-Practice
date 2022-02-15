const balanceAmount = document.getElementById("balance-amount");
const balanceAmountText = parseFloat(balanceAmount.innerText);

document.getElementById("deposit-btn").addEventListener("click", function () {
  const depositInput = document.getElementById("deposit-input");
  const depositValue = parseFloat(depositInput.value);
  const depositAmount = document.getElementById("deposit-amount");
  const depositAmountText = parseFloat(depositAmount.innerText);

  const depositTotal = depositAmountText + depositValue;
  depositAmount.innerText = depositTotal;

  const balanceTotal = balanceAmountText + depositValue;
  balanceAmount.innerText = balanceTotal;

  depositInput.value = "";
});

// ========== deposit & balance part end ============
document.getElementById("withdraw-btn").addEventListener("click", function () {
  const withdrawInput = document.getElementById("withdraw-input");
  const withdrawValue = parseFloat(withdrawInput.value);
  const withdrawAmount = document.getElementById("withdraw-amount");
  const withdrawAmountText = parseFloat(withdrawAmount.innerText);

  const withdrawTotal = withdrawValue + withdrawAmountText;
  withdrawAmount.innerText = withdrawTotal;

  const balanceTotal = balanceAmountText - withdrawTotal;
  balanceAmount.innerText = balanceTotal;

  withdrawInput.value = "";
});

// ============ withdraw & balance part end ===========

