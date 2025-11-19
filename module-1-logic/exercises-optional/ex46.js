// Exercício 46 - Sumarizar total de vendas por vendedor

const vendas = [
{ vendedor: "Alice", valor: 150 },
{ vendedor: "Bob", valor: 200 },
{ vendedor: "Alice", valor: 100 },
{ vendedor: "Carlos", valor: 250 },
{ vendedor: "Bob", valor: 50 }
];

function totalVendasPorVendedor(arr) {
const resumo = {};
for (const venda of arr) {
if (resumo[venda.vendedor]) {
resumo[venda.vendedor] += venda.valor;
} else {
resumo[venda.vendedor] = venda.valor;
}
}
return resumo;
}

const vendasPorVendedor = totalVendasPorVendedor(vendas);
console.log("Total de vendas por vendedor:", vendasPorVendedor);
