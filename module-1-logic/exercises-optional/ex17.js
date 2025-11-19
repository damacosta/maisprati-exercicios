// Exercício 17 - Leia o nome e a idade de 9 pessoas e guarde em dois vetores.
// No final, mostre apenas os dados das pessoas menores de idade.

const prompt = require('prompt-sync')({sigint: true});

const nomes = [];
const idades = [];

for (let i = 0; i < 9; i++) {
nomes.push(prompt(`Digite o nome da ${i + 1}ª pessoa: `));
idades.push(parseInt(prompt(`Digite a idade da ${i + 1}ª pessoa: `)));
}

console.log("Pessoas menores de idade:");
for (let i = 0; i < 9; i++) {
if (idades[i] < 18) {
console.log(`${nomes[i]} - ${idades[i]} anos`);
}
}
