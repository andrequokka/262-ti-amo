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

     document.getElementById("controls").style.display = "flex";
   // posizione iniziale cutscene
x = 190;
y = 570;
inCutscene = true;
};
// ======================
// PLAYER
// ======================

const player = document.getElementById("player");
const andre = document.getElementById("andre");
const dialogBox = document.getElementById("dialogBox");
const dialogText = document.getElementById("dialogText");
const speaker = document.getElementById("speaker");
const leftPortrait = document.getElementById("leftPortrait");
    const rightPortrait = document.getElementById("rightPortrait")
        
    const dialoghi = [
    {
        speaker: "✦ Quokka",
        text: "ciao amore!! 💗",
        face: "assets/andre-innamorata.png"
    },

    {
        speaker: "✦ Quokka",
        text: "finalmente sei arrivato...",
        face: "assets/andre-felice.png"
    },

    {
        speaker: "✦ Quokka",
        text: "ho preparato una sorpresa per te...!",
        face: "assets/andre-imbarazzata.png"
    },

    {
        speaker: "✦ Quokka",
        text: "però uhm...l'ho messa al sicuro e non ricordo il codice",
        face: "assets/andre-neutra.png"
    },

    {
        speaker: "✦ Quokka",
        text: "puoi aiutarmi..?",
        face: "assets/andre-triste.png"
    }
];

let dialogIndex = 0;
    dialogBox.addEventListener("click", () => {

    dialogIndex++;

    if (dialogIndex < dialoghi.length) {

        speaker.textContent = dialoghi[dialogIndex].speaker;
        dialogText.textContent = dialoghi[dialogIndex].text;
        leftPortrait.src = dialoghi[dialogIndex].face;
        leftPortrait.style.width = "90px";
        leftPortrait.style.height = "90px";
    } else {

        dialogBox.classList.add("hidden");

    }

});
let andreX = 0;
let andreY = 0;
const debug = document.getElementById("debug");
let x = 190;
let y = 570;

let inCutscene = false;

const speed = 4;
let frame = 1;
let frameTimer = 0;
let facing = "up";

window.keys = {};

// TASTIERA
document.addEventListener("keydown", (e)=>{
    window.keys[e.key]=true;
});

document.addEventListener("keyup",(e)=>{
    window.keys[e.key]=false;
});

// GAME LOOP
function gameLoop(){

    let moving=false;

    // CUTSCENE ENTRATA
    if(inCutscene){

        y-=2;

        moving=true;
        facing="up";

   if (y <= 350) {

    y = 350;
    inCutscene = false;

    setTimeout(() => {

    dialogIndex = 0;

    speaker.textContent = dialoghi[0].speaker;
    dialogText.textContent = dialoghi[0].text;
    leftPortrait.src = dialoghi[0].face;
    dialogBox.classList.remove("hidden");

}, 1000);
}

    }else{

        if(window.keys["ArrowLeft"]){

            x-=speed;
            facing="left";
            moving=true;

        }

        if(window.keys["ArrowRight"]){

            x+=speed;
            facing="right";
            moving=true;

        }

        if(window.keys["ArrowUp"]){

            y-=speed;
            facing="up";
            moving=true;

        }

        if(window.keys["ArrowDown"]){

            y+=speed;
            facing="down";
            moving=true;

        }

    }

    if(moving){

        frameTimer++;

        if(frameTimer>10){

            frame=(frame===1)?2:1;
            frameTimer=0;

        }

        if(facing==="down") player.src="assets/davanti-"+frame+".png";
        if(facing==="up") player.src="assets/dietro-"+frame+".png";
        if(facing==="left") player.src="assets/sinistra-"+frame+".png";
        if(facing==="right") player.src="assets/destra-"+frame+".png";

    }else{

        if(facing==="down") player.src="assets/davanti-f.png";
        if(facing==="up") player.src="assets/dietro-f.png";
        if(facing==="left") player.src="assets/sinistra-f.png";
        if(facing==="right") player.src="assets/destra-f.png";

    }
player.style.left = x + "px";
player.style.top = y + "px";
andreX = andre.offsetLeft;
andreY = andre.offsetTop;
player.style.zIndex = Math.floor(y);
    
debug.innerHTML = `
X = ${Math.round(x)}
<br>
Y = ${Math.round(y)}
`;
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
