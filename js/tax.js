
var price, vat, gross;

/* Wipe textfields on page load/refresh */

document.getElementsByName("price")[0].value = "";

/* Handler */

function initCalc(){
getValues();
setFinalValue(calculateTax(price, vat, gross));
}

/* Get necessary values from input */


function getValues(){
  price = document.getElementsByName("price")[0].value;
  vat = document.getElementsByName("vat")[0].value;
  gross = document.getElementsByName("gross")[0].checked;

}


/* Main TAX calculation with variables */


function calculateTax(value, tax, isGross){
  let final;
  if (isGross){
    final = 100 * parseFloat(value) / (100 + parseFloat(tax));
  }else {
    final = (100 + parseFloat(tax)) * parseFloat(value) / 100;
  }
  return final.toFixed(2);
}


/* Output data */

function setFinalValue(finalPrice){
  document.getElementById("final").innerHTML = finalPrice + " PLN";
}

/* IE radio failsafe */

function setFinalValue(finalPrice){
  document.getElementById("final").innerHTML = finalPrice + " PLN";
}
