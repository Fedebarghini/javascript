let forma=prompt ("inserire la forma geometrica per calcolare l'area: rettangolo,quadrato,cerchio")
console.log(prompt);
if(forma==="rettangolo"){
const base=prompt("inserisci valore base");
const altezza=prompt("inserisci valore altezza");
console.log("calcolo forma rettangolo VALORI B: " + base + "H: " + altezza)
let risultato=base*altezza;
console.log("l'area del rettangolo è" + risultato);

}
if(forma==="quadrato"){
    const lato=prompt("inserisci valore del primo lato")
    const lato2=prompt("inserisci valore del secondo lato")
    console.log("calcolo forma rettangolo VALORI L: " + lato + "L2: " + lato2)
    let risultato=lato*lato2;
    console.log("l'area del quadrato è" + risultato)
}
if(forma==="cerchio"){
    const raggio=prompt("inserisci il valore del primo raggio")
    const raggio2=prompt("inserisci il valore del secondo raggio")
    console.log("calcolo forma cerchio VALORI R :" +raggio + "R2 :" + raggio2)
    let risultato=raggio*raggio2;
    console.log("l'area del cerchio è" + risultato)
}
