// Exercício 19 - Ler 5 horários, validar e exibir no formato HH.MM.SS

const prompt = require('prompt-sync')({sigint: true});

function validarHorario(horario) {
// Verifica se o horário está no formato HH:MM:SS
const partes = horario.split(":");
if (partes.length !== 3) return false;

```
const [hh, mm, ss] = partes.map(Number);

if (
    Number.isInteger(hh) && Number.isInteger(mm) && Number.isInteger(ss) &&
    hh >= 0 && hh < 24 &&
    mm >= 0 && mm < 60 &&
    ss >= 0 && ss < 60
) {
    return [hh, mm, ss];
} else {
    return false;
}
```

}

const horarios = [];

for (let i = 0; i < 5; i++) {
let valido = false;
let hh, mm, ss;

```
do {
    const entrada = prompt(`Digite o ${i + 1}º horário (HH:MM:SS): `);
    const resultado = validarHorario(entrada);
    if (resultado) {
        [hh, mm, ss] = resultado;
        valido = true;
    } else {
        console.log("Horário inválido. Tente novamente.");
    }
} while (!valido);

horarios.push(`${hh.toString().padStart(2,'0')}.${mm.toString().padStart(2,'0')}.${ss.toString().padStart(2,'0')}`);
```

}

console.log("Horários informados:");
horarios.forEach(h => console.l
