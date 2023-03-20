/* 
Consegna :
Il computer deve generare 16 numeri casuali nello stesso range della difficoltà prescelta le bombe.
nella stessa cella può essere posizionata al massimo una bomba, perciò nell’array delle bombe non potranno esserci due numeri uguali.
In seguito l'utente clicca su una cella:
se il numero è presente nella lista dei numeri generati abbiamo calpestato una bomba
la cella si colora di rosso e la partita termina. Altrimenti la cella cliccata si colora di azzurro
l'utente può continuare a cliccare sulle altre celle.
La partita termina quando il giocatore clicca su una bomba o quando raggiunge il numero massimo possibile di numeri consentiti (ovvero quando ha rivelato tutte le celle che non sono bombe).
Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha cliccato su una cella che non era una bomba.
*/

// Seleziono l'elemento "container_game" dove inserire la griglia di gioco
const containerGame = document.getElementById("container_game");

// Definisco la costante per il numero di celle 
const numero_celle = 100;

// Definisco due array, una per le celle e una array per le bombe
let cells = [];
let bombs = [];

// Genero le 16 bombe inserite casualmente
while (bombs.length < 16) {
  let randomIndex = Math.floor(Math.random() * numero_celle);
  if (!bombs.includes(randomIndex)) {
    bombs.push(randomIndex);
  }
}

// Creo le celle per la griglia di gioco 
for (let i = 1; i <= numero_celle; i++) {
  const cell = document.createElement("div");
  cell.innerHTML = i.toString();
  cell.classList.add("cell");
  containerGame.append(cell);
  cells.push(cell);

  // Aggiungo un listener per l'evento 'click' sulla cella
  cell.addEventListener("click", function () {

    // Verifico se la cella è una bomba 
    if (bombs.includes(i)) {

      // Coloro la cella di rosso in caso cè una bomba al posto di un numero
      this.style.backgroundColor = "red";

      // Comunico il punteggio con esito negativo al gioco 
      alert("BOMBA!!! Punti: " +cells.filter((cell) => cell.style.backgroundColor !== "").length);
      location.reload();

    } else {

      // Coloro la cella di azzurro in caso non cè una bomba sotto 
      this.style.backgroundColor = "lightblue";

      // Verifico se il giocatore ha vinto 
      if (
        cells.filter((cell) => cell.style.backgroundColor === "").length === bombs.length) {

        // Comunico il punteggio totale della partita
        alert("Hai vinto! Punti totali : " + cells.filter((cell) => cell.style.backgroundColor !== "").length);
      location.reload();
      }
    }
  });
}
