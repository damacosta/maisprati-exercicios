ex// Exercício 47 - Aplicar uma função a cada propriedade de um objeto

const objOriginal = {
a: 2,
b: 5,
c: 10
};

function mapObjeto(obj, func) {
const novoObj = {};
for (const chave in obj) {
novoObj[chave] = func(obj[chave]);
}
return novoObj;
}

// Exemplo de uso: multiplicar cada valor por 2
const objTransformado = mapObjeto(objOriginal, valor => valor * 2);

console.log("Objeto original:", objOriginal);
console.log("Objeto transformado:", objTransformado);
