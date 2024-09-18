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
function solve(a, b) {
  let aliceScore = 0;
  let bobScore = 0;

  // Confronta i punteggi per ogni categoria
  for (let i = 0; i < 3; i++) {
    if (a[i] > b[i]) {
      aliceScore++;
    } else if (a[i] < b[i]) {
      bobScore++;
    }
  }

  // Stampa il risultato finale
  if (aliceScore > bobScore) {
    console.log(`${aliceScore}, ${bobScore}: Alice made "Kurt" proud!`);
  } else if (bobScore > aliceScore) {
    console.log(`${aliceScore}, ${bobScore}: Bob made "Jeff" proud!`);
  } else {
    console.log(`${aliceScore}, ${bobScore}: That looks like a "draw"! Rock on!`);
  }
}

2️⃣ Shortest Word
A function to find the shortest word in a string, utilizing loops and string manipulation.

3️⃣ Stop gninnipS My sdroW!
A fun exercise that reverses words in a sentence over a specific length, using array methods and string manipulation.

4️⃣ You only need one
This task checks if an array contains a certain value, perfect for practicing array search methods.

5️⃣ Detect Pangram
A challenge to verify if a sentence is a pangram, requiring knowledge of string manipulation and logical conditions.

Learning Goals:
Strengthen understanding of JavaScript fundamentals.
Apply conditions, loops, and array methods effectively.
Gain deeper insights into manipulating objects and arrays.