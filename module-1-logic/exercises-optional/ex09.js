// Exercício 9 - Programa que lê salário e sexo de vários funcionários
// e mostra o total pago a homens e mulheres.

const prompt = require('prompt-sync')({sigint: true});

let totalHomens = 0;
let totalMulheres = 0;
let continuar = "s";

while (continuar.toLowerCase() === "s") {
const salario = parseFloat(prompt("Digite o salário do funcionário: "));
const sexo = prompt("Digite o sexo do funcionário (M/F): ").toUpperCase();

```
if (sexo === "M") {
    totalHomens += salario;
} else if (sexo === "F") {
    totalMulheres += salario;
} else {
    console.log("Sexo inválido. Use M para masculino e F para feminino.");
}

continuar = prompt("Deseja continuar cadastrando? (s/n): ");
```

}

console.log(`Total pago aos homens: R$ ${totalHomens.toFixed(2)}`);
console.log(`Total pago às mulheres: R$ ${totalMulheres.toFixed(2)}`);
