let tapeFour = document.getElementById("tape4");
let playBtn = document.getElementById("play-button");


playBtn.addEventListener("click", function() {
    tapeFour.play();
});

tapeFour.addEventListener("ended", function() {
    window.location.href = "../html/Tapes.html";
});