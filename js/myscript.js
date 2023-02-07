// creo il mio array con i contenuti per il carosello
const images = [
    {
        title: 'Marvel\'s Spiderman Miles Morale',
        text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
    }, {
        title: 'Ratchet & Clank: Rift Apart',
        text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
    }, {
        title: 'Fortnite',
        text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
    }, {
        title: 'Stray',
        text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
    }, {
        title: 'Marvel\'s Avengers',
        text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
    }
];

// prendo il mio carosello
const corouselEl = document.getElementById("carouselBig");

// prendo la mia freccia NEXT
const nextEl = document.getElementById("arrow-next");
// dichiaro una variabile per capire in che posizione è il mio carosello
let currentPosition = 0;
// dichiaro una variabile per capire se sono nel range del carosello
const maxPosition = 4;

nextEl.addEventListener(
    "click",
    function () {
        // aggiungo il click
        currentPosition++;
        // controllo di essere nel range del carosello
        if (currentPosition > maxPosition) {
            currentPosition = 0;
        }
        // chiamo la funzione per decidere cosa mostrare
        positionCarouselToDecide(currentPosition);
        console.log(currentPosition);

        // cambio la scritta in base alla posizione
        images.forEach(positionTextToDecide);
    }
)

// prendo la mia freccia PREV
const prevEl = document.getElementById("arrow-prev");

prevEl.addEventListener(
    "click",
    function () {
        // rimuovo il click
        currentPosition--;
        console.log(currentPosition);
        // controllo di essere nel range del carosello
        if (currentPosition < 0) {
            currentPosition = maxPosition;
        }
        // chiamo la funzione per decidere cosa mostrare
        positionCarouselToDecide(currentPosition);
        console.log(currentPosition);

        // cambio la scritta in base alla posizione
        images.forEach(positionTextToDecide);
    }
)

function positionCarouselToDecide(position) {
    // scelgo l'immagine di sfondo
    if (position == 0) {
        corouselEl.classList.remove("backgroundFIVE", "backgroundTWO");
        corouselEl.classList.add("backgroundONE");
    } else if (position == 1) {
        corouselEl.classList.remove("backgroundONE", "backgroundTHREE");
        corouselEl.classList.add("backgroundTWO");
    } else if (position == 2) {
        corouselEl.classList.remove("backgroundTWO", "backgroundFOUR");
        corouselEl.classList.add("backgroundTHREE");
    } else if (position == 3) {
        corouselEl.classList.remove("backgroundTHREE", "backgroundFIVE");
        corouselEl.classList.add("backgroundFOUR");
    } else if (position == 4) {
        corouselEl.classList.remove("backgroundFOUR", "backgroundONE");
        corouselEl.classList.add("backgroundFIVE");
    }
}

function positionTextToDecide(game, index) {
    // scelgo l'immagine di sfondo
    if (index == currentPosition) {
        corouselEl.innerHTML = `<h2>${game.title}</h2><p>${game.text}</p>`
    }
}