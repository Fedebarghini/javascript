//Chiedi al cliente il prezzo
let prezzo=prompt("Inserisci il prezzo del prodotto:");
prezzo=parseFloat(prezzo);

let cuponsconto=prompt("Hai un cupon sconto? (si/no)");

let sconto=0;
if(cuponsconto.toLowerCase() ==="si" ||
cuponsconto.toLowerCase() === "si") {
    sconto=0.20; // 20%
}
if(prezzo>100) {
    sconto +=0.05; // 5% aggiuntivo
}
let prezzoFinale= prezzo-(prezzo * sconto);
console.log(prezzoFinale);
