"use strict";
/*Usando while, dê entrada manual de um número
e faça um contador até esse número digitado*/
console.clear();
const teclado = require('prompt-sync')();
// Solicita ao usuário que insira um número
const userInput = parseFloat(teclado('Digite um número: '));
let contador = 1;
// Verifica se o número é maior que 0 antes de iniciar o contador
if (userInput > 0) {
    while (contador <= userInput) {
        console.log(contador);
        contador++;
    }
}
else {
    console.log('Por favor, digite um número maior que 0.');
}
