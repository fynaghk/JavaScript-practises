const button = document.querySelector("button");
const quote = document.querySelector("h1");

const quotes = [
  ["I don’t care that they stole my idea …  I care that they don’t have any of their own.", "Tesla"],
  ["The scientists of today think deeply instead of clearly. One must be sane to think clearly, but one can think deeply and be quite insane.", "Tesla"],
  ["Of all things, I liked books best.", "Tesla"],
  ["The feeling is constantly growing on me that I had been the first to hear the greeting of one planet to another.", "Tesla"],
  ["It’s not the love you make. It’s the love you give.", "Tesla"],
  ["There are only two ways to live your life. One is as though nothing is a miracle. The other is as though everything is a miracle.", "Albert Einstein"],
  ["Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.", "Albert Einstein"],
  ["If you can't explain it to a six year old, you don't understand it yourself.", "Albert Einstein"],
  ["Life is like riding a bicycle. To keep your balance, you must keep moving.", "Albert Einstein"],
  ["Anyone who has never made a mistake has never tried anything new.", "Albert Einstein"],
  ["Reality is merely an illusion, albeit a very persistent one.", "Albert Einstein"],
  ["Quiet people have the loudest minds.", "Stephen Hawking"],
  ["Life would be tragic if it weren't funny.", "Stephen Hawking"],
  ["Intelligence is the ability to adapt to change.", "Stephen Hawking"],
  ["The universe doesn't allow perfection.", "Stephen Hawking"],
  ["Although I cannot move and I have to speak through a computer, in my mind I am free.", "Stephen Hawking"],
  ["If time travel is possible, where are the tourists from the future?", "Stephen Hawking"],
  ["People who boast about their I.Q. are losers.", "Stephen Hawking"],
  ["I'm not afraid of death, but I'm in no hurry to die.", "Stephen Hawking"],
  ["Not only does God play dice but... he sometimes throws them where they cannot be seen.", "Stephen Hawking"],
  ["I don't think the human race will survive the next thousand years, unless we spread into space.", "Stephen Hawking"],
  ["I have no special talent. I am only passionately curious.", "Albert Einstein"],
  ["Imagination is more important than knowledge. Knowledge is limited. Imagination encircles the world.", "Albert Einstein"]
]

button.addEventListener("click", ()=>{
  const number = Math.floor(Math.random() * quotes.length-1);
  const newSentence = quotes[number];
  document.querySelector("h2").innerHTML = newSentence[0];
  document.querySelector("h5").innerHTML = newSentence[1];
})

