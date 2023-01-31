//******VIAGGIO IN TRENO*****
console.log('Costo del biglietto del treno:')


//******CHIEDERE KM DEL VIAGGGIO*****
const kmDelViaggio = parseInt(prompt('inserisci i km del tuo viaggio in treno: '))
console.log(kmDelViaggio)

if (isNaN(kmDelViaggio)){
       alert("Hai digitato un carattere devi inserire i km");
    }


//****CHIEDERE NOME E COGNOME DEL PASSEGGERO ****/
const nomeCognomeDelPasseggero = prompt('inserisci il tuo nome e cognome:')
console.log(nomeCognomeDelPasseggero)


//*** COSTO BASE DEL BIGLETTO******/
const biglettoDelTreno  = (0.21*kmDelViaggio)
console.log(biglettoDelTreno)

//**ETA DEL PASSEGGERO+SCONTO = prezzo totale scontato in base all'eta*/
const etaDelViaggiatore = parseInt(prompt('inserisci la tua età:'))

if (etaDelViaggiatore <18 ){
    let minorenne = biglettoDelTreno * 0.8
    console.log(minorenne.toFixed(2)) 
    
    
}



if  (etaDelViaggiatore  >65) {
    let overSessantaCinque = biglettoDelTreno * 0.6
  console.log(overSessantaCinque.toFixed(2))
}











