/* =========================
   GET SCREENS
========================= */

const openingScreen = document.getElementById("openingScreen");
const surpriseScreen = document.getElementById("surpriseScreen");
const letterScreen = document.getElementById("letterScreen");
const kentoyScreen = document.getElementById("kentoyScreen");
const finalScreen = document.getElementById("finalScreen");


/* =========================
   GET BUTTONS
========================= */

const surpriseButton = document.getElementById("surpriseButton");
const letterButton = document.getElementById("letterButton");
const oneMoreButton = document.getElementById("oneMoreButton");
const finalButton = document.getElementById("finalButton");


/* =========================
   MUSIC
========================= */

const musicButton = document.getElementById("musicButton");
const backgroundMusic = document.getElementById("backgroundMusic");
const record = document.getElementById("record");


/* =========================
   SCREEN SWITCHER
========================= */

function showScreen(screenToShow) {

    const screens = [
        openingScreen,
        surpriseScreen,
        letterScreen,
        kentoyScreen,
        finalScreen
    ];

    screens.forEach(screen => {
        screen.classList.remove("active");
    });

    screenToShow.classList.add("active");

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}


/* =========================
   OPEN SURPRISE
========================= */

surpriseButton.addEventListener("click", function () {

    showScreen(surpriseScreen);

});


/* =========================
   MUSIC BUTTON
========================= */

musicButton.addEventListener("click", async function () {

    try {

        if (backgroundMusic.paused) {

            await backgroundMusic.play();

            musicButton.innerHTML = "Ⅱ";
            record.classList.add("playing");

        } else {

            backgroundMusic.pause();

            musicButton.innerHTML = "▶";
            record.classList.remove("playing");

        }

    } catch (error) {

        console.error(error);

        alert(
            "Music could not play. Make sure your music file is named music.mp3 and is inside the same folder as index.html."
        );

    }

});


/* =========================
   OPEN LETTER
========================= */

letterButton.addEventListener("click", function () {

    showScreen(letterScreen);

});


/* =========================
   KENTOY MESSAGE
========================= */

oneMoreButton.addEventListener("click", function () {

    showScreen(kentoyScreen);

});


/* =========================
   FINAL MESSAGE
========================= */

finalButton.addEventListener("click", function () {

    showScreen(finalScreen);

});