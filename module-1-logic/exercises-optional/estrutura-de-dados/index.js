const prompt = require('prompt-sync')({sigint: true});
const { adicionarHotel, buscarHoteisPorCidade } = require('./hoteis');
const { fazerReserva, cancelarReserva, listarReservas } = require('./reservas');

while (true) {
    console.log("\n--- Sistema de Reservas de Hotéis ---");
    console.log("1 - Adicionar hotel");
    console.log("2 - Buscar hotéis por cidade");
    console.log("3 - Fazer reserva");
    console.log("4 - Cancelar reserva");
    console.log("5 - Listar reservas");
    console.log("6 - Sair");

    const opcao = parseInt(prompt("Escolha uma opção: "));

    switch (opcao) {
        case 1: adicionarHotel(); break;
        case 2: buscarHoteisPorCidade(); break;
        case 3: fazerReserva(); break;
        case 4: cancelarReserva(); break;
        case 5: listarReservas(); break;
        case 6: console.log("Saindo do sistema..."); process.exit();
        default: console.log("Opção inválida.");
    }
}
