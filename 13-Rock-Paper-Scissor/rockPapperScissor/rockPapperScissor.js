let userScore = 0;
let computerScore = 0;
let count = 0;
let ccount = 0;
let images = document.querySelectorAll(".img");

images.forEach((img) => {
  img.addEventListener("click", (event) => {
    let clickedImageId = event.currentTarget.getAttribute("id");
    let bool = winner(clickedImageId);
    if (bool === 1) {
      let p = document.querySelector(".p");
      p.innerText = "You Win! Rock beats scissor";
      ++count;
      let scoreCount = document.querySelector(".uScore");
      scoreCount.innerText = `${count}`;
    } else if (bool === 2) {
      let p = document.querySelector(".p");
      p.innerText = "You Win! paper beats Rock ";
      ++count;
      let scoreCount = document.querySelector(".uScore");
      scoreCount.innerText = `${count}`;
    } else if (bool === 3) {
      let p = document.querySelector(".p");
      p.innerText = "You Win! scissor beats paper";
      ++count;
      let scoreCount = document.querySelector(".uScore");
      scoreCount.innerText = `${count}`;
    } else if (bool === 4) {
      let p = document.querySelector(".p");
      p.innerText = "You Lose! Rock beats Scissor";
      let scoreCcount = document.querySelector(".cScore");
      ++ccount;
      scoreCcount.innerText = `${ccount}`;
    } else if (bool === 5) {
      let p = document.querySelector(".p");
      p.innerText = "You Lose! paper beats rock";
      let scoreCcount = document.querySelector(".cScore");
      ++ccount;
      scoreCcount.innerText = `${ccount}`;
    } else if (bool === 6) {
      let p = document.querySelector(".p");
      p.innerText = "You Lose! scissor beats paper";
      let scoreCcount = document.querySelector(".cScore");
      ++ccount;
      scoreCcount.innerText = `${ccount}`;
    } else {
      let p = document.querySelector(".p");
      p.innerText = "Draw";
    }
    console.log(clickedImageId);
  });
});

const winner = (user) => {
  let winNum = Math.floor(Math.random() * 3);
  console.log(winNum);
  let com;
  if (winNum === 0) {
    com = "rock";
  } else if (winNum === 1) {
    com = "paper";
  } else if (winNum === 2) {
    com = "scissor";
  }

  if (user === "rock" && com === "scissor") {
    return 1;
  } else if (user === "paper" && com === "rock") {
    return 2;
  } else if (user === "scissor" && com === "paper") {
    return 3;
  } else if (com === "rock" && user === "scissor") {
    return 4;
  } else if (com === "paper" && user === "rock") {
    return 5;
  } else if (com === "scissor" && user === "scissor") {
    return 6;
  } else {
    return 0;
  }
};
