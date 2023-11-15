
    const questions = [{
            category: "Science: Computers",
            type: "multiple",
            difficulty: "easy",
            question: "What does CPU stand for?",
            correct_answer: "Central Processing Unit",
            incorrect_answers: [
                "Central Process Unit",
                "Computer Personal Unit",
                "Central Processor Unit",
            ],
        },
        {
            category: "Science: Computers",
            type: "multiple",
            difficulty: "easy",
            question: "In the programming language Java, which of these keywords would you put on a variable to make sure it doesn&#039;t get modified?",
            correct_answer: "Final",
            incorrect_answers: ["Static", "Private", "Public"],
        },
        {
            category: "Science: Computers",
            type: "boolean",
            difficulty: "easy",
            question: "The logo for Snapchat is a Bell.",
            correct_answer: "False",
            incorrect_answers: ["True"],
        },
        {
            category: "Science: Computers",
            type: "boolean",
            difficulty: "easy",
            question: "Pointers were not used in the original C programming language; they were added later on in C++.",
            correct_answer: "False",
            incorrect_answers: ["True"],
        },
        {
            category: "Science: Computers",
            type: "multiple",
            difficulty: "easy",
            question: "What is the most preferred image format used for logos in the Wikimedia database?",
            correct_answer: ".svg",
            incorrect_answers: [".png", ".jpeg", ".gif"],
        },
        {
            category: "Science: Computers",
            type: "multiple",
            difficulty: "easy",
            question: "In web design, what does CSS stand for?",
            correct_answer: "Cascading Style Sheet",
            incorrect_answers: [
                "Counter Strike: Source",
                "Corrective Style Sheet",
                "Computer Style Sheet",
            ],
        },
        {
            category: "Science: Computers",
            type: "multiple",
            difficulty: "easy",
            question: "What is the code name for the mobile operating system Android 7.0?",
            correct_answer: "Nougat",
            incorrect_answers: [
                "Ice Cream Sandwich",
                "Jelly Bean",
                "Marshmallow",
            ],
        },
        {
            category: "Science: Computers",
            type: "multiple",
            difficulty: "easy",
            question: "On Twitter, what is the character limit for a Tweet?",
            correct_answer: "140",
            incorrect_answers: ["120", "160", "100"],
        },
        {
            category: "Science: Computers",
            type: "boolean",
            difficulty: "easy",
            question: "Linux was first created as an alternative to Windows XP.",
            correct_answer: "False",
            incorrect_answers: ["True"],
        },
        {
            category: "Science: Computers",
            type: "multiple",
            difficulty: "easy",
            question: "Which programming language shares its name with an island in Indonesia?",
            correct_answer: "Java",
            incorrect_answers: ["Python", "C", "Jakarta"],
        },
    ];

let currentQuestionIndex = 0;                                //indice delle domande per mostrarle a schermo
let correctAnswersCount = 0;                                 //contatore delle risposte corrette

function createQuestionElement(question, index) {
    const container = document.createElement('div');         // Crea un nuovo div come contenitore per la domanda.
    container.className = 'answer';                          // Assegna la classe 'answer' per lo styling.
    container.id = 'question-' + index;                      // Assegna un ID univoco basato sull'indice della domanda.
    const qElement = document.createElement('p');            // Crea un paragrafo per la domanda effettiva.
    const domanda = question.question;
    domanda.className = 'thisQuestion';
    qElement.innerHTML = domanda;                            // Imposta il testo della domanda dal parametro question.
    container.appendChild(qElement);                         // Aggiunge il paragrafo al contenitore della domanda.
    const allAnswers = [...question.incorrect_answers];      // Copia le risposte errate e verifica se la risposta corretta non è già presente nell'array.
    if (!allAnswers.includes(question.correct_answer)) {
        allAnswers.push(question.correct_answer);            // Se la risposta corretta non è presente, la aggiunge all'array.
    }

    allAnswers.sort(() => Math.random() - 0.5);              // Mescola l'array delle risposte per visualizzarle in ordine casuale.
    allAnswers.forEach(answer => {                           // Cicla su tutte le risposte per creare i radio button.
        const label = document.createElement('label');       // Crea un elemento label, utile per accessibilità e styling.
        const radioButton = document.createElement('input'); // Crea un radio button per la risposta.
        radioButton.type = 'radio';
        radioButton.name = 'question-' + index;              // Assegna un nome basato sull'indice della domanda, così tutti i radio buttons sono raggruppati.
        radioButton.value = answer;                          // Imposta il valore del radio button alla risposta corrispondente.
        label.appendChild(radioButton);                      // Aggiunge il radio button alla label.
        label.append(document.createTextNode(answer));       // Aggiunge il testo della risposta dopo il radio button nella label.
        container.appendChild(label);                        // Aggiunge la label completa al contenitore della domanda.
        radioButton.addEventListener('click', () => checkAnswer(question, index)); // Aggiunge un event listener per gestire il click sul radio button.
    });
    return container; // Restituisce il contenitore della domanda completo con le risposte.

}


function checkAnswer(question, index) {
    const radios = document.getElementsByName('question-' + index); // Ottiene tutti gli elementi input di tipo radio che hanno il nome basato sull'indice della domanda corrente.
    let answerGiven = false;                                        // Inizializza una variabile per tracciare se una risposta è stata data.
    radios.forEach(radio => {                                       // Cicla su ogni elemento radio trovato precedentemente.
        radio.disabled = true;                                      // Disabilita il radio button per impedire ulteriori selezioni dopo che una risposta è stata data.
        const label = radio.parentNode;                             // Ottiene l'elemento label che è il genitore diretto del radio button.
        if (radio.checked) {                                        // Controlla se il radio button corrente è selezionato.
            answerGiven = true;                                     // Imposta la variabile a vero perché l'utente ha selezionato una risposta.
            if (radio.value === question.correct_answer) {          // Controlla se il valore del radio button corrisponde alla risposta corretta della domanda.
                label.classList.add('correct');                     // Se è corretta, aggiunge la classe 'correct' alla label, cambiandone il colore a verde.
                correctAnswersCount++;                              // Incrementa il contatore delle risposte corrette.
            } else {
                label.classList.add('incorrect');                   // Se non è corretta, aggiunge la classe 'incorrect' alla label, cambiandone il colore a rosso.
            }
        } else if (radio.value === question.correct_answer) {       // Se il radio button non è selezionato ma il suo valore corrisponde alla risposta corretta...
            label.classList.add('correct');                         // ...aggiunge la classe 'correct' alla label per indicare la risposta corretta agli utenti.
        }
    });
     if (answerGiven) showNextQuestion();                           // Se una risposta è stata data, chiama la funzione per mostrare la prossima domanda. // io ho fatto la modifica
}


function showNextQuestion() {

    const currentQuestion = document.getElementById('question-' + currentQuestionIndex);  // Ottiene l'elemento corrente della domanda tramite il suo ID univoco.
    if (currentQuestion) currentQuestion.style.display = 'none';                          // Se esiste un elemento della domanda corrente, nasconde questo elemento impostando il display a 'none'.
    currentQuestionIndex++;                                                               // Incrementa l'indice per passare alla prossima domanda.
    if (currentQuestionIndex < questions.length) {                                        // Controlla se l'indice corrente è ancora minore del numero totale di domande.
        const nextQuestion = document.getElementById('question-' + currentQuestionIndex); // Ottiene l'elemento della prossima domanda tramite il suo ID univoco.
        if (nextQuestion) nextQuestion.style.display = 'block';                           // Se esiste un elemento della prossima domanda, mostra questo elemento impostando il display a 'block'.
    } else {
        alert('Sembra funzionare e tu ne hai indovinate : ' + correctAnswersCount);       // Se non ci sono altre domande, mostra un messaggio con il numero di risposte corrette.
    }
}
questions.forEach((question, index) => {                                                  // Cicla su ogni domanda nell'array 'questions'.
    const questionElement = createQuestionElement(question, index);                       // Crea un elemento DOM per la domanda attuale.
    document.getElementById('containerAnswer').appendChild(questionElement);              // Aggiunge l'elemento della domanda al contenitore del quiz.
});
showNextQuestion();
/*
document.getElementById('start-button').addEventListener('click', () => { // Aggiunge un event listener al bottone di inizio.
    questions.forEach((question, index) => { // Cicla su ogni domanda nell'array 'questions'.
        const questionElement = createQuestionElement(question, index); // Crea un elemento DOM per la domanda attuale.
        document.getElementById('containerAnswer').appendChild(questionElement); // Aggiunge l'elemento della domanda al contenitore del quiz.
    });
    showNextQuestion(); // Chiama la funzione per mostrare la prima domanda.
    document.getElementById('start-button').style.display = 'none'; // Nasconde il bottone di inizio dopo che è stato cliccato.
});
*/