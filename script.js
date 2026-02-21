const quoteEl = document.getElementById("quote");
const authorEl = document.getElementById("author");
const newQuoteBtn = document.getElementById("new-quote");

let lastQuote = ""; // store last quote

async function fetchQuote() {
  try {
    const res = await fetch("https://api.quotable.io/random");
    if (!res.ok) throw new Error("Network response not ok");
    const data = await res.json();

    // only update if new quote is different from last
    if (data.content !== lastQuote) {
      quoteEl.textContent = data.content;
      authorEl.textContent = `— ${data.author}`;
      lastQuote = data.content;
    } else {
      // if same quote, just fetch again once
      fetchQuote();
    }
  } catch (err) {
    console.error(err);
    quoteEl.textContent = "Oops! Couldn't fetch a quote.";
    authorEl.textContent = "";
  }
}

// initial quote
fetchQuote();

// button click
newQuoteBtn.addEventListener("click", fetchQuote);
