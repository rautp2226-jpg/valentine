const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");
const message = document.getElementById("message");

if (noBtn) {
    noBtn.addEventListener("mouseenter", () => {
        const x = Math.random() * (window.innerWidth - noBtn.offsetWidth);
        const y = Math.random() * (window.innerHeight - noBtn.offsetHeight);
        noBtn.style.left = x + "px";
        noBtn.style.top = y + "px";
    });
}
yesBtn.addEventListener("click", () => {
    window.location.href = "yes.html";
});

const heartsContainer = document.querySelector(".hearts");
function createHeart() {
    if (!heartsContainer) return;

    const heart = document.createElement("div");
    heart.classList.add("heart");
    heart.innerHTML = "💕";

    heart.style.left = Math.random() * 100 + "vw";
    heart.style.fontSize = Math.random() * 20 + 15 + "px";
    heartsContainer.appendChild(heart);
    setTimeout(() => {
        heart.remove();
    },4000);
}
if (heartsContainer){
    setInterval(createHeart,250);
}