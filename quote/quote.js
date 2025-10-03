const quoteText = document.getElementById("quote");
const quoteAuthor = document.getElementById("a-name");
const nBtn = document.getElementById("new-quote");
const tBtn = document.getElementById("tweet");
let tweet;
let author;
// When the button is clicked, call the function to get a new quote
nBtn.addEventListener("click", displayNewQuote);

// Main function to update the UI
async function displayNewQuote() {
  // Show a loading message while fetching
  quoteText.innerText = "Loading...";
  quoteAuthor.innerText = "";

  const quoteData = await fetchApi();

  // Update the text with the fetched quote data
  if (quoteData) {
    quoteText.innerText = `"${quoteData.quote}"`;
    quoteAuthor.innerText = `— ${quoteData.author}`;
    tweet = quoteData.quote;
    author = quoteData.author;
  } else {
    quoteText.innerText = "Failed to load quote. Please try again.";
  }
}

// The corrected function to fetch from the API
async function fetchApi() {
  const url = "https://api.api-ninjas.com/v1/quotes";
  const apiKey = "GMxLofk8t2v00ltRk8rdPw==41KqStybP0ODqwY9";

  // The fetch function takes the URL and an options object
  const options = {
    method: "GET",
    headers: {
      "X-Api-Key": apiKey, // The API key is sent in the headers
    },
  };

  try {
    const response = await fetch(url, options);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    // The API returns an array, so we return the first (and only) item
    return data[0];
  } catch (error) {
    console.error("Could not fetch quote:", error);
    return null; // Return null on error
  }
}

// ... your existing code ...

// Simplified function that uses the global variables directly
const shareTweet = () => {
  // Make sure the tweet variable has a value before trying to tweet
  if (tweet) {
    let url = `https://twitter.com/intent/tweet?text="${tweet}" - ${author}`;
    window.open(url, "_blank"); // Use "_blank" to open in a new tab
  } else {
    console.log("No quote available to tweet.");
  }
};

// Now the event listener is much simpler
tBtn.addEventListener("click", shareTweet);

// Initial quote load
displayNewQuote();
