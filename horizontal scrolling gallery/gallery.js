let gallery = document.querySelector(".gallery");
let backBtn = document.getElementById("back");
let nextBtn = document.getElementById("next");

gallery.addEventListener("wheel", (event) => {
  event.preventDefault();
  gallery.scrollLeft += event.deltaY;
  gallery.style.scrollBehavior = "auto";
});

backBtn.addEventListener("click", () => {
  gallery.style.scrollBehavior = "smooth";
  gallery.scrollLeft -= 700;
});

nextBtn.addEventListener("click", () => {
  gallery.style.scrollBehavior = "smooth";
  gallery.scrollLeft += 700;
});
