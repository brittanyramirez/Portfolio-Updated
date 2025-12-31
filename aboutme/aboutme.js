document.addEventListener("DOMContentLoaded", () => {

  /* FUN FACT CARDS*/
const factCards = document.querySelectorAll(".fact-card");
  let activeCard = null;

  factCards.forEach(card => {
    const originalText = card.innerHTML;

    card.addEventListener("click", () => {
      // If clicking the same card → toggle off
      if (card === activeCard) {
        card.innerHTML = originalText;
        card.classList.remove("active");
        activeCard = null;
        return;
      }

      // Close previously active card
      if (activeCard) {
        activeCard.innerHTML = activeCard.dataset.original;
        activeCard.classList.remove("active");
      }

      // Open new card
      card.dataset.original = originalText;
      card.innerHTML = `<p>${card.getAttribute("data-fact")}</p>`;
      card.classList.add("active");
      activeCard = card;
    });
  });

  /*QUOTE GENERATOR*/
  const quotes = [
    "Build things that make people feel something.",
    "The things that scare you only make you better and stronger.",
    "I never lose — I either win or learn.",
    "You are enough just as you are.",
    "Healing takes time, and asking for help is courageous.",
    "Ask yourself if what you're doing today brings you closer to tomorrow.",
    "If you risk nothing, you risk everything.",
    "Life isn't about waiting for the storm — it's about learning to dance in the rain.",
    "You define your own life. Don’t let others write your script."
  ];

  const quoteText = document.getElementById("quote-text");
  const newQuoteBtn = document.getElementById("new-quote");

  if (quoteText && newQuoteBtn) {
    newQuoteBtn.addEventListener("click", () => {
      const randomIndex = Math.floor(Math.random() * quotes.length);
      quoteText.textContent = `"${quotes[randomIndex]}"`;
    });
  }

  /*BACK TO THE TOP*/
  const backToTopBtn = document.getElementById("backToTop");

  if (backToTopBtn) {
    window.addEventListener("scroll", () => {
      backToTopBtn.style.display = window.scrollY > 200 ? "block" : "none";
    });

    backToTopBtn.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }

});
