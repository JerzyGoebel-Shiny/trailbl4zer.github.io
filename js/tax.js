
var price, vat, gross;

document.getElementsByName("price")[0].value = "";

function initCalc(){
getValues();
setFinalValue(calculateTax(price, vat, gross));
}

function getValues(){
  price = document.getElementsByName("price")[0].value;
  vat = document.getElementsByName("vat")[0].value;
  gross = document.getElementsByName("gross")[0].checked;

}
function calculateTax(value, tax, isGross){
  let final;
  if (isGross){
    final = 100 * parseFloat(value) / (100 + parseFloat(tax));
  }else {
    final = (100 + parseFloat(tax)) * parseFloat(value) / 100;
  }
  return final.toFixed(2);
}

function setFinalValue(finalPrice){
  document.getElementById("final").innerHTML = finalPrice + " PLN";
}
