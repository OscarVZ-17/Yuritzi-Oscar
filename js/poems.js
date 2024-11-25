document.addEventListener('DOMContentLoaded', () => {
    const poems = [
        {
            title: 'En Tus Ojos',
            content: `En tus ojos veo estrellas,
En tu sonrisa el sol,
Cada momento contigo
Es un momento de amor.`
        },
        {
            title: 'Juntos Por Siempre',
            content: `A través de tormentas y sol,
Entre risas y lágrimas,
Nuestro amor crece más fuerte,
Con cada año que pasa.`
        }
    ];

    const poemsContainer = document.querySelector('.poems-container');
    
    if (poemsContainer) {
        poems.forEach(poem => {
            const poemCard = document.createElement('div');
            poemCard.className = 'poem-card fade-in';
            poemCard.innerHTML = `
                <h3>${poem.title}</h3>
                <p>${poem.content}</p>
            `;
            poemsContainer.appendChild(poemCard);
        });
    }
});