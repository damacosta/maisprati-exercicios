// Exercício 12 - Mostra os 10 primeiros elementos da Sequência de Fibonacci
// Ex.: 1, 1, 2, 3, 5, 8, 13, 21

const fibonacci = [1, 1];

for (let i = 2; i < 10; i++) {
fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2];
}

console.log(`Os 10 primeiros elementos da Sequência de Fibonacci são: ${fibonacci.join(", ")}`);
