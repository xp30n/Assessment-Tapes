const nextPageBtn = document.getElementById("next-btn");

nextPageBtn.style.opacity = 0;

const entranceEl = document.getElementById("title-el");

const entranceText = [
  "WELCOME TO THE ENTRANCE TAPES",
  "CORPUS CONSUMPTION COMPULSION TRANSFIGURATION,",
  "ALSO KNOWN AS C.C.C.T.,",
  "IS THE RESEARCH OF CANNIBALISTIC SUPERNATURAL CHANGES",
  "WITHIN HUMANS.",
  "THIS TAPE IS TO INTRODUCE YOU TO THE RESEARCH",
  "CONDUCTED BY THE SPEAR OF HERMES SUPERNATURAL RESEARCH CENTRE.",
];

const speed = 100;

let lineIndex = 0;
let charIndex = 0;
let isTyping = false;

entranceEl.innerHTML = "";

// console.log(entranceEl);

function typeLine() {
  if (lineIndex >= entranceText.length) return;

  isTyping = true;

  const isLastLine = lineIndex === entranceText.length - 1;

  function typeChar() {
    if (charIndex < entranceText[lineIndex].length) {
      entranceEl.innerHTML += entranceText[lineIndex][charIndex];
      charIndex++;
      setTimeout(typeChar, speed);
    } else {
      entranceEl.innerHTML += "<br><br>";
      charIndex = 0;
      lineIndex++;
      isTyping = false;

      if (lineIndex >= entranceText.length) {
        nextPageBtn.style.opacity = 1;
      }
    }
  }

  typeChar();
}

nextPageBtn.addEventListener("click", function () {
  window.location.href = "../html/Tapes.html"
  console.log("Button is clicked");
});

document.addEventListener("keydown", (e) => {
  if (e.code === "Space" || e.key === " ") {
    e.preventDefault();

    if (!isTyping) {
      typeLine();
    }
  }
});
