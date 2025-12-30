document.addEventListener("DOMContentLoaded", () =>{



//FUN FACT CLICKABLE CARDS
const factCards = document.querySelectorAll(".fact-card");
const factOutput = document.getElementById("fact-output");

factCards.forEach(card => {
    card.addEventListener("click", () => {
        factOutput.textContent = card.dataset.fact;
    });
});

//QUOTE GENERATOR
const quotes = [
    "Build things that make people feel something.",
    "The things that scare you only make you better and stronger",
    "I never lose either I win or learn",
    "You are enough just as you are",
    "Healing takes time, and asking for help is a courageous step",
    "Ask yourself if what you're doing today is getting you closer to where you want to be tomorrow",
    "If you risk nothing you risk everything",
    "You are beautiful in all of your ways",
    "Life isn't about waiting for the storm to pass, it's about learning to dance in the rain.",
    "You define your own life. Don't let other people write your script."
];

const quoteText = document.getElementById("quote-text");
const newQuoteBtn = document.getElementById("new-quote");

newQuoteBtn.addEventListener("click", () => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    quoteText.textContent = `"${quotes[randomIndex]}"`;
    });
});