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
const target = document.getElementById('abilitation');

const email = ['test1@email.com','test2@email.com'];


button.addEventListener ('click', function() {   
  const emailUser = emailElement.value.trim();   
  
  if(!emailUser){
      target.innerText = "Non hai inserito l'email";
  }
  let isOk = false;
  for(let i=0; i<email.length; i++){
      const emailRicevuta = email[i];
  
      if(emailRicevuta === emailUser){
          isOk = true;
      }
  }
  if(isOk){
      target.innerText = 'Sei abilitato';
  }else{
      target.innerText = 'Non sei abilitato';
  }
});


