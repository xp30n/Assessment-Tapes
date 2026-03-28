
let startBtn = document.getElementById("start-btn");

startBtn.addEventListener("click", openTapes);

function openTapes() {
    console.log("Button is clicked");
    window.location.href = "Access.html";
}

document.addEventListener("swup:page:view", () => {
    openTapes();
})