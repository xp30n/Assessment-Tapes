let skinBtn = document.getElementById("skin-btn");
let mouthBtn = document.getElementById("mouth-btn");
let eyesBtn = document.getElementById("eyes-btn");
let speechBtn = document.getElementById("speech-btn");

let buttons = document.getElementById("vhs-btns");

skinBtn.addEventListener("click", buttonLog);
mouthBtn.addEventListener("click", buttonLog);
eyesBtn.addEventListener("click", buttonLog);
speechBtn.addEventListener("click", buttonLog);

function buttonLog() {
    console.log("BUTTON IS CLICKED");
}