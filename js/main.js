const etaPasseggero = prompt("Quanti anni hai?");
const etaNumero = parseInt(etaPasseggero);

const kmPasseggero = prompt("Quanti km vuoi percorrere?");
const kmNumero = parseInt(kmPasseggero);

const costoKm = parseInt(0.21);

const scontoMinorenne = parseInt(0.21 / 100 * 20);
const scontoOver65 = parseInt(0.21 / 100 * 40);

if (etaNumero <18) {
    alert("Il tuo prezzo è " + (kmNumero * (0.21 - (0.21 / 100 * 20) )) .toFixed(2) + " euro");
}

else if  (etaNumero >= 65) {
    alert("Il tuo prezzo è " + (kmNumero * (0.21 - (0.21 / 100 * 40))) .toFixed(2) + " euro");
}

else { (etaNumero >= 18 && etaNumero <65) 
    alert("Il tuo prezzo è " + (kmNumero * 0.21) .toFixed(2) + " euro");
}

//con la sottrazione con numeri funziona lo sconto, con la classe scontoMinorenne no//