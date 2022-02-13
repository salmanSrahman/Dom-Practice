document.getElementById("deposit-btn").addEventListener("click", function () {
  const depositInput = document.getElementById("deposit-input");
  const depositValue = parseFloat(depositInput.value);
  console.log(depositValue);

  const depositAmount = document.getElementById("deposit-amount");
  const depositAmountText = parseFloat(depositAmount.innerText);

  const depositTotal = depositAmountText + depositValue;
  depositAmount.innerText = depositTotal;
  console.log(depositTotal);
});
