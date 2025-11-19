// Exercício 43 - Combinar dois objetos, com propriedades de obj2 tendo precedência

const obj1 = {
nome: "Ana",
idade: 25,
cidade: "Rio de Janeiro"
};

const obj2 = {
idade: 30,
email: "[ana@example.com](mailto:ana@example.com)"
};

// Função que combina os objetos
function combinarObjetos(o1, o2) {
return {...o1, ...o2}; // propriedades de o2 sobrescrevem o1 em caso de conflito
}

const combinado = combinarObjetos(obj1, obj2);
console.log("Objeto combinado:", combinado);
