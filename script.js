// we want to randomly choose 3 of these sentences
const messages = ["Better be an hour early than a minute late",
"Nine times out of 10, the hard choice is the good one",
"If you want something done, do it yourself",
"Hard work always pays",
"You get what you give",
"beleive you can and you're halfway there",
"hardchip is what you need to start a project, consistency helps you finish it",
"success is no final, failure is not fatal, it is the courage to continue that counts",
"You define your own life, don't let other people write your script",
"No matter what people tell you, words and ideas can change the world",
"Life is like riding a bicycle. To keep your balance, you must keep moving"]

let display = Math.floor(Math.random()*messages.length);
     
console.log(messages[display]);