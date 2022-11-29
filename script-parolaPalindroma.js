let parola = prompt('inserisci una parola');
let carattere;
let parolaInversa = '';

for(let i = parola.length -1; i >= 0; i--){
    carattere = parola[i];
    parolaInversa += carattere;
    console.log(carattere);
}

console.log(parolaInversa);

if (parola == parolaInversa) {
    console.log('la parola è palindroma');
} else {
    console.log('la parola non è palindroma');
}




