const quoteEl = document.getElementById("quote");
const authorEl = document.getElementById("author");
const newQuoteBtn = document.getElementById("new-quote");

// Local quotes array
const quotes = [
  {
    content: "Keep your face always toward the sunshine.",
    author: "Walt Whitman",
  },
  { content: "The best way out is always through.", author: "Robert Frost" },
  {
    content: "Do something today that your future self will thank you for.",
    author: "Unknown",
  },
  { content: "Happiness depends upon ourselves.", author: "Aristotle" },
  {
    content: "Positive anything is better than negative nothing.",
    author: "Elbert Hubbard",
  },
];

function getRandomQuote() {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  const q = quotes[randomIndex];
  quoteEl.textContent = q.content;
  authorEl.textContent = `— ${q.author}`;
}

// Show a quote on load
getRandomQuote();

// Show a new quote when button clicked
newQuoteBtn.addEventListener("click", getRandomQuote);
