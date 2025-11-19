// Exercício 45 - Contar a frequência de cada string em um array

const arrayStrings = ["maçã", "banana", "maçã", "laranja", "banana", "banana"];

function contarFrequencia(arr) {
const resultado = {};
for (const item of arr) {
if (resultado[item]) {
resultado[item]++;
} else {
resultado[item] = 1;
}
}
return resultado;
}

const frequencia = contarFrequencia(arrayStrings);
console.log("Frequência de cada string:", frequencia);
