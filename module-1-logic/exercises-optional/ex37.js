// Exercício 37 - Gabarito de prova de 20 questões
// Para 50 alunos, mostrar número de acertos e "APROVADO" (>=12) ou "REPROVADO"

const prompt = require('prompt-sync')({sigint: true});

const numAlunos = 50;
const numQuestoes = 20;

// Lendo o gabarito
const G = [];
console.log("Digite o gabarito (20 caracteres, ex: A, B, C, D, E):");
for (let i = 0; i < numQuestoes; i++) {
G.push(prompt(`Gabarito posição ${i + 1}: `).toUpperCase());
}

// Processando cada aluno
for (let a = 0; a < numAlunos; a++) {
console.log(`\nAluno ${a + 1}:`);
const R = [];
for (let i = 0; i < numQuestoes; i++) {
R.push(prompt(`Resposta posição ${i + 1}: `).toUpperCase());
}

```
// Contando acertos
let acertos = 0;
for (let i = 0; i < numQuestoes; i++) {
    if (R[i] === G[i]) acertos++;
}

console.log(`Número de acertos: ${acertos}`);
if (acertos >= 12) {
    console.log("APROVADO");
} else {
    console.log("REPROVADO");
}
```

}
