window.onload = () => {

    const intro = document.getElementById("intro");
    const titleScreen = document.getElementById("titleScreen");
    const menuScreen = document.getElementById("menuScreen");
    const gameScreen = document.getElementById("gameScreen");

    const play = document.getElementById("play");
    const options = document.getElementById("options");
    const back = document.getElementById("back");

const lettera = document.getElementById("lettera");
const scrollHint = document.getElementById("scrollHint");

    // Intro iniziale
    setTimeout(() => {
        intro.style.display = "none";
        titleScreen.classList.remove("hidden");
    }, 4000);

    // Apri menu
    options.onclick = () => {
        titleScreen.classList.add("hidden");
        menuScreen.classList.remove("hidden");
        
        if (lettera.scrollHeight > lettera.clientHeight) {
    scrollHint.classList.remove("hidden");
} else {
    scrollHint.classList.add("hidden");
}
    };

    // Torna indietro
    back.onclick = () => {
        menuScreen.classList.add("hidden");
        titleScreen.classList.remove("hidden");
    };

    // INIZIA GIOCO
    play.onclick = () => {
        titleScreen.classList.add("hidden");
        gameScreen.classList.remove("hidden");
    };
lettera.addEventListener("scroll", () => {
    scrollHint.classList.add("hidden");
});
};

// ====================
// MOVIMENTO FEDE
// ====================

const player = document.getElementById("player");

let x = 80;
let y = 330;
const speed = 4;

const keys = {};

document.addEventListener("keydown", (e) => {
    keys[e.key.toLowerCase()] = true;
});

document.addEventListener("keyup", (e) => {
    keys[e.key.toLowerCase()] = false;
});

function movePlayer() {

    if (keys["w"] || keys["arrowup"]) y -= speed;
    if (keys["s"] || keys["arrowdown"]) y += speed;
    if (keys["a"] || keys["arrowleft"]) x -= speed;
    if (keys["d"] || keys["arrowright"]) x += speed;

    player.style.left = x + "px";
    player.style.top = y + "px";

    requestAnimationFrame(movePlayer);
}

movePlayer();
