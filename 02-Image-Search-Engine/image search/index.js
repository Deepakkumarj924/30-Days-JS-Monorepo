let accessKey = "IR-LEt_c-EiagV6I1gKRMcK7tsbB9KgavMeLpz83FTU";
let input = document.getElementById("input");
let submitForm = document.getElementById("submit-form");
let showMoreBtn = document.getElementById("show-more");
let searchResult = document.getElementById("result");
let page = 1;
submitForm.addEventListener("submit", (e) => {
  e.preventDefault();
  searchImage();
  showMoreBtn.style.display = "block";
});

async function searchImage() {
  let inputVal = input.value;
  const URL = `https://api.unsplash.com/search/photos?page=${page}&query=${inputVal}&client_id=${accessKey}&per_page=12`;
  const response = await fetch(URL);
  const data = await response.json();

  if (page === 1) {
    searchResult.innerHTML = "";
  }

  const results = data.results;
  results.map((result) => {
    const image = document.createElement("img");
    image.src = result.urls.small;
    const imageLink = document.createElement("a");
    imageLink.href = result.links.html;
    imageLink.target = "_blank";
    imageLink.appendChild(image);
    searchResult.appendChild(imageLink);
  });
}
showMoreBtn.addEventListener("click", () => {
  page++;
  searchImage();
});
