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

    let x = 80;
    let y = 330;

    const speed = 4;

    const keys = {};

    document.addEventListener("keydown",(e)=>{
        keys[e.key] = true;
    });

    document.addEventListener("keyup",(e)=>{
        keys[e.key] = false;
    });

    function gameLoop(){

        if(keys["ArrowLeft"]) x -= speed;
        if(keys["ArrowRight"]) x += speed;
        if(keys["ArrowUp"]) y -= speed;
        if(keys["ArrowDown"]) y += speed;

        player.style.left = x + "px";
        player.style.top = y + "px";

        requestAnimationFrame(gameLoop);

    }

    gameLoop();

};
