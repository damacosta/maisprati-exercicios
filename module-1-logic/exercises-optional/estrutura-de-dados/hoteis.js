const prompt = require('prompt-sync')({sigint: true});
const { hoteis, idHotelCounter } = require('./data');

function adicionarHotel() {
    const nome = prompt("Nome do hotel: ");
    const cidade = prompt("Cidade: ");
    const quartosTotais = parseInt(prompt("Quantidade de quartos totais: "));

    const hotel = {
        id: idHotelCounter++,
        nome,
        cidade,
        quartosTotais,
        quartosDisponiveis: quartosTotais,
        avaliacoes: []
    };
    hoteis.push(hotel);
    console.log(`Hotel ${nome} adicionado com sucesso!`);
}

function buscarHoteisPorCidade() {
    const cidade = prompt("Digite a cidade para busca: ");
    const encontrados = hoteis.filter(h => h.cidade.toLowerCase() === cidade.toLowerCase());
    if (encontrados.length === 0) {
        console.log("Nenhum hotel encontrado nesta cidade.");
    } else {
        console.log("Hotéis encontrados:");
        encontrados.forEach(h => {
            console.log(`ID: ${h.id} | Nome: ${h.nome} | Quartos disponíveis: ${h.quartosDisponiveis}`);
        });
    }
}

module.exports = { adicionarHotel, buscarHoteisPorCidade };
