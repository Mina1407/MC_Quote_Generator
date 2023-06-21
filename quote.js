const quotes = [
  "Do not wish to be like anyone except in two cases. The first is a person, whom Allah has given wealth & he spends it righteously; (the second is) the one whom Allah has given wisdom (the Holy Quran) and he acts according to it and teaches it to others.",
  "Feed the hungry, Visit the sick, Set free captives.",
  "All pious believers shall deem it their bounden duty to defend believers and to aid them wheresoever they may be, whether far or near, and throughout Christendom shall protect the places where they conduct worship, and those where their monks and priests dwell.",
  "If a Christian woman enters a Muslim household, she shall be received with kindness, and she shall be given the opportunity to pray in her church; there shall be no dispute between her and a man who loves her religion.",
  "No Christian shall be brought by force to confess Islam, and no disputes except over the better things shall be envisaged with them. Muslims shall extend over the Christians everywhere the arm of mercy and kindness, protecting them from the exactions of oppressors.",
  "There will come a time when holding on to your Deen will be like holding on to hot coals.",
  "The most excellent jihad is the conquest of oneself.",
  "The pursuit of knowledge is obligatory on every Muslim.",
  "Much silence and good disposition, there are no two things better than these.",
];

function getRandomQuote() {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  return quotes[randomIndex];
}

const quoteText = document.querySelector(".quote");
const quoteBtn = document.querySelector("button");

function displayRandomQuote() {
  quoteBtn.classList.add("loading");
  quoteBtn.innerText = "Loading Quote...";

  // Simulating an asynchronous operation with a timeout
  setTimeout(() => {
    const randomQuote = getRandomQuote();
    quoteText.innerText = randomQuote;
    quoteBtn.classList.remove("loading");
    quoteBtn.innerText = "New Quote";
  }, 1500); // Adjust the delay as needed
}

quoteBtn.addEventListener("click", displayRandomQuote);
