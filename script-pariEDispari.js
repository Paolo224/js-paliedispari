let userPariDispari = 0;

while( (userPariDispari != 'pari') && (userPariDispari != 'dispari')){
    userPariDispari = prompt('pari o dispari?');
}

let userNumber = 0;

while( (userNumber < 1) || (userNumber > 5)){
    userNumber = parseInt(prompt('Scegli un numero da 1 a 5'), 10);
}

console.log('Hai scelto: ' + userPariDispari);
console.log('il tuo numero: ' + userNumber);

let randomNumber = randomNumberGenerator(1, 5);

console.log('Il mio numero è: ' + randomNumber)

// SOMMA DI DUE NUMERI

let somma = userNumber + randomNumber;
console.log(somma);

// STABILIRE SE LA SOMMA è PARI O DISPARI CON FUNZIONE

let pari_dispari = HowIsTheNumber(somma);

// STABILIRE IL VINCITORE

if(userPariDispari === pari_dispari){
    console.log('HAI VINTO');
} else{
    console.log('NON HAI VINTO')
}



// =============================================================================================== //
                                            // FUNCTION                                             
// =============================================================================================== //

function randomNumberGenerator (Min, Max){
    const randomNumber = Math.floor(Math.random() * (Max - Min + 1) + Min );
    return randomNumber;
}

function HowIsTheNumber (value){
    if(value % 2 === 0){
        return 'pari';
    } else{
        return 'dispari';
    }
    
}