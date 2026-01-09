/* Scrivi una funzione che accetti un'array di stringhe e una lettera e restituisca un array contenente solo le parole che iniziano con quella lettera */

const names = ["Anna", "Luca", "Marco", "Adele", "Laura", "Alessandra"];


// Dichiara la funzione qui.

//! Riprendo la stessa idea dell'esercizio 2

//** Inanzitutto devo creare una funzione che filtra il nome in base alla lettera iniziale.
// ** La chiamerò filtroNomi che sarà una const perché non cambia.
//** dentro questa costante metterò una funzione */
//**farò diventare filtroNomi il nome della funzione */
//** userò la forma arrow perché mi sembra più facile */

// stampo la lista
console.table(names);

const filtroNomi = (listaDeiNomi, lettera) => [

    // così come nell'esercizio di prima creo un array vuoto

    const nomiGiaFiltrati = [];

    for (let i = 0; i < listaDeiNomi.length; i++) {
        const nomeCorrente = alistaDeiNomi[i];
        const primaLettera = nomeCorrente[0]; //! Come ho fatto nell'esercizio precedente

        if(primaLettera === lettera){

        nomiGiaFiltrati.push(nomeCorrente);

    }
    }

    return nomiGiaFiltrati;
]


// Invoca la funzione qui e stampa il risultato in console

const invoca = filtroNomi(names);
console.log(invoca);






//Risultato atteso se si passa la lettera A: ["Anna", "Adele", "Alessandra"]