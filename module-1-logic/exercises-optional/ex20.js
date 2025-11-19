// Exercício 20 - Processar folha de pagamento de 80 funcionários
// Cada funcionário possui matrícula, nome e salário bruto
// Desconto de INSS: 12%
// Salário líquido = salário bruto - INSS

const prompt = require('prompt-sync')({sigint: true});

const NUM_FUNCIONARIOS = 80;

for (let i = 0; i < NUM_FUNCIONARIOS; i++) {
console.log(`\nFuncionário ${i + 1}:`);

```
const matricula = prompt("Digite a matrícula: ");
const nome = prompt("Digite o nome: ");
const salarioBruto = parseFloat(prompt("Digite o salário bruto: "));

const descontoINSS = salarioBruto * 0.12;
const salarioLiquido = salarioBruto - descontoINSS;

console.log("\n--- Contracheque ---");
console.log(`Matrícula: ${matricula}`);
console.log(`Nome: ${nome}`);
console.log(`Salário bruto: R$ ${salarioBruto.toFixed(2)}`);
console.log(`Dedução INSS: R$ ${descontoINSS.toFixed(2)}`);
console.log(`Salário líquido: R$ ${salarioLiquido.toFixed(2)}`);
```

}
