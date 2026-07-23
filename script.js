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

        if (lettera.scrollHeight > lettera.clientHeight) {
            scrollHint.classList.remove("hidden");
        } else {
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

    // AVVIA GIOCO
    play.onclick = () => {

        titleScreen.classList.add("hidden");
        gameScreen.classList.remove("hidden");

    };

    // ======================
    // PLAYER
    // ======================

    const player = document.getElementById("player");

    let x = 255;
    let y = 560;

    const speed = 4;
let frame = 1;
let frameTimer = 0;
let facing = "down";
    window.keys = {};
        // TASTIERA
    document.addEventListener("keydown", (e) => {
        window.keys[e.key] = true;
    });

    document.addEventListener("keyup", (e) => {
        window.keys[e.key] = false;
    });

 // GAME LOOP
function gameLoop() {

    let moving = false;

    if (window.keys["ArrowLeft"]) {
        x -= speed;
        facing = "left";
        moving = true;
    }

    if (window.keys["ArrowRight"]) {
        x += speed;
        facing = "right";
        moving = true;
    }

    if (window.keys["ArrowUp"]) {
        y -= speed;
        facing = "up";
        moving = true;
    }

    if (window.keys["ArrowDown"]) {
        y += speed;
        facing = "down";
        moving = true;
    }

    if (moving) {

        frameTimer++;

        if (frameTimer > 10) {
            frame = (frame === 1) ? 2 : 1;
            frameTimer = 0;
        }

        if (facing === "down") player.src = "assets/davanti-" + frame + ".png";
        if (facing === "up") player.src = "assets/dietro-" + frame + ".png";
        if (facing === "left") player.src = "assets/sinistra-" + frame + ".png";
        if (facing === "right") player.src = "assets/destra-" + frame + ".png";

    } else {

        if (facing === "down") player.src = "assets/davanti-f.png";
        if (facing === "up") player.src = "assets/dietro-f.png";
        if (facing === "left") player.src = "assets/sinistra-f.png";
        if (facing === "right") player.src = "assets/destra-f.png";

    }

    player.style.left = x + "px";
    player.style.top = y + "px";

    requestAnimationFrame(gameLoop);
}

gameLoop();  

    // CONTROLLI TOUCH
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
