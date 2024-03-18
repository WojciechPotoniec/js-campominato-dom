/*Consegna
L'utente clicca su un bottone che genererà una griglia di gioco quadrata.
Ogni cella ha un numero progressivo, da 1 a 100.
Ci saranno quindi 10 caselle per ognuna delle 10 righe.
Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.

Bonus:
Aggiungere una select accanto al bottone di generazione, che fornisca una scelta tra tre diversi livelli di difficoltà:
con difficoltà 1 => 100 caselle, con un numero compreso tra 1 e 100, divise in 10 caselle per 10 righe;
con difficoltà 2 => 81 caselle, con un numero compreso tra 1 e 81, divise in 9 caselle per 9 righe;
con difficoltà 3 => 49 caselle, con un numero compreso tra 1 e 49, divise in 7 caselle per 7 righe;
*/

// tmplate = <div class="square"></div>

// creo una variabile globale e selezione l'elemento grid del DOM tramite id
const grid = document.getElementById("grid");

// creo una variabile btnplay e seleziono il bottone dall'html tramite l'id
const btnplay = document.getElementById("play");

// aggiungo un ascoltatore al button e attraverso un click accadranno cose.
btnplay.addEventListener("click", function () {
  grid.innerHTML = "";
  const select = document.querySelector("select").value;
  if (select === "easy") {
    // creo un ciclo for per inserire all'interno di grid un quadrato con un numero all'interno
    for (let index = 0; index < 100; index++) {
      const newSquare = generateNewGridSquare(index + 1);
      newSquare.classList.add("easy");

      newSquare.addEventListener("click", function () {
        if (isEven(index)) {
          newSquare.classList.toggle("even");
        } else newSquare.classList.toggle("odd");
        console.log(index + 1);
      });

      // aggiungo un nuovo quadrato alla grid che ho precedentemente selezionata
      grid.appendChild(newSquare);
    }
  } else if (select === "medium") {
    // creo un ciclo for per inserire all'interno di grid un quadrato con un numero all'interno
    for (let index = 0; index < 81; index++) {
      const newSquare = generateNewGridSquare(index + 1);

      newSquare.classList.add("medium");

      newSquare.addEventListener("click", function () {
        if (isEven(index)) {
          newSquare.classList.toggle("even");
        } else newSquare.classList.toggle("odd");
        console.log(index + 1);
      });

      // aggiungo un nuovo quadrato alla grid che ho precedentemente selezionata
      grid.appendChild(newSquare);
    }
  }
  // creo un ciclo for per inserire all'interno di grid un quadrato con un numero all'interno
  else{
    for (let index = 0; index < 49; index++) {
      const newSquare = generateNewGridSquare(index + 1);
        // aggiunta classe hard all'elemento precedentemente proso e associato alla funzione per generare 1 quadrato
      newSquare.classList.add("hard");

      newSquare.addEventListener("click", function () {
        if (isEven(index)) {
          newSquare.classList.toggle("even");
        } else newSquare.classList.toggle("odd");
        console.log(index + 1);
      });

      // aggiungo un nuovo quadrato alla grid che ho precedentemente selezionata
      grid.appendChild(newSquare);
    }}
});

function generateNewGridSquare(content) {
  // definisco una variabile non riassegnabile per creare un nuovo elemento nel DOM <div></div>
  const newEl = document.createElement("div");

  // aggiungo del contenuto all'interno della variabile newEl = <div></div>
  newEl.innerHTML = "<span>" + content + "</span>";

  //aggiungo all'elemento la classe .square
  newEl.classList.add("square");

  // ritorno l'elemento fuori dalla funzione
  return newEl;
}

// creata funzione per determinare se un numero che divisibile per 2 riporta resto 0 e ritorna true 
function isEven(number) {
  if (number % 2 === 0) {
    return true;
  } else return false;
}

// creo una variabile btnreset e seleziono il bottone dall'html tramite l'id
const btnreset = document.getElementById("reset");

// aggiungo un ascoltatore al btnreset e attraverso un click accadranno cose.
btnreset.addEventListener("click", function () {
  // rimuovo gli elementi contenuti nella griglia
  grid.innerHTML = "";
});
