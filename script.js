window.onload = () => {

    const intro = document.getElementById("intro");
    const titleScreen = document.getElementById("titleScreen");
    const menuScreen = document.getElementById("menuScreen");

    const play = document.getElementById("play");
    const options = document.getElementById("options");
    const back = document.getElementById("back");

    // Intro iniziale
    setTimeout(() => {
        intro.style.display = "none";
        titleScreen.classList.remove("hidden");
    }, 4000);

    // Apri menu
    options.onclick = () => {
        titleScreen.classList.add("hidden");
        menuScreen.classList.remove("hidden");
    };

    // Torna indietro
    back.onclick = () => {
        menuScreen.classList.add("hidden");
        titleScreen.classList.remove("hidden");
    };

};
