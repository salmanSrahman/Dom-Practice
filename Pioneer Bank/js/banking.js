document.getElementById("deposit-btn").addEventListener("click", function () {
  const depositInput = document.getElementById("deposit-input");
  const depositValue = parseFloat(depositInput.value);

  const depositAmount = document.getElementById("deposit-amount");
  const depositAmountText = parseFloat(depositAmount.innerText);

  const depositTotal = depositAmountText + depositValue;
  depositAmount.innerText = depositTotal;

  const balanceAmount = document.getElementById("balance-amount");
  const balanceAmountText = parseFloat(balanceAmount.innerText);
  const balanceTotal = balanceAmountText + depositValue;
  balanceAmount.innerText = balanceTotal;

  depositInput.value = "";
});
