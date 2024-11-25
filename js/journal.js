document.addEventListener('DOMContentLoaded', () => {
    const entriesList = document.getElementById('entriesList');
    const newEntryText = document.getElementById('newEntry');
    const saveButton = document.getElementById('saveEntry');

    // Load entries from localStorage
    let entries = JSON.parse(localStorage.getItem('journalEntries') || '[]');

    const saveEntry = () => {
        const content = newEntryText.value.trim();
        if (!content) return;

        const entry = {
            id: Date.now(),
            content,
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
                    <i class='bx bxs-calendar'></i>
                    <span>${entry.date}</span>
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

    renderEntries();
});