// Exercício 49 - Agrupar transações por categoria e calcular subtotal

const transacoes = [
{ id: 1, valor: 100, data: "2025-11-19", categoria: "Alimentação" },
{ id: 2, valor: 200, data: "2025-11-19", categoria: "Transporte" },
{ id: 3, valor: 50, data: "2025-11-20", categoria: "Alimentação" },
{ id: 4, valor: 300, data: "2025-11-21", categoria: "Lazer" },
{ id: 5, valor: 70, data: "2025-11-21", categoria: "Transporte" }
];

function agruparTransacoesPorCategoria(arr) {
const resultado = {};

```
for (const t of arr) {
    if (!resultado[t.categoria]) {
        resultado[t.categoria] = { transacoes: [], subtotal: 0 };
    }
    resultado[t.categoria].transacoes.push(t);
    resultado[t.categoria].subtotal += t.valor;
}

return resultado;
```

}

const transacoesPorCategoria = agruparTransacoesPorCategoria(transacoes);
console.log("Transações agrupadas por categoria:", transacoesPorCategoria);
