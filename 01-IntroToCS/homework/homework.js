'use strict';

function BinarioADecimal(num) {

      
      let array = num.toString().split("").reverse();
      let resultado = 0;
      for (let i = 0; i < array.length; i++) {
   
         resultado += (array[i]* 2 ** i);
   
      };
      return resultado;
    }
   
    console.log(BinarioADecimal(numero));
    console.log(typeof BinarioADecimal(numero));
    



function DecimalABinario(num) {
   var result = "" ;

   while(num!=0) {
      var cociente=Math.floor(num/2)
      var rest = num % 2;

      num = cociente
      rest = rest + result;
   }

   return result

}

module.exports = {
   BinarioADecimal,
   DecimalABinario,
};
