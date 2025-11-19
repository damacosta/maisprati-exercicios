// Exercício 48 - Combinar inventários de duas lojas somando quantidades

const inventarioLojaA = {
maçã: 10,
banana: 5,
laranja: 8
};

const inventarioLojaB = {
banana: 7,
laranja: 3,
pera: 12
};

function combinarInventarios(invA, invB) {
const combinado = {...invA};
for (const item in invB) {
if (combinado[item]) {
combinado[item] += invB[item];
} else {
combinado[item] = invB[item];
}
}
return combinado;
}

const inventarioTotal = combinarInventarios(inventarioLojaA, inventarioLojaB);
console.log("Inventário combinado:", inventarioTotal);
