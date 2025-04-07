const trampwhite = document.querySelector(".tramp-white1");
const community = document.querySelector(".pok-community");
const reset = document.querySelector(".reset");
const myzone = document.querySelector(".my-zone");

const kinds = ['heart', 'spade', 'clober', 'diamond'];

const values = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];

let deck = [];

kinds.forEach(kind => {
    values.forEach(value => {
        deck.push(`${kind}_${value}`);
    });
});


function gametext(message) {
        
    let gtoscreen = document.querySelector(".gto-screen");
    let p = document.createElement("p");
    p.className = "cyber-text";
    p.innerHTML = message;
    gtoscreen.appendChild(p);
}

function drawCard(){
    const randomIndex = Math.floor(Math.random() * deck.length);

    const card = deck.splice(randomIndex, 1)[0];

    console.log(`引いたカード: ${card}`);
    return card;
}

let count = 1;
gametext("プレイヤーは手札を2枚引いてください。");

trampwhite.addEventListener('click', function() {
    const card = drawCard();
    const span = document.createElement("span");
    let random = Math.floor(Math.random() * 3);
    if (count <= 2){
        span.innerHTML = "<img src=\"./cards/" + `${card}.png`+ "\" class=\"my-card"+count+"\">";

        myzone.appendChild(span);
        if (count === 2){
            gametext("コミュニティカードを3枚引いてください。");
        }
        count++;
        
        
    }
    else if (count <= 7){
        if (count === 5){
            gametext("コミュニティカードを1枚追加で引いてください。");
        }
        else if (count === 6){
            gametext("最後のコミュニティカードを引いてください。");
        }
        else if (count === 7){
            gametext("手札を公開し、勝負してください。");
        }
       
    
    span.innerHTML = "<img src=\"./cards/" + `${card}.png` +" \" >";

    community.appendChild(span);

    count++;
    if (count == 8) {
        alert("カードを引く回数が上限に達しました。");
    }
    console.log(deck);
}

}, false);

//リセット機能
reset.addEventListener('click', function() {
    community.innerHTML = "";
    gtoscreen.innerHTML = "";
    const mycards = document.querySelectorAll(".my-card1, .my-card2");
    mycards.forEach(card => {
        card.remove();
    });
    count = 1;
    deck = [];
    kinds.forEach(kind => {
        values.forEach(value => {
            deck.push(`${kind}_${value}`);
        });
    });
} , false);

console.log(count);

    if (count === 1){
        
    }
    else if (count === 3){
        gametext("コミュニティカードを3枚引いてください。");
    }
    else if (count === 8){
        gametext("ゲームは終了です。");
    }
    else {
        gametext("次のカードを引いてください。");
    }
