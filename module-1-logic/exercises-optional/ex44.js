// Exercício 44 - Contar propriedades do tipo string em um objeto

const objetoExemplo = {
nome: "Carlos",
idade: 28,
cidade: "São Paulo",
ativo: true,
profissao: "Engenheiro"
};

function contarStrings(obj) {
let contador = 0;
for (const chave in obj) {
if (typeof obj[chave] === "string") {
contador++;
}
}
return contador;
}

const totalStrings = contarStrings(objetoExemplo);
console.log(`Número de propriedades do tipo string: ${totalStrings}`);
