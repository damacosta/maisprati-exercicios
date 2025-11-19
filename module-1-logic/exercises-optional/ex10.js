// Exercício 10 - Programa que lê vários números usando "faça enquanto".
// Ao final, mostra:
// a) Somatório de todos os valores
// b) Menor valor digitado
// c) Média dos valores
// d) Quantos valores são pares

const prompt = require('prompt-sync')({sigint: true});

let somatorio = 0;
let menor;
let contador = 0;
let pares = 0;
let continuar;

do {
const numero = parseFloat(prompt("Digite um número: "));

```
somatorio += numero;
contador++;

if (menor === undefined || numero < menor) {
    menor = numero;
}

if (numero % 2 === 0) {
    pares++;
}

continuar = prompt("Deseja continuar? (s/n): ").toLowerCase();
```

} while (continuar === "s");

const media = somatorio / contador;

console.log(`Somatório de todos os valores: ${somatorio}`);
console.log(`Menor valor digitado: ${menor}`);
console.log(`Média dos valores: ${media.toFixed(2)}`);
console.log(`Quantidade de valores pares: ${pares}`);
