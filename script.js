const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");
const message = document.getElementById("message");

noBtn.addEventListener("mouseenter", () => {
    const maxX = 200;
    const maxY = 100;
    const randomX = Math.floor(Math.random()*maxX);
    const randomY = Math.floor(Math.random()*maxY);
    noBtn.style.left = randomX + "px";
    noBtn.style.top = randomY + "px";
});

yesBtn.addEventListener("click", () => {
    message.innerHTML = "YAYYYY😁😁😁😘😘😘💕💕I KNEW ITT💕!LOVE YOU BABYY😘😘 ";
});