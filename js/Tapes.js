// :::::::::::::::::::::::::::::::::::::::::::::::::::::
// ::                  BUTTON IDS                     ::
// :::::::::::::::::::::::::::::::::::::::::::::::::::::

const skinBtn = document.getElementById("skin-btn");
const mouthBtn = document.getElementById("mouth-btn");
const eyesBtn = document.getElementById("eyes-btn");
const speechBtn = document.getElementById("speech-btn");

const buttons = document.getElementById("vhs-btns");

const vhsPlayer = document.getElementById("vhs-player");

// :::::::::::::::::::::::::::::::::::::::::::::::::::::
// ::                 EVENT LISTENERS                 ::
// :::::::::::::::::::::::::::::::::::::::::::::::::::::

skinBtn.addEventListener("click", greenButton);
mouthBtn.addEventListener("click", yellowButton);
eyesBtn.addEventListener("click", orangeButton);
speechBtn.addEventListener("click", redButton);

// :::::::::::::::::::::::::::::::::::::::::::::::::::::
// ::                  FUNCTIONS                      ::
// :::::::::::::::::::::::::::::::::::::::::::::::::::::

function greenButton() {
    console.log("GREEN BUTTON IS CLICKED");
    vhsPlayer.play();
}

function yellowButton() {
    console.log("YELLOW BUTTON IS CLICKED");
    vhsPlayer.play();
}

function orangeButton() {
    console.log("ORANGE BUTTON IS CLICKED");
    vhsPlayer.play();
}

function redButton() {
    console.log("RED BUTTON IS CLICKED");
    vhsPlayer.play();
}

