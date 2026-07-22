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

    // INTRO
    setTimeout(() => {
        intro.style.display = "none";
        titleScreen.classList.remove("hidden");
    }, 4000);

    // MENU
    options.onclick = () => {

        titleScreen.classList.add("hidden");
        menuScreen.classList.remove("hidden");

        if(lettera.scrollHeight > lettera.clientHeight){
            scrollHint.classList.remove("hidden");
        }else{
            scrollHint.classList.add("hidden");
        }

    };

    // TORNA
    back.onclick = () => {
        menuScreen.classList.add("hidden");
        titleScreen.classList.remove("hidden");
    };

    lettera.addEventListener("scroll", () => {
        scrollHint.classList.add("hidden");
    });

    // GIOCO
    play.onclick = () => {

        titleScreen.classList.add("hidden");
        gameScreen.classList.remove("hidden");

    };

    // ======================
    // MOVIMENTO FEDE
    // ======================

    const player = document.getElementById("player");

    let x = 210;
    let y = 620;

    const speed = 4;

    window.keys = {};
document.addEventListener("keydown",(e)=>{
    window.keys[e.key] = true;
});

document.addEventListener("keyup",(e)=>{
    window.keys[e.key] = false;
});

function gameLoop(){

    if(y < 620){

        y -= 2;

    }else{

        if(window.keys["ArrowLeft"]) x -= speed;
        if(window.keys["ArrowRight"]) x += speed;
        if(window.keys["ArrowUp"]) y -= speed;
        if(window.keys["ArrowDown"]) y += speed;

    }

    player.style.left = x + "px";
    player.style.top = y + "px";

    requestAnimationFrame(gameLoop);

}

gameLoop();

const up = document.getElementById("up");
const down = document.getElementById("down");
const left = document.getElementById("left");
const right = document.getElementById("right");

up.addEventListener("touchstart", () => window.keys["ArrowUp"] = true);
up.addEventListener("touchend", () => window.keys["ArrowUp"] = false);
up.addEventListener("touchcancel", () => window.keys["ArrowUp"] = false);

down.addEventListener("touchstart", () => window.keys["ArrowDown"] = true);
down.addEventListener("touchend", () => window.keys["ArrowDown"] = false);
down.addEventListener("touchcancel", () => window.keys["ArrowDown"] = false);

left.addEventListener("touchstart", () => window.keys["ArrowLeft"] = true);
left.addEventListener("touchend", () => window.keys["ArrowLeft"] = false);
left.addEventListener("touchcancel", () => window.keys["ArrowLeft"] = false);

right.addEventListener("touchstart", () => window.keys["ArrowRight"] = true);
right.addEventListener("touchend", () => window.keys["ArrowRight"] = false);
right.addEventListener("touchcancel", () => window.keys["ArrowRight"] = false);
};
