// Exercício 7 - Empresa de aluguel de carros
// Aluguel de carro popular: R$ 90,00/dia
// Aluguel de carro de luxo: R$ 150,00/dia
// Pagamento por Km percorrido conforme abaixo:
// Carros populares: até 100 Km = R$ 0,20/Km, acima de 100 Km = R$ 0,10/Km
// Carros de luxo: até 200 Km = R$ 0,30/Km, acima de 200 Km = R$ 0,25/Km

const prompt = require('prompt-sync')({sigint: true});

const tipoCarro = prompt("Qual tipo de carro alugado? (popular/luxo): ").toLowerCase();
const diasAluguel = parseInt(prompt("Quantos dias de aluguel? "));
const kmPercorridos = parseFloat(prompt("Quantos Km foram percorridos? "));

let valorDiaria, valorKm;

if (tipoCarro === "popular") {
valorDiaria = 90;
valorKm = kmPercorridos <= 100 ? kmPercorridos * 0.20 : kmPercorridos * 0.10;
} else if (tipoCarro === "luxo") {
valorDiaria = 150;
valorKm = kmPercorridos <= 200 ? kmPercorridos * 0.30 : kmPercorridos * 0.25;
} else {
console.log("Tipo de carro inválido!");
process.exit();
}

const valorTotal = (diasAluguel * valorDiaria) + valorKm;

console.log(`O valor a ser pago é: R$ ${valorTotal.toFixed(2)}`);
