let nextBtn = document.getElementById("temp-btn");
let entranceTape = document.getElementById("entrance-tape");
let playBtn = document.getElementById("play-button");

nextBtn.addEventListener("click", function() {
    // console.log("Button is clicked");
    window.location.href = "../html/Tapes.html";
})

playBtn.addEventListener("click", function() {
    entranceTape.play();
});

// ! ADD ENTRANCE TAPE PAGE 