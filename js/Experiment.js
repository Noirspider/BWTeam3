window.onload = function() {
    alert("Buonasera");
  };
  var testoGenerato = "Questo è del testo generato dinamicamente.";

document.getElementById('redButton').addEventListener('click', function() {
    // Creazione di una nuova finestra
    const newWindow = window.open();
    
    // Creazione del contenuto HTML nella nuova finestra
    newWindow.document.write(`
        <!DOCTYPE html>
        <html>
        <head>
            <title>Nuova Pagina</title>
            <style>
                body {
                    margin: 0;
                    padding: 0;
                    height: 100vh;
                    background-color: #0077be; /* Sfondo blu mare */
                    display: flex;
                    justify-content: center;
                    align-items: center;
                }

                .square {
                    width: 100px;
                    height: 100px;
                    background-color: #ff0000; /* Quadrato rosso */
                    color: #ffffff; /* Testo bianco */
                    font-size: 24px;
                    text-align: center;
                    line-height: 100px;
                }
            </style>
        </head>
        <body>
            <div class="square" id="risposta"></div>
        </body>
        <script>
        function generaTesto(testoGenerato) {
            // Otteniamo il riferimento all'elemento <div> con l'ID "risposta"
            var divRisposta = document.getElementById("risposta");
          
            // Generiamo del testo
           
          
            // Assegniamo il testo generato all'elemento <div>
            divRisposta.textContent = testoGenerato;
          }
          
          // Chiamiamo la funzione per generare il testo quando necessario
          generaTesto();
        </script>
        </html>
    `);
   
    // Chiudere la finestra di anteprima se si sta sviluppando localmente
    if (window.location.protocol === 'file:') {
        newWindow.close();
    }
});


