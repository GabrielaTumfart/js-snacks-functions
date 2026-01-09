/* Scrivi una funzione che accetti un array di nomi e restituisca nuovo un array con le iniziali di ogni parola dell'array fornito */

const names = ["Anna", "Luca", "Marco", "Adele", "Giovanni", "Alessandra"];


// Dichiara la funzione qui.
//! Riprendo la stessa idea dell'esercizio 1

//** Inanzitutto devo creare una funzione che prenda un array di nome.
// ** La chiamerò inizialeParole che sarà una const perché non cambia.
//** dentro questa costante metterò una funzione */
//**farò diventare inizialeParole il nome della funzione */
//** userò la forma arrow perché mi sembra più facile */

// stampo la lista 
console.table(names);

// creo la funzione usando arrow

const inizialeParole = (nomi) => {

    // provo a creare un array vuoto

    const inizialiWord = [];




    // faccio un ciclo per prendere ogni nomi dell'array

    for (let i = 0; i < nomi.length; i++) {
        const ilNomeCorrente = nomi[i];
        const primaLetteraDelNome = ilNomeCorrente[0];

        inizialiWord.push(primaLetteraDelNome) 
    
    }

    return inizialiWord;

}

// Invoca la funzione qui e stampa il risultato in console

const invoca = inizialeParole(names);

// e stampo il risultato

console.log(invoca);



//Risultato atteso: ["A", "L", "M", "A", "G", "A"]