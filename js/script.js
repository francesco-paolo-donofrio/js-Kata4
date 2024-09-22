// First excercise
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


function checkEvenOdd(num) {
  if (num % 2 === 0) {
    return "pari";
  } else {
    return "dispari";
  }
};

document.getElementById("resultSolve").innerHTML = console.log(checkEvenOdd(0));
document.getElementById("resultSolve").innerHTML = checkEvenOdd(0);

// Calcolare la media

function media(num1, num2, num3, num4) {
  
  const sum = num1 + num2 + num3 + num4;
  
  const media = sum / 4;
  
  document.getElementById("media").innerHTML = media;
  
  return media;
}

media(2, 4, 6, 15);
document.getElementById("media").innerHTML = media(1, 2, 3, 4);

//   Second excercise

const string = "braccio,gamba,orecchio,dito,falange,unghia,piede,polpaccio,neo,naso,deltoide,occhio";

function findShortestWordLength(string) {
  return string
    .split(',')             // Split the string into an array of words
    .map(word => word.length) // Map each word to its length
    .reduce((a, b) => Math.min(a, b)); // Find the minimum length
}

console.log(`The shortest word in the string has length ${findShortestWordLength(string)}.`);

// Third excercise

const reversString1 = "Buongiorno cari amici";
const reversString2 = "Ciao come state";
function reverseString(sentence) {
  return sentence.split(" ").map(word => {
    return word.length >= 5 ? word.split("").reverse().join("") : word;
  }).join(" ");
}

console.log(reverseString(reversString1));
console.log(reverseString(reversString2));

// Fourth excercise

ArrayA = [
  "margherita",
  "funghi",
  "carciofi",
  "prosciuttoCotto",
  "prosciuttoCrudo"
];

ArrayB = [
  "margherita",
  "funghi",
  "carciofi",
  "prosciuttoCotto",
  "prosciuttoCrudo"
];

const ValueX = "margherita";
const ValueY = "prosciutto";
const ValueZ = "carciofi";

// Con ciclo for
function findValue(array, value) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === value) {
      return true;
    }
  }
  return false;
}

console.log(findValue(ArrayA, ValueX));
console.log(findValue(ArrayA, ValueY));
console.log(findValue(ArrayA, ValueZ));

// Con metodo Includes

console.log(ArrayA.includes(ValueX));
console.log(ArrayA.includes(ValueY));
console.log(ArrayA.includes(ValueY));

// Restituisce in automatico true o false

// Altri metodi possibili : Some(restituisce true se almeno un elemento soddisfa la condizione) - IndexOf (restituisce l'indice se è presente nell'array)

// Fifth excercise

const AlphabetLetter = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z"
];