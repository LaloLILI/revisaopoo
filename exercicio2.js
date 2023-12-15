"use strict";
/*Usando do/while, dê entrada manual de um número
e faça um contador até esse número digitado*/
console.clear();
const teclado = require('prompt-sync')();
// Solicita ao usuário que insira um número
const userInput = parseInt(teclado('Digite um número: '));
let contador = 1;
// Verifica se o número é maior que 0 antes de iniciar o contador
if (userInput > 0) {
    do {
        console.log(contador);
        contador++;
    } while (contador <= userInput);
}
else {
    console.log('Por favor, digite um número maior que 0.');
}
