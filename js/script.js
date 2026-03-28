import Swup from "swup";

const swup = new Swup();

let startBtn = document.getElementById("start-btn");

startBtn.addEventListener("click", openTapes);

function openTapes() {
    console.log("Button is clicked");
    window.location.href = "Tapes.html";
}