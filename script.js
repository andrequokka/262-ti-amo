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
