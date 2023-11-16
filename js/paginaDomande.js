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

let currentQuestionIndex = -1;
let correctAnswersCount = 0;

function createQuestionElement(question, index) {
    const container = document.createElement('div');  // Crea un nuovo div come contenitore per la domanda.
    container.className = 'question-container';       // Assegna la classe 'question-container' per lo styling.
    container.id = 'question-' + index;               // Assegna un ID univoco basato sull'indice della domanda.
    const qElement = document.createElement('h1');
    qElement.className = 'questions';     // Crea un paragrafo per la domanda effettiva.
    qElement.innerHTML = question.question; // Imposta il testo della domanda dal parametro question.
    container.appendChild(qElement); // Aggiunge il paragrafo al contenitore della domanda.
    const allAnswers = [...question.incorrect_answers]; // Copia le risposte errate e verifica se la risposta corretta non è già presente nell'array.
    if (!allAnswers.includes(question.correct_answer)) {
        allAnswers.push(question.correct_answer); // Se la risposta corretta non è presente, la aggiunge all'array.
    }
    
    allAnswers.sort(() => Math.random() - 0.5); // Mescola l'array delle risposte per visualizzarle in ordine casuale.
    const containerAnswer = document.createElement("div");
    containerAnswer.className = "containerAnswer";   
    allAnswers.forEach(answer => { // Cicla su tutte le risposte per creare i radio button.
        const label = document.createElement('label'); // Crea un elemento label, utile per accessibilità e styling.
        const radioButton = document.createElement('input'); // Crea un radio button per la risposta.
        radioButton.type = 'radio';
        radioButton.name = 'question-' + index; // Assegna un nome basato sull'indice della domanda, così tutti i radio buttons sono raggruppati.
        radioButton.value = answer; // Imposta il valore del radio button alla risposta corrispondente.
        radioButton.style.display = "none";
        label.appendChild(radioButton); // Aggiunge il radio button alla label.
        label.append(document.createTextNode(answer)); // Aggiunge il testo della risposta dopo il radio button nella label.
        containerAnswer.appendChild(label); // Aggiunge la label completa al contenitore della domanda.
        radioButton.addEventListener('click', () => checkAnswer(question, index)); // Aggiunge un event listener per gestire il click sul radio button.    
    });
    container.appendChild(containerAnswer);
    
    const questionsCount= document.createElement("div");
    questionsCount.className = "questions-count"; 
    questionsCount.innerHTML = `QUESTION  ${index+1}<span>  /  ${questions.length} </span>`;
    container.appendChild(questionsCount);
    
    
    
    
    
    return container; // Restituisce il contenitore della domanda completo con le risposte.
    
}


function checkAnswer(question, index) {
    const radios = document.getElementsByName('question-' + index); // Ottiene tutti gli elementi input di tipo radio che hanno il nome basato sull'indice della domanda corrente.
    let answerGiven = false; // Inizializza una variabile per tracciare se una risposta è stata data.
    radios.forEach(radio => { // Cicla su ogni elemento radio trovato precedentemente.
        radio.disabled = true; // Disabilita il radio button per impedire ulteriori selezioni dopo che una risposta è stata data.
        const label = radio.parentNode; // Ottiene l'elemento label che è il genitore diretto del radio button.
        if (radio.checked) { // Controlla se il radio button corrente è selezionato.
            answerGiven = true; // Imposta la variabile a vero perché l'utente ha selezionato una risposta.
            if (radio.value === question.correct_answer) { // Controlla se il valore del radio button corrisponde alla risposta corretta della domanda.
                //label.classList.add('correct'); // Se è corretta, aggiunge la classe 'correct' alla label, cambiandone il colore a verde.
                correctAnswersCount++; // Incrementa il contatore delle risposte corrette.
            } else {
                //  label.classList.add('incorrect'); // Se non è corretta, aggiunge la classe 'incorrect' alla label, cambiandone il colore a rosso.
            }
        } else if (radio.value === question.correct_answer) { // Se il radio button non è selezionato ma il suo valore corrisponde alla risposta corretta...
            //  label.classList.add('correct'); // ...aggiunge la classe 'correct' alla label per indicare la risposta corretta agli utenti.
        }
    });
    if (answerGiven){
        showNextQuestion()
        ;// Se una risposta è stata data, chiama la funzione per mostrare la prossima domanda.
    }
    
}



function showNextQuestion() {
    
    const currentQuestion = document.getElementById('question-' + currentQuestionIndex); // Ottiene l'elemento corrente della domanda tramite il suo ID univoco.
    if (currentQuestion) currentQuestion.style.display = 'none'; // Se esiste un elemento della domanda corrente, nasconde questo elemento impostando il display a 'none'.
    currentQuestionIndex++; // Incrementa l'indice per passare alla prossima domanda.
    reset();
    startTimer();
    if (currentQuestionIndex < questions.length) { // Controlla se l'indice corrente è ancora minore del numero totale di domande.
    const nextQuestion = document.getElementById('question-' + currentQuestionIndex); // Ottiene l'elemento della prossima domanda tramite il suo ID univoco.
    if (nextQuestion) nextQuestion.style.display = 'block'; // Se esiste un elemento della prossima domanda, mostra questo elemento impostando il display a 'block'
} else {
    const mostraRisultato = document.getElementById("mostraIlRisultato");
    mostraRisultato.style.display = "block";
    const totalQuestion= questions.length;
    const totalWrongAnswers = totalQuestion - correctAnswersCount ;
    let printValue1 =  document.querySelector("#rate-us-left-correct .rate-us-percentuale-risultato");
    console.log(printValue1)
    let superamentoTest = parseInt(Math.round(correctAnswersCount*100/totalQuestion));
    printValue1.innerHTML= `${parseInt(Math.round(correctAnswersCount*100/totalQuestion))}% 
    <p class="rate-us-question"> ${correctAnswersCount}/${totalQuestion} questions</p>`;
    let printValue2 =  document.querySelector("#rate-us-right-wrong .rate-us-percentuale-risultato");
    printValue2.innerHTML= `${parseInt(Math.round(totalWrongAnswers*100/totalQuestion))}%
    <p class="rate-us-question"> ${totalWrongAnswers}/${totalQuestion} questions</p>`;
    const timer = document.getElementById("app");
    timer.style.display = "none";
    // CONDIZIONE: SE LE RISPOSTE CORRETTE SONO MAGGIORI D
    if (superamentoTest >= 60){
        let commentone = document.getElementById("complimenti")
        commentone.innerHTML =`<h1 class="insideDonutText">
            Congratulations!<br> <span>You passed the exam</span></h1>
            <p>We'll send you the certificate<br>in fem minutes.<br>Check your email (including<br>promotions / spam folder)</p>
            `
            
            
            var xValues = ["Wrong", "Correct"];
            var yValues = [totalWrongAnswers, correctAnswersCount];
            var barColors = [
            "#a6018b",
            "#97fdfd"
            ];
            
            new Chart("rate-us-grafico", {
                type: "doughnut",
                data: {
                    labels: xValues,
                    datasets: [{
                        borderWidth: 0,
                        backgroundColor: barColors,
                        data: yValues
                    }]
                },
                
                options: {
                    cutoutPercentage: 75,
                    responsive: true,
                    maintainAspectRatio: true,
                    legend: {
                        display: false
                    }
                }
            }) 
        } else {
            let commentone = document.getElementById("complimenti")
            commentone.innerHTML =`<h1 class="insideDonutText">
                Sorry!<br> <span id="failedExam">You failed the exam</span></h1>
                `
                
                //fine commento
                var xValues = ["Wrong", "Correct"];
                var yValues = [totalWrongAnswers, correctAnswersCount];
                var barColors = [
                "#a6018b",
                "#97fdfd"
                ];
                
                new Chart("rate-us-grafico", {
                    type: "doughnut",
                    data: {
                        labels: xValues,
                        datasets: [{
                            borderWidth: 0,
                            backgroundColor: barColors,
                            data: yValues
                        }]
                    },
                    
                    options: {
                        cutoutPercentage: 75,
                        responsive: true,
                        maintainAspectRatio: true,
                        legend: {
                            display: false
                        }
                    }
                })  
            }
            
            // Chart.pluginService.register({
                //     beforeDraw: function(chart) {
                    //         var width = chart.chart.width
                    //             height = chart.chart.height,
                    //             ctx = chart.chart.ctx;
                    //         ctx.restore();
                    //         var fontSize = (height / 400).toFixed(2);
                    //         ctx.font =  fontSize + "em sans-serif";
                    //         ctx.textBaseline = "middle";
                    //         var text = `Congratrulations! You passed the exam.`,
                    //             textX = Math.round((width - ctx.measureText(text).width) / 2),
                    //             textY = height / 2;
                    //         ctx.fillText(text, textX, textY);
                    
                    //         var text2 = `Congratrulations! You passed the exam.`,
                    //             textX2 = Math.round((width - ctx.measureText(text).width) / 4),
                    //             textY2 = height / 4;
                    //         ctx.fillText(text2, textX2, textY2);
                    //         ctx.save();
                    //     }
                    // })
                    ; // Se non ci sono altre domande, mostra un messaggio con il numero di risposte corrette.
                }
            }
            
            
            
            window.onload = function(){
                questions.forEach((question, index) => { // Cicla su ogni domanda nell'array 'questions'.
                const questionElement = createQuestionElement(question, index); // Crea un elemento DOM per la domanda attuale.
                document.getElementById('quiz-container').appendChild(questionElement); // Aggiunge l'elemento della domanda al contenitore del quiz.
            });
            showNextQuestion();   
        }
        
        
        
        /*
        document.getElementById('start-button').addEventListener('click', () => { // Aggiunge un event listener al bottone di inizio.
            questions.forEach((question, index) => { // Cicla su ogni domanda nell'array 'questions'.
            const questionElement = createQuestionElement(question, index); // Crea un elemento DOM per la domanda attuale.
            document.getElementById('quiz-container').appendChild(questionElement); // Aggiunge l'elemento della domanda al contenitore del quiz.
        });
        
        showNextQuestion(); // Chiama la funzione per mostrare la prima domanda.
        document.getElementById('start-button').style.display = 'none'; // Nasconde il bottone di inizio dopo che è stato cliccato.
    });
    */
    
    
    /******************************************************* ************************************************************/
    
    const FULL_DASH_ARRAY = 283;
    const WARNING_THRESHOLD = 10;
    const ALERT_THRESHOLD = 5;
    
    const COLOR_CODES = {
        info: {
            color: "green"
        },
        warning: {
            color: "orange",
            threshold: WARNING_THRESHOLD
        },
        alert: {
            color: "red",
            threshold: ALERT_THRESHOLD
        }
    };
    
    const TIME_LIMIT = 60;
    let timePassed = 0;
    let timeLeft = TIME_LIMIT;
    let timerInterval = null;
    let remainingPathColor = COLOR_CODES.info.color;
    document.getElementById("app").innerHTML = `<div class="base-timer">
        <svg class="base-timer__svg" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"> 
            <g class="base-timer__circle">
                <circle class="base-timer__path-elapsed" cx="50" cy="50" r="45"></circle>
                <path
                id="base-timer-path-remaining"
                stroke-dasharray="283"
                class="base-timer__path-remaining ${remainingPathColor}"
                d="
                M 50, 50
                m -45, 0
                a 45,45 0 1,0 90,0
                a 45,45 0 1,0 -90,0
                "
                ></path> 
            </g>
            <text x="50" y="30" class="re-size" text-anchor="middle" style="fill: white;"">SECONDI</text> 
            <text x="50" y="75" class="re-size"  text-anchor="middle" style="fill: white;"">RIMANENTI</text>
        </svg>
        <span id="base-timer-label" class="base-timer__label">  ${formatTime(
            timeLeft
            )}</span>
        </div>
        `;
        
        
        function onTimesUp() {
            clearInterval(timerInterval);
        }
        
        function startTimer() {
            timerInterval = setInterval(() => {
                timePassed = timePassed += 1;
                timeLeft = TIME_LIMIT - timePassed;
                document.getElementById("base-timer-label").innerHTML = formatTime(
                timeLeft
                );
                setCircleDasharray();
                setRemainingPathColor(timeLeft);
                
                if (timeLeft === 0) {
                    onTimesUp();
                    showNextQuestion();
                }
            }, 1000);
        }
        
        function reset(){
            clearInterval(timerInterval);
            timePassed = 0;
            timeLeft = TIME_LIMIT
            document.getElementById("base-timer-label").innerHTML = formatTime(
            timeLeft
            );
            setCircleDasharray();
            setRemainingPathColor(timeLeft);
        }
        
        function formatTime(time) {
            let seconds = time % 61;
            
            if (seconds < 10) {
                seconds = `0${seconds}`;
            }
            
            return `${seconds}`;
        }
        
        function setRemainingPathColor(timeLeft) {
            const { alert, warning, info } = COLOR_CODES;
            if (timeLeft <= alert.threshold) {
                document
                .getElementById("base-timer-path-remaining")
                .classList.remove(warning.color);
                document
                .getElementById("base-timer-path-remaining")
                .classList.add(alert.color);
            } else if (timeLeft <= warning.threshold) {
                document
                .getElementById("base-timer-path-remaining")
                .classList.remove(info.color);
                document
                .getElementById("base-timer-path-remaining")
                .classList.add(warning.color);
            }
        }
        
        function calculateTimeFraction() {
            const rawTimeFraction = timeLeft / TIME_LIMIT;
            return rawTimeFraction - (1 / TIME_LIMIT) * (1 - rawTimeFraction);
        }
        
        function setCircleDasharray() {
            const circleDasharray = `${(
                calculateTimeFraction() * FULL_DASH_ARRAY
                ).toFixed(0)} 283`;
                document
                .getElementById("base-timer-path-remaining")
                .setAttribute("stroke-dasharray", circleDasharray);
            }
            
            
            /*-------------------------------------------- Prova Grafico a Ciambella ----------------------------------------------*/
            
            /*var arrayCanvasX = ["Correct", "Wrong"];
            var arrayCanvasY = [correctAnswersCount, totalWrongAnswers]
            
            const colors = [
            ""
            ]
            */
            
            