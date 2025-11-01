let progressPerc = document.getElementById("percentage");

let counter = 0;

setInterval(() => {
  if (counter == 65) {
    clearInterval();
  } else {
    counter += 1;
    progressPerc.innerHTML = counter + "%";
  }
}, 20);
