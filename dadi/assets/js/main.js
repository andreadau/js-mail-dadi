// Dichiarazione variabili dadi e risultato
var dado1, dado2, risultato;
dado1 = Math.floor(Math.random() *6) +1;
dado2 = Math.floor(Math.random() *6) +1;
//Condizioni Vicente , Perdente e Parità
   if (dado1 >  dado2) {
      alert("Il tuo numero: " + dado1 + " Quello del computer: " + dado2 + " Hai vinto!");
    } else if (dado1 = dado2) {
      alert("Il tuo numero: " + dado1 + " Quello del computer: " + dado2 + " Il risultato è pari");
    } else {
      alert("Il tuo numero: " + dado1 + " Quello del computer: " + dado2 + " Hai perso!");
    }
