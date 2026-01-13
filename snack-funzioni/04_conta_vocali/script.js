/* Scrivi una funzione che accetti una stringa e restituisca il numero di vocali contenute al suo interno */

const word = 'javascript';


// Dichiara la funzione qui.
const countVocali =(text) => {

const vocali = ["a", "e", "i", "o", "u"];
let vocaliCounter = 0;

for (let i = 0; i < text.length; i++) {
const letteraCorrente = text[i];

if (vocali.includes(letteraCorrente)) vocaliCounter++;
    
}
return vocaliCounter;

}
// Invoca la funzione qui e stampa il risultato in console
const invoca = countVocali(word);
console.log(invoca);





//Risultato atteso se si passa 'javascript': 3 (a, a, i)