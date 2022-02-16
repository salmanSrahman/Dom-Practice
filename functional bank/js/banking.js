const depositBtn = document.getElementById("deposit_btn");

function inputField(id) {
  const depositAmount = document.getElementById(id);
  const depositAmountValue = document.getElementById(id).value;
  const depositAmountValueNumber = parseFloat(depositAmountValue);
  return depositAmountValueNumber;
}
