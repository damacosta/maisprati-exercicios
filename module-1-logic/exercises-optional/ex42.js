// Exercício 42 - Filtrar propriedades que são arrays

const dados = {
nome: "Maria",
idade: 30,
hobbies: ["ler", "viajar", "cozinhar"],
notas: [8, 9, 10],
cidade: "São Paulo",
ativo: true
};

// Função que retorna um novo objeto com apenas as propriedades que são arrays
function filtrarArrays(obj) {
const resultado = {};
for (const chave in obj) {
if (Array.isArray(obj[chave])) {
resultado[chave] = obj[chave];
}
}
return resultado;
}

const apenasArrays = filtrarArrays(dados);
console.log("Propriedades que são arrays:", apenasArrays);
