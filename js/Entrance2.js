let entranceTape = document.getElementById("entrance-tape");
let playBtn = document.getElementById("play-button");


playBtn.addEventListener("click", function() {
    entranceTape.play();
});

entranceTape.addEventListener("ended", function() {
    window.location.href = "../html/Tapes.html";
});