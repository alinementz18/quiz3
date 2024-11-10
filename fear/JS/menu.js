document.getElementById('start-btn').addEventListener('click', () => {
    // Redireciona para a página do jogo, que é o index.html
    window.location.href = 'index.html'; // Assegure-se que o caminho esteja correto
});

document.getElementById('score-btn').addEventListener('click', async () => {
    const response = await fetch('http://localhost:3000/user', {
        method: 'GET',
        headers: {
            'Authorization': `Bearer ${localStorage.getItem('token')}`
        }
    });

    if (response.ok) {
        const user = await response.json();
        alert(`Sua pontuação: ${user.score}`);
    } else {
        alert('Não foi possível carregar sua pontuação.');
    }
});

document.getElementById('logout-btn').addEventListener('click', () => {
    localStorage.removeItem('token');
    window.location.href = 'index.html'; // Redireciona para a página de login
});
