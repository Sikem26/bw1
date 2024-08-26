document.addEventListener('DOMContentLoaded', () => {
    // Recupera il punteggio dal localStorage
    let punteggio = localStorage.getItem('punteggio');
console.log(localStorage)
    // Trova l'elemento dove visualizzare il punteggio
    let finalScoreElement = document.getElementById('finalScore');
    if (finalScoreElement) {
      finalScoreElement.innerHTML = ` ${punteggio}`;
    }
  });
  
  