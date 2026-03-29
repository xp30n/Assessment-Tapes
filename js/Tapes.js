let skinBtn = document.getElementById("skin-btn");
let mouthBtn = document.getElementById("mouth-btn");
let eyesBtn = document.getElementById("eyes-btn");
let speechBtn = document.getElementById("speech-btn");

let buttons = document.getElementById("vhs-btns");

skinBtn.addEventListener("click", greenButton);
mouthBtn.addEventListener("click", yellowButton);
eyesBtn.addEventListener("click", orangeButton);
speechBtn.addEventListener("click", redButton);

function greenButton() {
    console.log("GREEN BUTTON IS CLICKED");
}

function yellowButton() {
    console.log("YELLOW BUTTON IS CLICKED");
}

function orangeButton() {
    console.log("ORANGE BUTTON IS CLICKED");
}

function redButton() {
    console.log("RED BUTTON IS CLICKED");
}