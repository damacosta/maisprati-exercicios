// Exercício 13 - Preencher um vetor com 15 posições com os primeiros elementos da sequência de Fibonacci
// Usando lógica, não apenas atribuindo diretamente

const fibonacci = [];
fibonacci[0] = 1;
fibonacci[1] = 1;

for (let i = 2; i < 15; i++) {
fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2];
}

console.log(`Os 15 primeiros elementos da sequência de Fibonacci são: ${fibonacci.join(", ")}`);
