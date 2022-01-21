// we want to randomly choose 3 of these sentences

const objMessages = {
   // first inspirational message will be taken from this array

    messages1: ["Better be an hour early than a minute late",
    "Nine times out of 10, the hard choice is the good one",
    "If you want something done, do it yourself",
    "Hard work always pays",
    "You get what you give",
    "beleive you can and you're halfway there",
    "hardchip is what you need to start a project, consistency helps you finish it",
    "success is no final, failure is not fatal, it is the courage to continue that counts",
    "You define your own life, don't let other people write your script",
    "No matter what people tell you, words and ideas can change the world",
    "Life is like riding a bicycle. To keep your balance, you must keep moving"],

// 2nd inspirational message will be taken from this array

   messages2: ["You are beautiful",
   "You are worthy",
   "You are smart",
   "You are loved",
   "You are amazing",
   "You are who you are"], 
// 3rd inspirational message will be taken from this array

   messages3: ["seize the day",
   "Do what you want",
   "F... the world",
   "you are your own boss",
   "Fulfill your dreams",
   "Don't let anyone stop you",
   "You can do it",
   "Believe in yourself"
   ],
   
   
};
// variable in wich we're going to put the result
//let display = [];
//iterating trought the object
//console.log(objMessages.messages2[3]);
for (const message of Object.entries(objMessages)) {
  for(const line of Object.entries(message)){
     console.log(line);
   let index = [Math.floor(Math.random()* line.length)];
    console.log(index);
    //let display = objMessages.messages1[index];
    //console.log(display);
  };
    
   
};





//let display = ;
     
//console.log(objMessages.messages1);
