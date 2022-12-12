/*Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
Stabilire il vincitore, in base a chi fa il punteggio più alto.
Stampiamo in pagina i due tiri e il risultato */

const tableElement = document.getElementById('table');
const paragraph = document.getElementById('result');
const First = Math.random();
const Second = Math.random();


const max = 6;

for(let i = 0; i<1; i++){
   let resultPlayer = Math.floor(First * max) + 1;
   let resultComputer = Math.floor(Second * max)+ 1;

   const messagePlayer = `Il giocatore 1 fa: ${resultPlayer}`;
   const messageComputer = `Il computer fa: ${resultComputer}`;

   const finalResult = messagePlayer + " " + messageComputer;
   tableElement.innerText = finalResult;
   
   console.log(messagePlayer); 
   console.log(messageComputer);

   if(resultPlayer > resultComputer){
      console.log('Vince giocatore 1'); 
      paragraph.innerText = " Vince il giocatore 1";
   }else if(resultPlayer === resultComputer){
    console.log('Questo è un pareggio');
    paragraph.innerText = " Questo è un pareggio";
   }else{
    console.log('Vince il computer')
    paragraph.innerText = " Vince il computer";
   }
}
