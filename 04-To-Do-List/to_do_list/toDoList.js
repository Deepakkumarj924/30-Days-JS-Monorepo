// --- Make sure these selectors are correct and haven't changed ---
const btn = document.querySelector("#f-button");
const input = document.querySelector("form input");
const ul = document.querySelector(".ul");

// --- This block handles adding items ---
btn.addEventListener("click", (event) => {
  event.preventDefault();
  let inputVal = input.value.trim();

  if (inputVal !== "") {
    let newElement = document.createElement("li");
    newElement.classList.add("list-item");
    newElement.innerHTML = `<div class="l-checkbox">
        <input class="checkbox" type="checkbox" />
        <label>${inputVal}</label>
      </div>
      <button class="l-button">\u00d7</button>`;

    ul.append(newElement);
    input.value = "";
    saveData();
    input.focus();
  }
});

// --- This block handles clicks on existing and new items ---
ul.addEventListener("click", (event) => {
  // Logic for deleting
  if (event.target.classList.contains("l-button")) {
    const listItem = event.target.closest(".list-item");
    if (listItem) {
      listItem.remove();
      saveData();
    }
  }
  // Logic for checking/unchecking
  else if (event.target.closest(".l-checkbox")) {
    const listItemToToggle = event.target.closest(".list-item");
    const firstChild = listItemToToggle.firstElementChild;

    if (firstChild) {
      firstChild.classList.toggle("completed");
      const checkbox = firstChild.querySelector(".checkbox");
      if (checkbox) {
        checkbox.checked = firstChild.classList.contains("completed");
        saveData();
      }
    }
  }
});

function saveData() {
  localStorage.setItem("data", ul.innerHTML);
}
function showData() {
  ul.innerHTML = localStorage.getItem("data");
  const completedTasks = ul.querySelectorAll(".l-checkbox.completed");

  completedTasks.forEach((taskDiv) => {
    const checkbox = taskDiv.querySelector(".checkbox");
    if (checkbox) {
      checkbox.checked = true;
    }
  });
}
showData();
