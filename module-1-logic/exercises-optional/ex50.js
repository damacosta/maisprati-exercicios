// Exercício 50 - Sistema de reserva de hotéis via console

const prompt = require('prompt-sync')({sigint: true});

// Lista de hotéis disponíveis
const hoteis = [
{ nome: "Hotel Sol", quartosDisponiveis: 5, precoPorNoite: 200 },
{ nome: "Hotel Lua", quartosDisponiveis: 3, precoPorNoite: 150 },
{ nome: "Hotel Estrela", quartosDisponiveis: 4, precoPorNoite: 180 }
];

// Array para registrar reservas
const reservas = [];

function mostrarHoteis() {
console.log("\nHotéis disponíveis:");
hoteis.forEach((hotel, index) => {
console.log(`${index + 1} - ${hotel.nome} | Quartos disponíveis: ${hotel.quartosDisponiveis} | Preço/noite: R$ ${hotel.precoPorNoite}`);
});
}

function reservarHotel() {
mostrarHoteis();
const opcao = parseInt(prompt("Escolha o hotel (número): ")) - 1;
if (opcao < 0 || opcao >= hoteis.length) {
console.log("Hotel inválido.");
return;
}

```
const hotelEscolhido = hoteis[opcao];
if (hotelEscolhido.quartosDisponiveis === 0) {
    console.log("Desculpe, não há quartos disponíveis neste hotel.");
    return;
}

const nomeCliente = prompt("Digite o seu nome: ");
const qtdNoites = parseInt(prompt("Digite o número de noites: "));

const valorTotal = qtdNoites * hotelEscolhido.precoPorNoite;

// Registrar reserva
reservas.push({
    cliente: nomeCliente,
    hotel: hotelEscolhido.nome,
    noites: qtdNoites,
    total: valorTotal
});

hotelEscolhido.quartosDisponiveis -= 1;

console.log(`Reserva confirmada para ${nomeCliente} no hotel ${hotelEscolhido.nome} por ${qtdNoites} noites. Total: R$ ${valorTotal}`);
```

}

function listarReservas() {
if (reservas.length === 0) {
console.log("\nNenhuma reserva realizada.");
return;
}

```
console.log("\nReservas realizadas:");
reservas.forEach((r, index) => {
    console.log(`${index + 1} - Cliente: ${r.cliente} | Hotel: ${r.hotel} | Noites: ${r.noites} | Total: R$ ${r.total}`);
});
```

}

// Loop principal
while (true) {
console.log("\n--- Sistema de Reservas ---");
console.log("1 - Reservar hotel");
console.log("2 - Listar reservas");
console.log("3 - Sair");
const escolha = parseInt(prompt("Escolha uma opção: "));

```
if (escolha === 1) {
    reservarHotel();
} else if (escolha === 2) {
    listarReservas();
} else if (escolha === 3) {
    console.log("Saindo do sistema...");
    break;
} else {
    console.log("Opção inválida. Tente novamente.");
}
```

}
