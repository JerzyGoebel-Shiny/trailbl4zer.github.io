
var price, vat, gross;
var priceField, vatField, grossRadio;

priceField = document.getElementById("price");
vatField = document.getElementById("vat");
grossRadios = document.getElementsByName("radio_gross");


/* Add Event Listener to elements */

priceField.addEventListener("change", initCalc, false);
priceField.addEventListener("keyup", initCalc, false);
vatField.addEventListener("change", initCalc, false);
vatField.addEventListener("keyup", initCalc, false);
          /* Adding handler to both radio buttons */
grossRadios[0].addEventListener("change", initCalc, false);
grossRadios[1].addEventListener("change", initCalc, false);



/* Wipe textfields on page load/refresh */

priceField.value = "";

/* Handler */

function initCalc(){

getValues();
Calc = new TaxCalculator(vat, gross);
setFinalValue(Calc.calculate(price));
}

/* Get necessary values from input */


function getValues(){
  price = priceField.value;
  vat = vatField.value;
  gross = grossRadios[0].checked;
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
                /* Overloading method by type of parameters */
      if (typeof this.gross === "string"){
        if (this.gross === "GROSS"){
          final = 100 * parseFloat(price) / (100 + parseFloat(this.tax));
        }else if(this.gross === "NET") {
          final = (100 + parseFloat(this.tax)) * parseFloat(price) / 100;
        }else{
          return "gross value must be either \"GROSS\" or \"NET\". What do you mean by \"" + this.gross + "\"?";
        }
                /* Overloading continues */
      }else if (typeof this.gross === "boolean"){
        if (this.gross){
          final = 100 * parseFloat(price) / (100 + parseFloat(this.tax));
        }else {
          final = (100 + parseFloat(this.tax)) * parseFloat(price) / 100;
        }
      }
      return final.toFixed(2);
    }
}
