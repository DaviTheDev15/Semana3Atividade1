
const input = prompt("Digite algo: "); // Aqui eu utilizo do DOM para criar um input na página index.html
// O erro aqui era que estava chamando parserInt ao invés de parseInt, foi um erro de sintaxe
const value = parseInt(input);
 // Aqui eu converto o valor passado no input para inteiro utilizando a função parseInt

// Aqui eu crio uma nova array do tamanho de input
const array = new Array(input).fill(null);


let values = new Array(input)
  .fill(null)
  .map((currentValue, index) => index + 1);
console.log(array)
console.log(values)
