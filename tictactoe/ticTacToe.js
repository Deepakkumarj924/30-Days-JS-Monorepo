let boxes = document.querySelectorAll(".box");
let flag = true;
const el = (event) => {
  const box = event.target;
  if (box.innerText != "") {
    return;
  }
  if (flag) {
    box.innerText = "X";
    flag = false;
  } else {
    box.innerText = "O";
    flag = true;
  }
  checkWinner();
};

boxes.forEach((box) => {
  box.addEventListener("click", el);
});

let reset = (event) => {
  boxes.forEach((box) => {
    box.innerText = "";
    let divWinner = document.querySelector(".showWinner");
    divWinner.classList.add("hidden");
    box.addEventListener("click", el);
  });
};
let newgame = () => {
  boxes.forEach((box) => {
    box.innerText = "";
  });
  flag = true;
  let divWinner = document.querySelector(".showWinner");
  divWinner.classList.add("hidden");
  box.addEventListener("click", el);
};
let resetButton = document.querySelector(".reset");
resetButton.addEventListener("click", reset);

let newGame = document.querySelector(".newgame");
newGame.addEventListener("click", newgame);

let winCondition = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];
boxes.forEach((box, index) => {
  console.log(index);
});

const checkWinner = () => {
  for (const element of winCondition) {
    let pos1 = boxes[element[0]].innerText;
    let pos2 = boxes[element[1]].innerText;
    let pos3 = boxes[element[2]].innerText;
    if (pos1 != "" && pos2 != "" && pos3 != "") {
      if (pos1 === pos2 && pos2 === pos3) {
        showWinner(pos1);
        disableboxes();
      }
    }
  }
};
const showWinner = (pos1) => {
  let divWinner = document.querySelector(".showWinner");
  divWinner.classList.remove("hidden");
  divWinner.innerText = `WINNER : ${pos1}`;
};
const disableboxes = () => {
  boxes.forEach((box) => {
    box.removeEventListener("click", el);
  });
};
