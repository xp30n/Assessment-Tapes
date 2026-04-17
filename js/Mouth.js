let tapeTwo = document.getElementById("tape2");
let playBtn = document.getElementById("play-button");


playBtn.addEventListener("click", function() {
    tapeTwo.play();
});

tapeTwo.addEventListener("ended", function() {
    window.location.href = "../html/Tapes.html";
});