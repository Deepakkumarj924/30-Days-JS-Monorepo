const input = document.getElementById("input");
const btn = document.getElementById("btn");
const display = document.getElementById("qr");
const img = document.getElementById("qr-img");
display.style.margin = "10px";
btn.addEventListener("click", (event) => {
  let text = input.value;

  if (text !== "") {
    display.style.height = "200px";
    display.style.margin = "30px";
    img.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${text}`;
  } else {
    display.style.height = "0px";
    display.style.margin = "10px";
  }
});
