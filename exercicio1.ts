/*Usando IF, dê entrada manual de um número e
retorne na tela se ele é maior, menor ou igual a 5*/

console.clear();
const teclado = require('prompt-sync')();


// Solicita ao usuário que insira um número
const userInput = parseFloat(teclado('Digite um número: '));

// Verifica se o número é maior, menor ou igual a 5 e imprime o resultado
if (userInput > 5) {
  console.log(`${userInput} é maior que 5.`);
} else if (userInput < 5) {
  console.log(`${userInput} é menor que 5.`);
} else {
  console.log(`${userInput} é igual a 5.`);
}