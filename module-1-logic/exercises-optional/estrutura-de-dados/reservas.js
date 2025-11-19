const prompt = require('prompt-sync')({sigint: true});
const { hoteis, reservas, idReservaCounter } = require('./data');

function fazerReserva() {
    const { buscarHoteisPorCidade } = require('./hoteis');
    buscarHoteisPorCidade();
    const idHotel = parseInt(prompt("Escolha o ID do hotel para reservar: "));
    const hotel = hoteis.find(h => h.id === idHotel);

    if (!hotel) {
        console.log("Hotel inválido.");
        return;
    }
    if (hotel.quartosDisponiveis === 0) {
        console.log("Não há quartos disponíveis neste hotel.");
        return;
    }

    const nomeCliente = prompt("Digite o nome do cliente: ");
    const reserva = {
        idReserva: idReservaCounter++,
        idHotel: hotel.id,
        nomeCliente
    };
    reservas.push(reserva);
    hotel.quartosDisponiveis -= 1;
    console.log(`Reserva realizada com sucesso para ${nomeCliente} no hotel ${hotel.nome}.`);
}

function cancelarReserva() {
    const idReserva = parseInt(prompt("Digite o ID da reserva a cancelar: "));
    const index = reservas.findIndex(r => r.idReserva === idReserva);
    if (index === -1) {
        console.log("Reserva não encontrada.");
        return;
    }
    const reserva = reservas[index];
    const hotel = hoteis.find(h => h.id === reserva.idHotel);
    if (hotel) hotel.quartosDisponiveis += 1;
    reservas.splice(index, 1);
    console.log("Reserva cancelada com sucesso.");
}

function listarReservas() {
    if (reservas.length === 0) {
        console.log("Nenhuma reserva cadastrada.");
        return;
    }
    console.log("Lista de reservas:");
    reservas.forEach(r => {
        const hotel = hoteis.find(h => h.id === r.idHotel);
        console.log(`ID Reserva: ${r.idReserva} | Cliente: ${r.nomeCliente} | Hotel: ${hotel.nome} | Cidade: ${hotel.cidade}`);
    });
}

module.exports = { fazerReserva, cancelarReserva, listarReservas };
