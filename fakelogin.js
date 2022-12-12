/*Inventa una lista di email autorizzate
Chiedi all’utente la sua email, con un piccolo form.
controlla che sia nella lista di chi può accedere,
stampa un messaggio appropriato sull’esito del controllo. */

/*1. Creare un array 
  2. Inserire Email nell'array
  3. Confronta
  4. Stampa Messaggio */

const emailElement = document.getElementById('email');
const button = document.getElementById('button');

const email = [''];

button.addEventListener ('click', function() {   
    
    const emailUser =  emailElement.value.trim();
    email.push(emailUser);

    console.log(email);
});