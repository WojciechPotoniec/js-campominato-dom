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

//definisco una variabile globale e associo un numero preciso di elementi
const bombNumber = 16;

// aggiungo un ascoltatore al button e attraverso un click accadranno cose.
btnplay.addEventListener("click", function () {
  let gameOver = false;
  grid.innerHTML = "";
  let message = document.getElementById('result');
  message = '';
  let score = 0;
  // definisco una variabile globale e ne recupero l'elemento
  const select = parseInt(document.querySelector("select").value);

  if (select === 100) {
    let bomblist = bombsGenerator(select);
    console.log(bomblist);

    // creo un ciclo for per inserire all'interno di grid un quadrato con un numero all'interno
    for (let index = 0; index < 100; index++) {
      const newSquare = generateNewGridSquare(index + 1);
      
      newSquare.classList.add("easy");

      newSquare.addEventListener("click", function () {
        if(!gameOver){
          if (!bomblist.includes(parseInt(newSquare.innerHTML))) {
          
          newSquare.classList.add("safe");
          score++;
          console.log('Il tuo punteggio è: ', score);
        } else {
          newSquare.classList.add("unsafe");
          
            gameOver = true;
            
            console.log('Hai perso');
          }
          
      }

        
      },{once: true});

      // aggiungo un nuovo quadrato alla grid che ho precedentemente selezionata
      grid.appendChild(newSquare);
    }
  } else if (select === 81) {
    bomblist = bombsGenerator(select);
    console.log(bomblist);

    // creo un ciclo for per inserire all'interno di grid un quadrato con un numero all'interno
    for (let index = 0; index < 81; index++) {
      const newSquare = generateNewGridSquare(index + 1);

      newSquare.classList.add("medium");

      newSquare.addEventListener("click", function () {
        if (!bomblist.includes(parseInt(newSquare.innerHTML))) {
          
          newSquare.classList.add("safe");
        } else {
          newSquare.classList.add("unsafe");
    
      }
        console.log(index + 1);
      },{once: true});

      // aggiungo un nuovo quadrato alla grid che ho precedentemente selezionata
      grid.appendChild(newSquare);
    }
  }
  // creo un ciclo for per inserire all'interno di grid un quadrato con un numero all'interno
  else { bomblist = bombsGenerator(select);
    console.log(bomblist);
    for (let index = 0; index < 49; index++) {
      const newSquare = generateNewGridSquare(index + 1);
      // aggiunta classe hard all'elemento precedentemente proso e associato alla funzione per generare 1 quadrato
      newSquare.classList.add("hard");

      newSquare.addEventListener("click", function () {
        if (!bomblist.includes(parseInt(newSquare.innerHTML))) {
          
          newSquare.classList.add("safe");
        } else {
          newSquare.classList.add("unsafe");
    
      }
        console.log(index + 1);
      },{once: true});

      // aggiungo un nuovo quadrato alla grid che ho precedentemente selezionata
      grid.appendChild(newSquare);
    }
  }
});

function generateNewGridSquare(content) {
  // definisco una variabile non riassegnabile per creare un nuovo elemento nel DOM <div></div>
  const newEl = document.createElement("div");

  // aggiungo del contenuto all'interno della variabile newEl = <div></div>
  newEl.innerHTML = content;

  //aggiungo all'elemento la classe .square
  newEl.classList.add("square");

  // ritorno l'elemento fuori dalla funzione
  return newEl;
}

// creata funzione per determinare se un numero che divisibile per 2 riporta resto 0 e ritorna true
// function isEven(number) {
//   if (number % 2 === 0) {
//     return true;
//   } else return false;
// }

// creo una variabile btnreset e seleziono il bottone dall'html tramite l'id


const btnreset = document.getElementById("reset");
// aggiungo un ascoltatore al btnreset e attraverso un click accadranno cose.
btnreset.addEventListener("click", function () {
  // rimuovo gli elementi contenuti nella griglia
  grid.innerHTML = "";
});

/* Consegna
Copiamo la griglia fatta ieri nella nuova repo e aggiungiamo la logica del gioco (attenzione: non bisogna copiare tutta la cartella dell'esercizio ma solo l'index.html, e le cartelle js/ css/ con i relativi script e fogli di stile, per evitare problemi con l'inizializzazione di git).

Il computer deve generare 16 numeri casuali nello stesso range della difficoltà prescelta: le bombe. Attenzione: **nella stessa cella può essere posizionata al massimo una bomba, perciò nell’array delle bombe non potranno esserci due numeri uguali.
In seguito l'utente clicca su una cella: se il numero è presente nella lista dei numeri generati - abbiamo calpestato una bomba - la cella si colora di rosso e la partita termina. Altrimenti la cella cliccata si colora di azzurro e l'utente può continuare a cliccare sulle altre celle.

La partita termina quando il giocatore clicca su una bomba o quando raggiunge il numero massimo possibile di numeri consentiti (ovvero quando ha rivelato tutte le celle che non sono bombe).

Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha cliccato su una cella che non era una bomba.
*/

// funzione per generare una lista di numeri casuali compresi tra 1 e il numero di caselle in base alla difficoltà
function bombsGenerator(difficulty) {
  let bombArray = [];
  while (bombArray.length < bombNumber) {
    let bomb = getRndInteger(1, difficulty);
    if (!bombArray.includes(bomb)) {
      bombArray.push(bomb);
    }
  }
  return bombArray;
}
