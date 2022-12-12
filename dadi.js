/*Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
Stabilire il vincitore, in base a chi fa il punteggio più alto.
Stampiamo in pagina i due tiri e il risultato */

const tableElement = document.getElementById('table');
const First = Math.random();
const Second = Math.random();

const max = 7;

for(let i = 0; i<1; i++){
   let resultPlayer = Math.floor(First * max);
   let resultComputer = Math.floor(Second * max);

   console.log(resultPlayer); 
   console.log(resultComputer);

   if(resultPlayer > resultComputer){
      console.log('Vince giocatore 1'); 
   }else if(resultPlayer === resultComputer){
    console.log('Questo è un pareggio');
   }else{
    console.log('Vince il computer')
   }
   
   


}
