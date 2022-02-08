const button = document.querySelector("#bouton");
const answer = document.querySelector("#answer");
// we want to randomly choose 3 of these sentences
const objMessages = {
   // first inspirational message will be taken from this array

    messages1: ["Better be an hour early than a minute late",
    "Nine times out of 10, the hard choice is the good one",
    "If you want something done, do it yourself",
    "Hard work always pays",
    "You get what you give",
    "Believe you can and you're halfway there",
    "Hardchip is what you need to start a project, consistency helps you finish it",
    "Success is no final, failure is not fatal, it is the courage to continue that counts",
    "You define your own life, don't let other people write your script",
    "No matter what people tell you, words and ideas can change the world",
    "Life is like riding a bicycle. To keep your balance, you must keep moving"],

// 2nd inspirational message will be taken from this array

   messages2: [" You are beautiful",
   " You are worthy",
   " You are smart",
   " You are loved",
   " You are amazing",
   " You are who you are"], 
// 3rd inspirational message will be taken from this array

   messages3: [" seize the day",
   " Do what you want",
   " F... the world",
   " you are your own boss",
   " Fulfill your dreams",
   " Don't let anyone stop you",
   " You can do it",
   " Believe in yourself"
   ],
    
};

// get a random index
let randomIndex = (arr)=> {
   let index = Math.floor(Math.random() * arr.length);
   //console.log(index);
   return index;
};

//iterating trought the object to select randomly 1 message from each part then push it into result
  let displayRand = () =>{
     // an array in witch we put the result
     let result = [];
   const iter = Object.keys(objMessages).forEach(message => result.push(objMessages[message][randomIndex(message)]));
   answer.innerHTML = result;
   //console.log(result);
   return iter
  };
//displayRand();
    button.onclick = displayRand;
   






