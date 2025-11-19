// Exercício 40 - Loto: comparar apostas com resultado oficial (5 números)

const prompt = require('prompt-sync')({sigint: true});

const tamanhoJogo = 5;
const numApostadores = 50;

// Lendo o resultado oficial
const resultado = [];
console.log("Digite o resultado oficial da Loto (5 números inteiros):");
for (let i = 0; i < tamanhoJogo; i++) {
resultado.push(parseInt(prompt(`Número ${i + 1}: `)));
}

// Processando as 50 apostas
for (let a = 0; a < numApostadores; a++) {
console.log(`\nAposta do apostador ${a + 1}:`);
const aposta = [];
for (let i = 0; i < tamanhoJogo; i++) {
aposta.push(parseInt(prompt(`Número ${i + 1}: `)));
}

```
// Verificando se todos os números correspondem ao resultado oficial
let ganhou = true;
for (let i = 0; i < tamanhoJogo; i++) {
    if (aposta[i] !== resultado[i]) {
        ganhou = false;
        break;
    }
}

if (ganhou) {
    console.log("Ganhador!");
} else {
    console.log("Não ganhou.");
}
```

}
