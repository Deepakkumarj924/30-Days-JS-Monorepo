const button = document.getElementById("btn");
const inputBox = document.getElementById("input");

function showNotes() {
  inputBox.innerHTML = localStorage.getItem("notes");
}

function updateStorage() {
  localStorage.setItem("notes", inputBox.innerHTML);
}
showNotes();
button.addEventListener("click", (event) => {
  let p = document.createElement("p");
  p.classList.add("i-box");
  p.setAttribute("contenteditable", "true");
  let img = document.createElement("img");
  img.classList.add("d-img");
  img.src = "bin.png";
  p.append(img);
  inputBox.append(p);
});
inputBox.addEventListener("click", (event) => {
  if (event.target.classList.contains("d-img")) {
    let noteToDelete = event.target.parentElement;
    noteToDelete.remove();
    updateStorage();
  } else {
    notes = document.querySelectorAll(".i-box");
    notes.forEach((nt) => {
      nt.onkeyup = function () {
        updateStorage();
      };
    });
  }
});
document.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    document.execCommand("insertLineBreak");
    event.preventDefault();
  }
});
