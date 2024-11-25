document.addEventListener('DOMContentLoaded', () => {
    const sidebar = document.querySelector('.sidebar');
    const navLinks = document.querySelectorAll('.nav-links a');
    const sections = document.querySelectorAll('.section');
    
    // Toggle sidebar
    document.querySelector('.logo-details').addEventListener('click', () => {
        sidebar.classList.toggle('close');
        localStorage.setItem('sidebarState', sidebar.classList.contains('close'));
    });

    // Restore sidebar state
    const savedState = localStorage.getItem('sidebarState');
    if (savedState === 'true') {
        sidebar.classList.add('close');
    }

    // Navigation
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href').substring(1);
            
            // Update active states
            navLinks.forEach(l => l.classList.remove('active'));
            link.classList.add('active');
            
            sections.forEach(section => {
                section.classList.remove('active');
                if (section.id === targetId) {
                    section.classList.add('active');
                }
            });
        });
    });

    // Mobile optimization
    const handleResize = () => {
        if (window.innerWidth <= 768) {
            sidebar.classList.add('close');
        }
    };

    window.addEventListener('resize', handleResize);
    handleResize();
});