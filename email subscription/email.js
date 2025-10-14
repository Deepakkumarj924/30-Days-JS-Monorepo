const scriptURL =
  "https://script.google.com/macros/s/AKfycbxpvTdkAaaxx8rgl5mx2atTel6-54R14HvrXc2OqY3zK32xnLdgo-Bl0LotIKtlrc1IHA/exec";
const form = document.forms["submit-to-google-sheet"];
const successMsg = document.getElementById("span");
const input = document.getElementById("input");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then((response) => {
      successMsg.innerHTML = "Thank You For Subscribing!";
      successMsg.style.color = "rgb(1, 184, 44)";
      setTimeout(function () {
        successMsg.innerHTML = "";
      }, 5000);
    })
    .catch((error) => {
      successMsg.innerHTML = "Submission Failed!";
      successMsg.style.color = "red";
      setTimeout(function () {
        successMsg.innerHTML = "";
      }, 5000);
    });
  input.value = "";
});
