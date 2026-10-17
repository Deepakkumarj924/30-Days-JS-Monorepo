let bitcoin = document.getElementById("b-value");
let ethereum = document.getElementById("e-value");
let dogecoin = document.getElementById("d-value");

const API_URL = "https://api.binance.com/api/v3/ticker/price";
const symbols = ["BTCUSDT", "ETHUSDT", "DOGEUSDT"];

const symbolsQuery = encodeURIComponent(JSON.stringify(symbols));
const requestUrl = `${API_URL}?symbols=${symbolsQuery}`;

async function getCryptoPrices() {
  try {
    const response = await fetch(requestUrl);

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    bitcoin.innerHTML = data[0].price;
    ethereum.innerHTML = data[1].price;
    dogecoin.innerHTML = data[2].price;
    console.log(data); // Array of current prices for all three coins
  } catch (error) {
    console.error("Could not fetch crypto prices:", error);
  }
}

getCryptoPrices();
