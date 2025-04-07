const trampwhite = document.querySelector(".tramp-white1");
const community = document.querySelector(".pok-community");
const reset = document.querySelector(".reset");
const myzone = document.querySelector(".my-zone");
const opzone = document.querySelector(".opponent-zone");
const field = document.querySelector(".pok-field");


const kinds = ['heart', 'spade', 'clober', 'diamond'];

const values = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];

let deck = [];

kinds.forEach(kind => {
    values.forEach(value => {
        deck.push(`${kind}_${value}`);
    });
});

let gtoscreen = document.querySelector(".gto-screen");

// ゲームの進行状況を表示する関数
function gametext(message) {
    gtoscreen.innerHTML = "";
    let p = document.createElement("p");
    p.className = "cyber-text";
    p.innerHTML = message;
    gtoscreen.appendChild(p);
}

let count = 1;
let myCards = [];
let opCards = [];
let comCards = [];
gametext("プレイヤーは手札を2枚引いてください。");

function drawCard(){
    const randomIndex = Math.floor(Math.random() * deck.length);

    const card = deck.splice(randomIndex, 1)[0];

    if (count === 1 || count === 3){
        myCards.push(card);
        console.log("自身の手札: " + myCards);
    }
    else if (count === 2 || count === 4){
        opCards.push(card);
        console.log("相手の手札: " + opCards);
    }
    else {
        comCards.push(card);
        console.log("コミュニティカード: " + comCards);
    }

    console.log(`引いたカード: ${card}`);
    return card;
}

trampwhite.addEventListener('click', function() {
    if (count === 10) {
        alert("カードを引く回数が上限に達しました。");
    return;
    }
    const card = drawCard();
    const span = document.createElement("span");
    let random = Math.floor(Math.random() * 3);
    if (count === 1 || count === 3){
        span.innerHTML = "<img src=\"./cards/" + `${card}.png`+ "\" class=\"my-card"+count+"\">";

        myzone.appendChild(span);
        count++;
    }
    else if (count === 2 || count === 4){
        span.innerHTML = "<img src=\"./tramp_bl.jpg\" class=\"my-card"+count+"\">";
        opzone.appendChild(span);

        if (count === 4){
            gametext("コミュニティカードを3枚引いてください。");
        }
        count++;
    }
    else if (count <= 9){
        if (count === 7){
            gametext("コミュニティカードを1枚追加で引いてください。");
        }
        else if (count === 8){
            gametext("最後のコミュニティカードを引いてください。");
        }
        else if (count === 9){
            gametext("手札を公開し、勝負してください。");
        }
    
    span.innerHTML = "<img src=\"./cards/" + `${card}.png` +" \" >";

    community.appendChild(span);

    count++;
    if (count === 10) {
        const span = document.createElement("span");
        span.innerHTML= "<input type=\"button\" class=\"fight\" value=\"勝負する！\"></input>";

    field.appendChild(span);

    // 勝負するボタンの機能
document.querySelector(".fight").addEventListener('click', function() {
    console.log("勝負ボタンが押されました");
    const opcards = document.querySelectorAll(".my-card2, .my-card4");
    opcards.forEach(card => {
        card.remove();
    });
    // 相手カードの公開
    const span1 = document.createElement("span");
    span1.innerHTML = `<img src="./cards/${opCards[0]}.png" class="my-card2">`;
    opzone.appendChild(span1);
    const span2 = document.createElement("span");
    span2.innerHTML = `<img src="./cards/${opCards[1]}.png" class="my-card4">`;
    opzone.appendChild(span2);
}, false);
    return;
    }
    console.log(deck);
}}, false);

//リセット機能
reset.addEventListener('click', function() {
    community.innerHTML = "";
    gtoscreen.innerHTML = "";
    gametext("プレイヤーは手札を2枚引いてください。");
    const mycards = document.querySelectorAll(".my-card1, .my-card2, .my-card3, .my-card4, .fight");
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


