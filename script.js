const characters = [
  "And that's why nobody reads anymore.",
  "Branding is what happens when you forget to name your goldfish.",
  "That would be a great band name.",
  "I think it's going to rain in the desert.",
  "We're not just doing this for money; we're doing this for a shitload of money.",
  "Who are you and how did you get in here?!.",
  "How do I unsubscribe from gravity?",
  "If I'm not back in five minutes, just wait longer.",
  "If spaghetti could talk, it would comment here too.",
  "What does that have to do with the price of milk in Iran?",
  "This reminds me of the last time I argued with a vending machine",
  "Are we all just rebranding as bananas today?.",
  "My SEO budget got cut for next year.",
  "Yes, it's much much worse.",
  "Onboarding is just a really complicated game of “Guess Who?”",
  "This is exactly what my dreams sound like.",
  "I didn’t see this post, but my cat approves.",
  "Can I refill your eggnog for you?",
  "My Roomba agrees with this but won’t explain why.",
  "Thought leadership is just blogging with fancier fonts.",
  "Do you think the rain will hurt the rhubarb?",
  "This reminds me of the time I lost a sock in the fridge.",
  "I read this and now my Wi-Fi is faster.",
  "That is soooo amazing!",
  "This post smells like Thursday",
  "I’m not saying this unlocked the universe, but also… maybe it did.",
  "This is the kind of energy that invented bubble wrap.",
  "This comment section is basically a reverse karaoke machine",
  "I just reread this, and now my coffee tastes different.",
  "Why does this feel like the sound of Velcro in the distance?",
  "It's like when you clap your hands and miss.",
  "I’m 87% sure this post was meant to be written in Comic Sans.",
  "This does not apply in mortal combat.",
  "This doesn not apply in rock, paper, scissors.",
  "Is it just me, or does this feel like a left turn on an escalator?",
  "It's like finding glitter in your shoe.",
  "According to the chart, we only need to grow 4 inches to reach our target.",
  "This tastes like cold french fries.",
  "Can confirm, this is what my toast thinks every morning.",
  "Brb, updating my résumé to include 'professional AI enthusiast.",
  "Who else remembers when toasters ruled the internet?",
  "Who else remembers when hampsters ruled the internet?",
  "Monkeys invented jazz in 1922.",
  "Don’t trust anyone who eats pancakes on a Tuesday.",

  "So anyway, I says to Mabel, I says . . . ",
  "dust ‘em off with some confectioner sugar",
  "And if the berries are too tart…",
  "The British Sugar Thief is also up there",
  "I know you can read my thoughts……..meow meow meow meow, meow meow meow meow",
  "O-re-gano — what the hell?"
];

let passwordLength = 1;
let password1 = document.getElementById("password-1");
//generate 1 random comment when the user clicks the generate comment button.
//each comment should is 1 string long

function getRandomCharacter() {
  let randomCharacter = Math.floor(Math.random() * characters.length);
  return characters[randomCharacter];
}

function generateRandomPassword() {
  let randomPassword1 = "";
  for (i = 0; i < passwordLength; i++) {
    randomPassword1 += getRandomCharacter();
    password1.textContent = randomPassword1;
  }
  return randomPassword1;
}
