const quoteEl = document.getElementById("quote");
const authorEl = document.getElementById("author");
const newQuoteBtn = document.getElementById("new-quote");

async function fetchQuote() {
  try {
    const res = await fetch("https://api.adviceslip.com/advice", {
      cache: "no-cache",
    });
    if (!res.ok) throw new Error("Network response was not ok");
    const data = await res.json();

    quoteEl.textContent = `"${data.slip.advice}"`;
    authorEl.textContent = `— Advice Slip`;
  } catch (err) {
    console.error(err);
    quoteEl.textContent = "Oops! Couldn't fetch a quote.";
    authorEl.textContent = "";
  }
}

// Load first quote on page load
fetchQuote();

// Load new quote on button click
newQuoteBtn.addEventListener("click", fetchQuote);
