// Exercício 36 - Loteria esportiva: comparar respostas dos apostadores com o gabarito

const prompt = require('prompt-sync')({sigint: true});

const numApostadores = 100;
const tamanhoTeste = 13;

// Lendo o gabarito
const gabarito = [];
console.log("Digite o gabarito (13 números inteiros):");
for (let i = 0; i < tamanhoTeste; i++) {
gabarito.push(parseInt(prompt(`Gabarito posição ${i + 1}: `)));
}

// Processando os apostadores
for (let a = 0; a < numApostadores; a++) {
const numCartao = prompt(`\nDigite o número do cartão do apostador ${a + 1}: `);
const respostas = [];

```
console.log(`Digite as 13 respostas do apostador ${numCartao}:`);
for (let i = 0; i < tamanhoTeste; i++) {
    respostas.push(parseInt(prompt(`Resposta posição ${i + 1}: `)));
}

// Contando acertos
let acertos = 0;
for (let i = 0; i < tamanhoTeste; i++) {
    if (respostas[i] === gabarito[i]) acertos++;
}

console.log(`Apostador ${numCartao} acertou ${acertos} questões.`);
if (acertos === tamanhoTeste) {
    console.log("Parabéns, tu foi o GANHADOR!");
}
```

}
