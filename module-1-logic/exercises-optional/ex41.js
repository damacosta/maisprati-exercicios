// Exercício 41 - Acessar propriedade e adicionar nova propriedade a um objeto

const pessoa = {
nome: "João",
idade: 25
};

// Acessando e imprimindo a idade
console.log(`Idade: ${pessoa.idade}`);

// Adicionando a nova propriedade 'email'
pessoa.email = "[joao@example.com](mailto:joao@example.com)";

// Imprimindo o objeto atualizado
console.log("Objeto pessoa atualizado:", pessoa);
