document.addEventListener("DOMContentLoaded", () => {
  const nextPageBtn = document.getElementById("next-btn");
  nextPageBtn.addEventListener("click", function () {
    console.log("Button is clicked");
  });

  const entranceEl = document.getElementById("title-el");

  const entranceText = [
    "WELCOME TO THE ENTRANCE TAPES",
    "CORPUS CONSUMPTION COMPULSION TRANSFIGURATION,",
    "ALSO KNOWN AS C.C.C.T.,",
    "IS THE RESEARCH OF CANNIBALISTIC SUPERNATURAL CHANGES",
    "WITHIN HUMANS.",
    "THIS TAPE IS TO INTRODUCE YOU TO THIS THE RESEARCH",
    "CONDUCTED BY THE SPEAR OF HERMES SUPERNATURAL RESEARCH CENTRE.",
  ];

  const speed = 100;

  let lineIndex = 0;
  let charIndex = 0;
  let isTyping = false;

  entranceEl.innerHTML = "";

  console.log(entranceEl)

  function typeLine() {
    if (lineIndex >= entranceText.length) return;

    isTyping = true;

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
      }
    }

    typeChar();
  }

  document.addEventListener("keydown", (e) => {
    if (e.code === "Space" || e.key === " ") {
      e.preventDefault();

      if (!isTyping) {
        typeLine();
      }
    }
  });
});
