// Exercício 21 - Função que recebe altura e sexo e retorna o peso ideal
// Homens: peso ideal = 72.7 * alt - 58
// Mulheres: peso ideal = 62.1 * alt - 44.7

const prompt = require('prompt-sync')({sigint: true});

function calcularPesoIdeal(alt, sexo) {
sexo = sexo.toLowerCase();
if (sexo === "m" || sexo === "masculino") {
return 72.7 * alt - 58;
} else if (sexo === "f" || sexo === "feminino") {
return 62.1 * alt - 44.7;
} else {
return null; // Sexo inválido
}
}

const altura = parseFloat(prompt("Digite a altura em metros: "));
const sexo = prompt("Digite o sexo (M/F): ");

const pesoIdeal = calcularPesoIdeal(altura, sexo);

if (pesoIdeal !== null) {
console.log(`O peso ideal é: ${pesoIdeal.toFixed(2)} kg`);
} else {
console.log("Sexo inválido. Use M ou F.");
}
