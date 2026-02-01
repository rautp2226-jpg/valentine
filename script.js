// ===== YES & NO BUTTON LOGIC =====
const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");
const buttonsArea = document.querySelector(".buttons");

// Move NO button around the question area
if (noBtn && buttonsArea) {
  noBtn.addEventListener("mouseenter", () => {
    const maxX = buttonsArea.clientWidth - noBtn.offsetWidth;
    const maxY = buttonsArea.clientHeight - noBtn.offsetHeight;

    const x = Math.random() * maxX;
    const y = Math.random() * maxY;

    noBtn.style.left = x + "px";
    noBtn.style.top = y + "px";
  });
}

// YES button → open new page
if (yesBtn) {
  yesBtn.addEventListener("click", () => {
    window.location.href = "yes.html";
  });
}

// ===== HEART ANIMATION (WORKS ON ALL PAGES) =====
setInterval(() => {
  const heart = document.createElement("div");
  heart.className = "heart";
  heart.innerText = "💖";

  heart.style.left = Math.random() * 100 + "vw";

  document.body.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 3000);
}, 400);
