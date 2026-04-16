const nextPageBtn = document.getElementById("next-btn");
nextPageBtn.addEventListener("click", function() {
    console.log("Button is clicked");
})

const entranceEl = document.getElementById("title-el");

const entranceText = "WELCOME TO THE ENTRANCE TAPES";
const speed = 200;
let i = 0;

entranceEl.textContent = "";

function typeWriter() {
  if (i < entranceText.length) {
    entranceEl.innerHTML += entranceText.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  } else {
    setTimeout(() => {
        // window.location.href = "Welcome.html";
    }, 2000)
  }
}

typeWriter();