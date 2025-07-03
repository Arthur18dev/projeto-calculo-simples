var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let [codigo1, numero1, valor1] = lines[0].split(' ');
let [codigo2, numero2, valor2] = lines[1].split(' ');


codigo1 = parseInt(codigo1);
numero1 = parseInt(numero1);
valor1 = parseFloat(valor1);

codigo2 = parseInt(codigo2);
numero2 = parseInt(numero2);
valor2 = parseFloat(valor2);

let total = numero1 * valor1 + numero2 * valor2;

console.log("VALOR A PAGAR: R$ " + total.toFixed(2));