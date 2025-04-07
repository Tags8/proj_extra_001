const trampwhite = document.querySelector(".tramp-white1");
const community = document.querySelector(".pok-community");
const reset = document.querySelector(".reset");

const kinds = ['heart', 'spade', 'clober', 'diamond'];

const values = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];

let deck = [];

kinds.forEach(kind => {
    values.forEach(value => {
        deck.push(`${kind}_${value}`);
    });
});

function drawCard(){
    const randomIndex = Math.floor(Math.random() * deck.length);

    const card = deck.splice(randomIndex, 1)[0];

    console.log(`引いたカード: ${card}`);
    return card;
}

let count = 0;

trampwhite.addEventListener('click', function() {

    const card = drawCard();
    if (count <= 4){
    const span = document.createElement("span");
    let random = Math.floor(Math.random() * 3);

    span.innerHTML = "<img src=\"./cards/" + `${card}.png` +" \" >";

    community.appendChild(span);

    count++;
    if (count == 5) {
        alert("You have reached the maximum number of cards.");
    }
    console.log(deck);
}

}, false);

reset.addEventListener('click', function() {
    community.innerHTML = "";
    count = 0;
    deck = [];
    kinds.forEach(kind => {
        values.forEach(value => {
            deck.push(`${kind}_${value}`);
        });
    });
} , false);



