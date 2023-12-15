/*Crie uma lógica que o usuário dê entrada manual do valor
de nível de um tanque (0 - 100%), esse valor serve como
controle de nível, quando o tanque estiver com 20% ou menos
deve exibir uma mensagem de “Nível baixo, bomba ligada”
(quando a bomba ligada é necessário que o software tenha
uma variável statusMotor que armazene o status atual da
bomba). Quando o nível chegar a 80% a mensagem deve ser
exibida “Nível alto, bomba desligada em 1min” (quando o nível
chegar a 80% deve contar um tempo de 100 (simulando 1min)
e depois mudar o status da variável statusMotor).Dica use IF*/

console.clear();
const teclado = require('prompt-sync')();

// Inicialização das variáveis
let nivelTanque: number;
let statusMotor: boolean = false; // false indica que a bomba está desligada

// Solicita ao usuário que insira o nível do tanque (0 - 100%)
nivelTanque = parseFloat(teclado('Digite o nível do tanque (0 - 100%): '));

// Verifica o nível do tanque e exiba as mensagens apropriadas
if (nivelTanque <= 20) {
  statusMotor = true;
  console.log('Nível baixo, bomba ligada.');
} else if (nivelTanque >= 80) {
  statusMotor = false; // A bomba é desligada após 1 minuto
  console.log('Nível alto, bomba desligada em 1 min.');
} else {
  console.log('Nível do tanque dentro do limite aceitável.');
}

// Exibe o status atual da bomba (ligada ou desligada)
console.log(`Status da bomba: ${statusMotor ? 'Ligada' : 'Desligada'}.`);

