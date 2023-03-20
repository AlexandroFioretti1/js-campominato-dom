/* L'utente clicca su un bottone
che genererà una griglia di gioco quadrata.
Ogni cella ha un numero progressivo da 1 a 100.
Ci saranno quindi 10 caselle per ognuna delle 10 righe
Quando l'utente clicca su una cella, la cella cliccata si colora di azzurro
ed emetto un messaggio in console con il numero della cella cliccata. */

/* 
 STRUMENTI USATI
 let/const
 console.log()
 cicle For[]
 function
 addElementById
 addEventListener
 createElement
*/

// Seleziono l'elemento HTML del bottone PLAY
const playButton = document.getElementById("play_button");

// Aggiungo un listener per l'evento 'click' sul bottone
playButton.addEventListener("click", function () {
    
  // Seleziono l'elemento HTML dove inserire la griglia di gioco
  const containerGame = document.getElementById("container_game");

  // Inizializzo una variabile per il numero della cella corrente
  let cellNumber = 1;

  // Creo una tabella HTML con 10 righe e 10 colonne
  const table = document.createElement("table");
  for (let i = 0; i < 10; i++) {
    // Creo una riga della tabella
    const row = document.createElement("tr");
    for (let j = 0; j < 10; j++) {

      // Creo una cella della riga
      const cell = document.createElement("td");

      // Imposto il numero della cella come contenuto della cella
      cell.textContent = cellNumber;

      // Aggiungo un listener per l'evento 'click' sulla cella
      cell.addEventListener("click", function () {

        // Coloro la cella di blu chiaro
        this.style.backgroundColor = "lightblue";

        // Stampo il numero della cella nella console
        console.log(
          "Hai cliccato nella casella con il Numero " + this.textContent
        );

        // Aggiorno il numero della cella corrente
        cellNumber++;
      });

      // Aggiungo la cella alla riga
      row.appendChild(cell);

      // Aggiorno il numero della cella corrente
      cellNumber++;
    }

    // Aggiungo la riga alla tabella
    table.appendChild(row);
  }

  // Inserisco la tabella nel container di gioco
  containerGame.appendChild(table);
});
