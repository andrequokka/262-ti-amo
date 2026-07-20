window.onload = () => {

    const intro = document.getElementById("intro");
    const titleScreen = document.getElementById("titleScreen");

    // Dopo che "andre quokka presenta..." finisce
    setTimeout(() => {

        intro.style.display = "none";

        titleScreen.classList.remove("hidden");

    }, 4000);

};
