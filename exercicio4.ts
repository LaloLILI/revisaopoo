/*Usando Vetores e For, dê entrada manual de 5
números, faça a média deles e mostre na tela o valor da
média e os números digitados.*/

console.clear();
const teclado = require('prompt-sync')();

const totalNumeros = 5;
const numeros: number[] = [];
let soma = 0;

// Solicita ao usuário que insira 5 números e acumule a soma
for (let i = 1; i <= totalNumeros; i++) {
  const userInput = parseFloat(teclado(`Digite o número ${i}: `));
  numeros[i - 1] = userInput;
  soma += userInput;
}

// Calcula a média dos números
const media = soma / totalNumeros;

// Imprime os números digitados e a média
console.log('Números digitados:', numeros);
console.log('Média:', media);
