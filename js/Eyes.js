let tapeThree = document.getElementById("tape1");
let playBtn = document.getElementById("play-button");


playBtn.addEventListener("click", function() {
    tapeThree.play();
});

tapeThree.addEventListener("ended", function() {
    window.location.href = "../html/Tapes.html";
});