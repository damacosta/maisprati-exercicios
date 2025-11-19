# Sistema de Gerenciamento de Hotéis e Reservas

Este projeto é um sistema simples de gerenciamento de hotéis e reservas, com foco no uso de estruturas de dados e implementação de regras básicas de negócios. Ele permite adicionar hotéis, gerenciar reservas, buscar hotéis por cidade, e realizar operações essenciais de check-in, check-out e avaliações.

## Estrutura de Dados

### Hotel
Cada hotel é representado como um objeto com as seguintes propriedades:
- `id`: Identificador único do hotel.
- `nome`: Nome do hotel.
- `cidade`: Cidade onde o hotel está localizado.
- `quartosTotais`: Número total de quartos do hotel.
- `quartosDisponiveis`: Número de quartos disponíveis para reserva.
- `avaliacoes` (opcional): Lista de avaliações dos hóspedes (caso implementado o desafio opcional).

### Reserva
Cada reserva é representada como um objeto contendo:
- `idReserva`: Identificador único da reserva.
- `idHotel`: Identificador do hotel relacionado.
- `nomeCliente`: Nome do cliente que fez a reserva.

---

## Funcionalidades

- **Adicionar Hotéis**
  - Permite que o usuário cadastre novos hotéis no sistema.

- **Buscar Hotéis por Cidade**
  - Permite listar todos os hotéis disponíveis em uma cidade específica.

- **Fazer Reserva**
  - Permite reservar um quarto em um hotel, diminuindo a quantidade de quartos disponíveis.

- **Cancelar Reserva**
  - Permite cancelar uma reserva, aumentando a quantidade de quartos disponíveis no hotel correspondente.

- **Listar Reservas**
  - Exibe todas as reservas, incluindo detalhes do hotel relacionado e do cliente.

---

## Regras de Negócio

- Só é possível fazer uma reserva se houver quartos disponíveis no hotel.
- As reservas são identificadas por um ID único e sempre associadas a um único hotel.

---

## Desafios Adicionais (Opcionais)

- **Check-in e Check-out**
  - Funções que modificam a disponibilidade de quartos conforme os hóspedes entram e saem do hotel.

- **Relatórios de Ocupação**
  - Geração de relatórios sobre a ocupação dos quartos em um hotel ou período.

- **Avaliação dos Hotéis**
  - Permite que o usuário avalie o hotel após a estadia, armazenando as avaliações dentro do objeto do hotel.

---

## Exemplo de Estrutura

```js
// Exemplo de um hotel
const hotel = {
  id: 1,
  nome: "Hotel Copacabana",
  cidade: "Rio de Janeiro",
  quartosTotais: 100,
  quartosDisponiveis: 80,
  avaliacoes: [
    {
      cliente: "João",
      nota: 5,
      comentario: "Excelente estadia!"
    }
  ]
};

// Exemplo de uma reserva
const reserva = {
  idReserva: 101,
  idHotel: 1,
  nomeCliente: "Maria"
};
```

---

## Como Utilizar

1. Instale as dependências necessárias (se houver).
2. Execute o script principal para iniciar o sistema (exemplo: `node index.js`).
3. Utilize as funções implementadas para adicionar hotéis, buscar hotéis por cidade, fazer/cancelar reservas, etc.

---

## Observações

- Personalize conforme necessário para adicionar mais funções ou adaptar os desafios opcionais.
- Projetado para ser usado como base em estudos de estruturas de dados, lógica de programação e princípios de sistemas gerenciais simples.

*💻 Este projeto foi desenvolvido por Danielle Costa, como parte da atividade do curso de Desenvolvimento FullStack da +PraTi.*
