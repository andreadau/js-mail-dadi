// Richiesta email al cliente
var email = prompt("Digita la tua email");
// Dichiarazione Array Email
var emailList = ['qualcuno@gmail.com', 'qualcuno@qualcosa.it', 'qualcuno@boolean.it'];
var mailValidator = false;
// Ciclo for per ricerca in Array
for(var i = 0; i < emailList.length; i++){
  if (email == emailList[i]) {
    mailValidator = true;
  }
}
  if (mailValidator == true) {
    alert("L'email è corretta");
	} else {
    alert("L'email non è corretta");
  }

// Validazione per correzione esercizio
alert("Le email da validare sono : " + emailList);
