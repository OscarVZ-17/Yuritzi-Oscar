document.addEventListener('DOMContentLoaded', () => {
    const memories = [
        {
            image: 'https://images.unsplash.com/photo-1518568814500-bf0f8d125f46',
            title: 'Nuestro Primer Día',
            date: '15 de Enero, 2023'
        },
        {
            image: 'https://images.unsplash.com/photo-1522673607200-164d1b6ce486',
            title: 'Atardecer en la Playa',
            date: '22 de Abril, 2023'
        },
        {
            image: 'https://images.unsplash.com/photo-1454923634634-bd1614719a7b',
            title: 'Navidad Juntos',
            date: '25 de Diciembre, 2023'
        }
    ];

    const memoryGrid = document.querySelector('.memory-grid');
    
    if (memoryGrid) {
        memories.forEach(memory => {
            const memoryCard = document.createElement('div');
            memoryCard.className = 'memory-card fade-in';
            memoryCard.innerHTML = `
                <img src="${memory.image}" alt="${memory.title}">
                <div class="memory-info">
                    <h3>${memory.title}</h3>
                    <p>${memory.date}</p>
                </div>
            `;
            memoryGrid.appendChild(memoryCard);
        });
    }
});