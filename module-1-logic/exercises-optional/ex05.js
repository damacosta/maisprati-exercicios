// Exercício 5 - Crie um jogo de JoKenPo (Pedra-Papel-Tesoura)

const prompt = require('prompt-sync')({sigint: true});

// Lista de opções
const opcoes = ["pedra", "papel", "tesoura"];

// Entrada do usuário
const jogador = prompt("Escolha pedra, papel ou tesoura: ").toLowerCase();

// Escolha aleatória do computador
const computador = opcoes[Math.floor(Math.random() * opcoes.length)];

console.log(`Você escolheu: ${jogador}`);
console.log(`O computador escolheu: ${computador}`);

// Função para determinar o vencedor
if (jogador === computador) {
console.log("Empate!");
} else if (
(jogador === "pedra" && computador === "tesoura") ||
(jogador === "papel" && computador === "pedra") ||
(jogador === "tesoura" && computador === "papel")
) {
console.log("Você ganhou!");
} else if (opcoes.includes(jogador)) {
console.log("Você perdeu!");
} else {
console.log("Escolha inválida. Tente novamente!");
}
