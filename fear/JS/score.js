window.onload = function() {
    const scoreDisplay = document.getElementById('score-display');
    const score = localStorage.getItem('score'); // Obtém a pontuação do localStorage
    scoreDisplay.textContent = `Sua pontuação: ${score || 0}`; // Se não houver pontuação, mostra 0
};
