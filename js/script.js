// First excercise
function solve(a, b) {
  let arrayAlice = [20, 32, 18];
  let arrayBob = [48, 25, 40];
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
    return [aliceScore, bobScore];
  }

  solve(10, 2);

  document.getElementById("resultSolve").innerHTML = `result-solve`;

//   Second excercise