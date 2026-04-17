let tapeOne = document.getElementById("tape1");
let playBtn = document.getElementById("play-button");


playBtn.addEventListener("click", function() {
    tapeOne.play();
});

tapeOne.addEventListener("ended", function() {
    window.location.href = "../html/Tapes.html";
});