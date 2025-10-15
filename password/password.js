const eyeBtn = document.getElementById("icon");
let input = document.getElementById("password");
let inputDiv = document.querySelector(".input-div");
let icon = document.getElementById("eye");
let msg = document.getElementById("msg");
let msgType = document.getElementById("msg-type");
eyeBtn.addEventListener("click", () => {
  if (input.type === "password") {
    input.type = "text";
    icon.classList.remove("fa-eye-slash");
    icon.classList.add("fa-eye");
  } else {
    input.type = "password";
    icon.classList.remove("fa-eye");
    icon.classList.add("fa-eye-slash");
  }
});

input.addEventListener("input", () => {
  if (input.value.length > 0) {
    msg.style.display = "block";

    if (input.value.length < 5) {
      msg.style.color = "rgb(252, 43, 20)";
      msgType.innerHTML = "weak";

      inputDiv.classList.remove("yellow");
      inputDiv.classList.remove("green");
      inputDiv.classList.add("red");
    }
    if (input.value.length < 8 && input.value.length > 4) {
      msg.style.color = "rgba(254, 254, 63, 1)";
      msgType.innerHTML = "medium";

      inputDiv.classList.remove("red");
      inputDiv.classList.remove("green");
      inputDiv.classList.add("yellow");
    }
    if (input.value.length < 12 && input.value.length >= 8) {
      msg.style.color = "rgb(60, 189, 0)";
      msgType.innerHTML = "strong";

      inputDiv.classList.remove("red");
      inputDiv.classList.remove("yellow");
      inputDiv.classList.add("green");
    }
  }
});
