'use strict'

function BinarioADecimal(num) {
  // tu codigo aca
  var binario = String(num).split("").reverse();
  var decimal = 0;

  for(var i = 0; i < binario.length; i++){
      decimal += Number(binario[i])*2**i;
  }
  
  return decimal;
}

function DecimalABinario(num) {
  // tu codigo aca
  
  var binario = (num % 2).toString();
  for (; num > 1; ) {
      num = parseInt(num / 2);
      binario =  (num % 2) + (binario);
  }
  return (binario);

}


module.exports = {
  BinarioADecimal,
  DecimalABinario,
}