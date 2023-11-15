function brightStars() {                                    //dichiarazione funzione per illuminare le stelle                      
    let click = false;                                      // dichiariamo la variabile "click" per differenziare gli eventi prima o dopo il click su una stella
    let stelle = document.querySelectorAll('.star');        // dichiariamo una variabile chiamata stelle e la riempiamo con tutti gli elementi con la classe
    let stelleArray = Array.from(stelle);                   // usiamo il costruttore Array. per creare un stelleArray con dentro tutti gli elementi della variabile  stelle dichiarata sopra
    console.log(stelle);                                    // vediamo se non abbiamo sbagliato nulla pubblicando sulla console la variabile stelle
    stelleArray.forEach((stella, index, stelleArray) => {    // Per ogni elemento nell'array stelleArray, conosciuto come 'stella' e 'index' (che rappresenta l'indice)
        stella.addEventListener("click", function () {      // Aggiungi un listener per l'evento click esegui questa funzione
        click = true;                                       // se c'è stato il click cambia il valore della variabile click in true
        for (let i = index; i > 0; i--) {                   // avvia un ciclo for partendo dal valore di index e scendo fino a 0
                stelleArray[i].classList.add('active')      // per ogni elemento dell'array stelleArray aggiungi la classe css "active"
            }
        })
    }) //
stelleArray.forEach((stella, index) => {                   // Per ogni elemento nell'array stelleArray, conosciuto come 'stella' e 'index' (che rappresenta l'indice)
    stella.addEventListener("mouseout", function () {      // Aggiungi un listener per l'evento di uscita del mouse dall'elemento 'stella'
        if (click === false) {                             // Se 'click' è falso (non è stato fatto un click)
            for (let i = index; i >= 0; i--) {             // Inizia un ciclo for da 'index' (l'indice corrente) e scorri all'indietro fino a 0
                stelleArray[i].classList.remove('active')  // Rimuovi la classe css 'active' da ciascun elemento nell'array stelleArray
            }
        }
    })
})
stelleArray.forEach((stella, index) => {                   // Rimuovi la classe css 'active' da ciascun elemento nell'array stelleArray
    stella.addEventListener("mouseover", function () {     // Aggiungi un listener per l'evento di passaggio del mouse sull'elemento 'stella'
        if (click === false) {                             // Se 'click' è falso (non è stato fatto un click)
            for (let i = index; i >= 0; i--) {             // Inizia un ciclo for da 'index' (l'indice corrente) e scorri all'indietro fino a 0
                stelleArray[i].classList.add('active')     // Aggiungi la classe 'active' a ciascun elemento nell'array stelleArray
            }
        }
    })
})
console.log(click);                                        // Stampa sulla console il valore di 'click' per controllare che tutto funzioni
}

brightStars();                                             // chiamiamo la funzione per avviarla