/* Scrivi una funzione che accetti una stringa contenente un nome e restituisca un saluto seguito dal nome fornito (es. "Ciao [nome]") */

const userName = 'Mario';


// Dichiara la funzione qui. 
//** Inanzitutto devo creare una funzione per il saluto ciao.
// ** La chiamerò greetUser che sarà una const perché non cambia.
//** dentro questa costante metterò una funzione */
//**farò diventare greetUser il nome della funzione */
//** userò la forma arrow perché mi sembra più facile */

const greetUser = (nomeUtente) => {
    const saluto = "ciao" + " " + nomeUtente;
    return saluto;
}

// Invoca la funzione qui e stampa il risultato in console

const invoca = greetUser(userName);
console.log(invoca);





//Risultato atteso se si passa 'Mario': // ciao Mario
