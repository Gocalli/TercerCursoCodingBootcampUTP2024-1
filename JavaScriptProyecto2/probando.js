const prompt = require('prompt-sync')(); //Llama a la función nativa de Node para poder hacer uso del prompt


let result = '';
let i = 0;

do {
  i = i + 1;
  result = result + i;
} while (i < 5);

console.log(result);
