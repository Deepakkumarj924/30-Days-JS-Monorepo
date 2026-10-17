let logoBtn = document.getElementById("mode-icon-div");
let img = document.getElementById("mode-icon");
let body = document.querySelector("body");
logoBtn.addEventListener("click", () => {
  if (img.src.includes("sun.png")) {
    img.src = `moon.png`;
    body.classList.toggle("dark-mode");
  } else {
    img.src = `sun.png`;
    body.classList.toggle("dark-mode");
  }
});
