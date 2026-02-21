const quoteEl = document.getElementById("quote");
const authorEl = document.getElementById("author");
const newQuoteBtn = document.getElementById("new-quote");

async function fetchQuote() {
  try {
    const res = await fetch("https://zenquotes.io/api/random");
    const data = await res.json();
    const { q, a } = data[0];
    quoteEl.textContent = q;
    authorEl.textContent = `— ${a}`;
  } catch (err) {
    quoteEl.textContent = "Oops! Couldn't fetch a quote.";
    authorEl.textContent = "";
    console.error(err);
  }
}

// Fetch one quote on load
fetchQuote();

// Fetch new quote on button click
newQuoteBtn.addEventListener("click", fetchQuote);
