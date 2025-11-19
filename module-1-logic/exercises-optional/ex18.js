// Exercício 18 - Crie um registro com nome, cargo e salário de um funcionário,
// leia os dados e mostre o conteúdo do registro.

const prompt = require('prompt-sync')({sigint: true});

// Criando o registro como um objeto
const funcionario = {
nome: prompt("Digite o nome do funcionário: "),
cargo: prompt("Digite o cargo do funcionário: "),
salario: parseFloat(prompt("Digite o salário do funcionário: "))
};

console.log("\nDados do funcionário:");
console.log(`Nome: ${funcionario.nome}`);
console.log(`Cargo: ${funcionario.cargo}`);
console.log(`Salário: R$ ${funcionario.salario.toFixed(2)}`);
