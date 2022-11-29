
const userPariDispari = parseInt(prompt('Pari o dispari?'), 10);
const userNumber = prompt('scegli un numero da 1 a 5!');

let randomNumber = randomNumberGenerator(1, 5);

// SOMMA DI DUE NUMERI
let somma = userNumber + randomNumber;
console.log(somma);
// STABILIRE SE LA SOMMA è PARI O DISPARI CON FUNZIONE
// STABILIRE IL VINCITORE

















// =============================================================================================== //
                                            // FUNCTION                                             
// =============================================================================================== //

function randomNumberGenerator (Min, Max){
    const randomNumber = Math.floor(Math.random() * (Max - Min + 1) + Min );
    return randomNumber;
}