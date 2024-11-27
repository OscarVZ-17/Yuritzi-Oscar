document.addEventListener('DOMContentLoaded', () => {
    const entriesList = document.getElementById('entriesList');
    const newEntryText = document.getElementById('newEntry');
    const saveButton = document.getElementById('saveEntry');

    // Load entries from localStorage
    let entries = JSON.parse(localStorage.getItem('journalEntries') || '[]');

    const saveEntry = () => {
        const content = newEntryText.value.trim();
        if (!content) return;

        const currentUser = localStorage.getItem('currentUser');
        const entry = {
            id: Date.now(),
            content,
            author: currentUser,
            date: new Date().toLocaleDateString()
        };

        entries.unshift(entry);
        localStorage.setItem('journalEntries', JSON.stringify(entries));
        newEntryText.value = '';
        renderEntries();
    };

    const renderEntries = () => {
        if (!entriesList) return;
        
        entriesList.innerHTML = entries.map(entry => `
            <div class="entry fade-in">
                <div class="entry-header">
                    <div class="entry-meta">
                        <i class='bx bxs-user'></i>
                        <span class="entry-author">${entry.author}</span>
                        <i class='bx bxs-calendar'></i>
                        <span>${entry.date}</span>
                    </div>
                </div>
                <p>${entry.content}</p>
            </div>
        `).join('');
    };

    if (saveButton) {
        saveButton.addEventListener('click', saveEntry);
    }

    if (newEntryText) {
        newEntryText.addEventListener('keypress', (e) => {
            if (e.key === 'Enter' && e.ctrlKey) {
                saveEntry();
            }
        });
    }

    // Initial render
    renderEntries();
});