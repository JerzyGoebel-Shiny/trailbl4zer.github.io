
var price, vat, gross;
var priceField, vatField, grossRadio;

priceField = document.getElementById("price");
vatField = document.getElementById("vat");
grossRadio = document.getElementById("gross");


/* Add Event Listener to elements */

priceField.addEventListener("change", initCalc, false);
priceField.addEventListener("keyup", initCalc, false);
vatField.addEventListener("change", initCalc, false);
vatField.addEventListener("keyup", initCalc, false);
grossRadio.addEventListener("change", initCalc, false);



/* Wipe textfields on page load/refresh */

priceField.value = "";

/* Handler */

function initCalc(){
getValues();
setFinalValue(calculateTax(price, vat, gross));
}

/* Get necessary values from input */


function getValues(){
  price = priceField.value;
  vat = vatField.value;
  gross = grossRadio.checked;

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


/* Calculator Class */

class TaxCalculator{
    constructor(tax, gross){
      this.tax = tax;
      this.gross = gross;
    }
    calculate(price){
      let final;
      if (this.gross = "GROSS"){
        final = 100 * parseFloat(price) / (100 + parseFloat(this.tax));
      }else if(this.gross = "NET") {
        final = (100 + parseFloat(this.tax)) * parseFloat(price) / 100;
      }else{
        return "gross value must be either \"GROSS\" or \"NET\".";
      }
      return final.toFixed(2);
    }
}
