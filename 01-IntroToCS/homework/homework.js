'use strict';

function BinarioADecimal(num) {

// num:      1 0 1 1
// posicion: 3 2 1 0

// 1 * 2 ** 0 = 1
// 1 * 2 ** 1 = 2
// 0 * 2 ** 2 = 0
// 1 * 2 ** 3 = 8
// ----------------
//             11

//PRIMERA OPCION
// let suma = 0 ;
// for (let i=0; i < num.length ; i++);
// let potencia = num.length - 1 -i;     //HAGO Q EL ARREGLO EMPIECE EN 0 (EN VEZ DE 1,2,3,4 ASI ME QUEDA LA POTENCIA CORRECTA) CON EL -1 , CON EL -i LO Q HAGO ES CONTAR PARA ATRAS
// suma = suma + num[i] * 2 ** potencia; // SUMO EL RESULTADO DE LA CUENTA CORRESPONDIENTE

// return suma;

//SEGUNDA OPCION
return parseInt(num,2) ; //FORMA MAS FACIL XD
      
}

function DecimalABinario(num) {

// 11

// 11 / 2 = 5 => Resto de la division = 1
// 5 /  2 = 2 => Resto = 1
// 2 / 2  = 1 => Resto = 0
// 1 / 2  = 0 => Resto = 1
// -------------------------------
// Resultado: 1 1 0 1 --> 1 0 1 1

   var binario = "" ; //tiene que quedar en forma de string

   while(num > 0) { //cuando llegue a 0 ya no puede seguir dividiendose 
      binario = (num % 2 ) + binario; //agrego en la parte de adelante asi me queda en orden
      num = Math.floor(num / 2); // redondeo para abajo
   }

   return binario

}

module.exports = {
   BinarioADecimal,
   DecimalABinario,
};
