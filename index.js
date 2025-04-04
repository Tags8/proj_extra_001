let trampwhite = document.querySelector(".tramp-white1");

let community = document.querySelector(".pok-community");

let cards = new Array(
    "spade_A.png",
    "clover_A.png",
    "dia_A.png",
    "heart_A.png"
);

trampwhite.addEventListener('click', function() {

    let span = document.createElement('span');

    let random = Math.floor(Math.random() * 3);

    span.innerHTML = "<img src=\" "+ cards[random] +" \" width=\"80px\">";

    community.appendChild(span);

}, false);



