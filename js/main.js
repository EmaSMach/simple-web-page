let datos = [
    {
        img: "/img/artesano.JPG",
        alt: "artesano",
        title: "I like the body, I like to design everything to do with the body.",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint asperiores aspernatur error libero repellat, quas culpa et tempora tempore laboriosam ad cum eum dolores adipisci id, maxime soluta perferendis inventore?"
    },
    {
        img: "/img/biker.JPG",
        alt: "girl-on-a-bike",
        title: "Graphic design will save the world right after rock and roll does..",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint asperiores aspernatur error libero repellat, quas culpa et tempora tempore laboriosam ad cum eum dolores adipisci id, maxime soluta perferendis inventore?"
    },
    {
        img: "/img/cuero.JPG",
        alt: "cuero",
        title: "Recognizing the need is the primary condition for design.",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint asperiores aspernatur error libero repellat, quas culpa et tempora tempore laboriosam ad cum eum dolores adipisci id, maxime soluta perferendis inventore?"
    },
    {
        img: "/img/hombre-computadora.JPG",
        alt: "hombre-computadora",
        title: "At a meta level, design connects the dots between more survival and humanism.",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint asperiores aspernatur error libero repellat, quas culpa et tempora tempore laboriosam ad cum eum dolores adipisci id, maxime soluta perferendis inventore?"
    }
];


function addCard(dato) {
    // creating elements
    let card = document.createElement("div");
    let cardImg = document.createElement("img");
    let cardBody = document.createElement("div");
    let cardTitle = document.createElement("h2");
    let cardText = document.createElement("p");
    // building the card structure
    card.appendChild(cardImg);
    card.appendChild(cardBody);
    cardBody.appendChild(cardTitle);
    cardBody.appendChild(cardText);
    // adding classes
    card.classList.add("card");
    cardBody.classList.add("card-body");
    cardImg.classList.add("card-img");
    cardTitle.classList.add("card-title");
    cardText.classList.add("card-text");
    // adding data
    cardImg.src = dato.img;
    cardImg.alt = dato.alt;
    cardTitle.innerText = dato.title;
    cardText.innerText = dato.text;
    return card;
}


const container = document.getElementById("main-container");


function cargar() {
    for (dato of datos) {
        container.append(
            addCard(dato)
        )
    }
};


document.addEventListener("DOMContentLoaded", () =>  cargar(datos), false);
