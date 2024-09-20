JavaScript Practice Exercises
This repository contains JavaScript exercises I'm working on through Codewars to sharpen my skills in key programming concepts.

Topics Covered:
Conditions and Logical Operators
Loops
Functions
Arrays
Array Methods
Objects

Exercise List:
1️⃣ Rock off!
A challenge that involves applying conditions and logic to determine a winner in a rock-paper-scissors style game.

Solution: 
function solve() {
  let arrayAlice = [20, 32, 18];
  let arrayBob = [48, 25, 40];
    let aliceScore = 0;
    let bobScore = 0;

    if (arrayAlice[0] > arrayBob[0]) {
      aliceScore++;
    } else if (arrayAlice[0] < arrayBob[0]) {
      bobScore++;
    };

    if (arrayAlice[1] > arrayBob[1]) {
      aliceScore++;
    } else if (arrayAlice[1] < arrayBob[1]) {
      bobScore++;
    };

    if (arrayAlice[2] > arrayBob[2]) {
      aliceScore++;
    } else if (arrayAlice[2] < arrayBob[2]) {
      bobScore++;
    };
  
    // Stampa il risultato finale
    if (aliceScore > bobScore) {
      console.log(`${aliceScore}, ${bobScore}: Alice made "Kurt" proud!`);
    } else if (bobScore > aliceScore) {
      console.log(`${aliceScore}, ${bobScore}: Bob made "Jeff" proud!`);
    } else {
      console.log(`${aliceScore}, ${bobScore}: That looks like a "draw"! Rock on!`);
    }
    return [aliceScore, bobScore];
  }

  solve();

2️⃣ Shortest Word
A function to find the shortest word in a string, utilizing loops and string manipulation.

"Simple, given a string of words, return the length of the shortest word(s).

String will never be empty and you do not need to account for different data types."

const string = "braccio,gamba,orecchio,dito,falange,unghia,piede,polpaccio,neo,naso,deltoide,occhio";

function findShortestWordLength(string) {
  return string
    .split(',')             // Split the string into an array of words
    .map(word => word.length) // Map each word to its length
    .reduce((a, b) => Math.min(a, b)); // Find the minimum length
}

console.log(`The shortest word in the string has length ${findShortestWordLength(string)}.`);

3️⃣ Stop gninnipS My sdroW!
A fun exercise that reverses words in a sentence over a specific length, using array methods and string manipulation.

Write a function that takes in a string of one or more words, and returns the same string, but with all words that have five or more letters reversed (Just like the name of this Kata). Strings passed in will consist of only letters and spaces. Spaces will be included only when more than one word is present.

4️⃣ You only need one
This task checks if an array contains a certain value, perfect for practicing array search methods.

5️⃣ Detect Pangram
A challenge to verify if a sentence is a pangram, requiring knowledge of string manipulation and logical conditions.

Learning Goals:
Strengthen understanding of JavaScript fundamentals.
Apply conditions, loops, and array methods effectively.
Gain deeper insights into manipulating objects and arrays.