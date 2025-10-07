/*
    Jogadores:
*/
const jogadores = [
    {
        nome: "Bruno Alcantara",
        posicao: "Ala",
        foto: "img/jogadores/bruno-alcantara.png"
    },
    {
        nome: "Pedro Zimerman",
        posicao: "Pivô",
        foto: "img/jogadores/pedro.png"
    },
    {
        nome: "Luis Carniel",
        posicao: "Ala",
        foto: "img/jogadores/luis.png"
    },
    {
        nome: "Rafael Santos",
        posicao: "Ala",
        foto: "img/jogadores/rafael.png"
    },
    {
        nome: "Andre Pereira",
        posicao: "Ala/Pivô",
        foto: "img/jogadores/andre.png"
    },
    {
        nome: "Matheus Santos",
        posicao: "Ala/Fixo",
        foto: "img/jogadores/matheus.png"
    },
    {
        nome: "Cleiton Oliveira",
        posicao: "Ala/Fixo",
        foto: "img/jogadores/cleitinho.png"
    },
    {
        nome: "Volnei Santos",
        posicao: "Ala",
        foto: "img/jogadores/volnei.png"
    },
    {
        nome: "Alex Wollmann",
        posicao: "Ala",
        foto: "img/jogadores/alex.png"
    },
    {
        nome: "Carlos Palm",
        posicao: "Goleiro",
        foto: "img/jogadores/carlos.png"
    },
    {
        nome: "Vonei Miranda",
        posicao: "Goleiro",
        foto: "img/jogadores/vonei.png"
    }
];

/*
    Comissão:
*/
const comissao = [
    {
        nome: "Anderson Nass",
        funcao: "Técnico",
        foto: "img/comissao/anderson-nass.png"
    },
    {
        nome: "Vinicius Beuren",
        funcao: "Auxiliar Técnico",
        foto: "img/comissao/vinicius.png"
    },
    {
        nome: "Ariel Ribeiro",
        funcao: "Massagista",
        foto: "img/comissao/ariel.png"
    }
];

/*
    Títulos:
*/
const titulos = [
    {
        colocacao: "5 lugar",
        ano: 2023,
        foto: "img/temporada/2023.png"
    },
    {
        colocacao: "3 lugar",
        ano: 2024,
        foto: "img/temporada/2024.jpg"
    }
]

/*
    Função para adicionar Cards nos Containers:
*/
function exibir(lista, idDestino, idCard) {
    const container = document.getElementById(idDestino);
    container.innerHTML = "";

    lista.forEach(item => {
        const card = document.createElement("div");
        card.classList.add(idCard);

        card.innerHTML = `
            <img src="${item.foto}" alt="${item.nome || item.colocacao}">
            <h3>${item.nome || item.colocacao}</h3>
            <p>${item.posicao || item.funcao || item.ano}</p>
        `;

        container.appendChild(card);
    });
}

/*
    Insere os Cards nos Containers:
*/
exibir(jogadores, "lista-jogadores", "card");
exibir(comissao, "lista-comissao", "card")
exibir(titulos, "lista-titulos", "card-titulo")