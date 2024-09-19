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



//   Second excercise

function checkEvenOdd(num) {
  if (num % 2 === 0) {
    return "pari";
  } else {
    return "dispari";
  }
};

document.getElementById("resultSolve").innerHTML = console.log(checkEvenOdd(0));
document.getElementById("resultSolve").innerHTML = checkEvenOdd(0);