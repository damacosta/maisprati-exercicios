// Exercício 22 - Pesquisa de população: salário e número de filhos
// Retorna média de salário, média de filhos, maior salário e percentual de salários até R$ 350,00

const prompt = require('prompt-sync')({sigint: true});

function pesquisaPopulacao() {
let salarios = [];
let filhos = [];
let continuar = "s";

```
while (continuar.toLowerCase() === "s") {
    const salario = parseFloat(prompt("Digite o salário: "));
    const numFilhos = parseInt(prompt("Digite o número de filhos: "));

    salarios.push(salario);
    filhos.push(numFilhos);

    continuar = prompt("Deseja inserir dados de outra pessoa? (s/n): ");
}

const totalPessoas = salarios.length;
const mediaSalario = salarios.reduce((a, b) => a + b, 0) / totalPessoas;
const mediaFilhos = filhos.reduce((a, b) => a + b, 0) / totalPessoas;
const maiorSalario = Math.max(...salarios);
const percentualSalarios350 = (salarios.filter(s => s <= 350).length / totalPessoas) * 100;

return {
    mediaSalario: mediaSalario.toFixed(2),
    mediaFilhos: mediaFilhos.toFixed(1),
    maiorSalario: maiorSalario.toFixed(2),
    percentualSalarios350: percentualSalarios350.toFixed(2)
};
```

}

const resultados = pesquisaPopulacao();

console.log("\n--- Resultados da pesquisa ---");
console.log(`Média de salário: R$ ${resultados.mediaSalario}`);
console.log(`Média de filhos: ${resultados.mediaFilhos}`);
console.log(`Maior salário: R$ ${resultados.maiorSalario}`);
console.log(`Percentual de pessoas com salário até R$ 350,00: ${resultados.percentualSalarios350}%`);
