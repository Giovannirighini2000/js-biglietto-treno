//******VIAGGIO IN TRENO*****
console.log('Costo del biglietto del treno:')


//******CHIEDERE KM DEL VIAGGGIO*****
const kmDelViaggio = parseInt(prompt('inserisci i km del tuo viaggio in treno: '))
console.log(kmDelViaggio)
const kmViaggio = document.getElementById('Km')
kmViaggio.innerHTML = kmDelViaggio

if (isNaN(kmDelViaggio)){
       alert("Hai digitato un carattere devi inserire i km");
    }


//****CHIEDERE NOME E COGNOME DEL PASSEGGERO ****/
const nome = prompt('Quale il tuo nome?')
const cognome = prompt('Quale il tuo cognome?')
const nomeCognomeDelPasseggero = nome +(' ')+ cognome
console.log(nomeCognomeDelPasseggero)

const personaNC = document.getElementById('nome')
personaNC.innerHTML = nomeCognomeDelPasseggero


//*** COSTO BASE DEL BIGLETTO******/
const biglettoDelTreno  = (0.21*kmDelViaggio)
console.log(biglettoDelTreno)

const prezzoStandard = document.getElementById('prezzo')
prezzoStandard.innerHTML = biglettoDelTreno

//**ETA DEL PASSEGGERO+SCONTO = prezzo totale scontato in base all'eta*/
const etaDelViaggiatore = parseInt(prompt('inserisci la tua età:'))

if (etaDelViaggiatore <18 ){
    let minorenne = biglettoDelTreno / 100 * 20
    console.log(minorenne.toFixed(2)) 
    let prezzoTotale = biglettoDelTreno - minorenne
    console.log(prezzoTotale)
    const PrezzoTot = document.getElementById('Costo')
    PrezzoTot.innerHTML = prezzoTotale.toFixed(2)
    
}
if ('Prezzo scontato non disponibile'){
    const PrezzoTot = document.getElementById('Costo')
    PrezzoTot.innerHTML = ('Prezzo scontato non disponibile')
}


if  (etaDelViaggiatore  >65) {
    let overSessantaCinque = biglettoDelTreno / 100 * 20
    console.log(overSessantaCinque.toFixed(2))
    let prezzoTotaleHigh = biglettoDelTreno - overSessantaCinque
    console.log(prezzoTotaleHigh)

    const PrezzoTot = document.getElementById('Costo')
    PrezzoTot.innerHTML = prezzoTotaleHigh.toFixed(2)
}
if (isNaN(etaDelViaggiatore)){
    alert("Hai digitato un carattere devi inserire la tua età");
 }










