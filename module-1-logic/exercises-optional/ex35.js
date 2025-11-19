// Exercício 35 - Ler 30 valores e separar em vetores de pares e ímpares de 5 posições

const prompt = require('prompt-sync')({sigint: true});

const totalValores = 30;
const tamanhoVetor = 5;

let vetorPares = [];
let vetorImpares = [];

for (let i = 0; i < totalValores; i++) {
const valor = parseInt(prompt(`Digite o ${i + 1}º valor: `));

```
if (valor % 2 === 0) {
    vetorPares.push(valor);
    if (vetorPares.length === tamanhoVetor) {
        console.log(`Vetor de pares cheio: ${vetorPares.join(" ")}`);
        vetorPares = [];
    }
} else {
    vetorImpares.push(valor);
    if (vetorImpares.length === tamanhoVetor) {
        console.log(`Vetor de ímpares cheio: ${vetorImpares.join(" ")}`);
        vetorImpares = [];
    }
}
```

}

// Mostrar o conteúdo final dos vetores (se ainda houver elementos)
if (vetorPares.length > 0) console.log(`\nVetor de pares restante: ${vetorPares.join(" ")}`);
if (vetorImpares.length > 0) console.log(`Vetor de ímpares restante: ${vetorImpares.join(" ")}`);
