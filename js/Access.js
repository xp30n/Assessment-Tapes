const accessEl = document.getElementById("title-el");

const accessText = "ACCESS GRANTED...";
const speed = 250;
let i = 0;

accessEl.textContent = "";

function typeWriter() {
  if (i < accessText.length) {
    accessEl.innerHTML += accessText.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  } else {
    setTimeout(() => {
        window.location.href = "Tapes.html";
    }, 2000)
  }
}

typeWriter();
