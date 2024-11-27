document.addEventListener('DOMContentLoaded', () => {
    // Check if user is logged in
    const loggedInUser = localStorage.getItem('currentUser');
    if (!loggedInUser && !window.location.pathname.includes('index.html')) {
        window.location.href = 'index.html';
        return;
    }

    const sidebar = document.querySelector('.sidebar');
    const mobileToggle = document.querySelector('.mobile-toggle');
    const navLinks = document.querySelectorAll('.nav-links a');
    const sections = document.querySelectorAll('.section');
    const mainContent = document.querySelector('.home-section');

    // Show current user name
    const userNameElement = document.querySelector('.user-name');
    if (userNameElement) {
        userNameElement.textContent = loggedInUser;
    }

    // Mobile toggle functionality
    if (mobileToggle) {
        mobileToggle.addEventListener('click', () => {
            sidebar.classList.toggle('show');
            mobileToggle.classList.toggle('active');
        });
    }

    // Handle navigation
    const showSection = (sectionId) => {
        sections.forEach(section => {
            if (section.id === sectionId) {
                section.classList.add('active');
                section.style.display = 'block';
                setTimeout(() => {
                    section.style.opacity = '1';
                    section.style.transform = 'translateY(0)';
                }, 50);
            } else {
                section.classList.remove('active');
                section.style.opacity = '0';
                section.style.transform = 'translateY(20px)';
                setTimeout(() => {
                    section.style.display = 'none';
                }, 300);
            }
        });
    };

    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href').substring(1);
            
            // Update active states
            navLinks.forEach(l => l.classList.remove('active'));
            link.classList.add('active');
            
            showSection(targetId);

            // On mobile, close sidebar after navigation
            if (window.innerWidth <= 768) {
                sidebar.classList.remove('show');
                mobileToggle.classList.remove('active');
            }

            // Save last active section
            localStorage.setItem('lastActiveSection', targetId);
        });
    });

    // Restore last active section
    const lastActiveSection = localStorage.getItem('lastActiveSection') || 'home';
    const activeLink = document.querySelector(`[href="#${lastActiveSection}"]`);
    if (activeLink) {
        activeLink.classList.add('active');
        showSection(lastActiveSection);
    }

    // Close sidebar when clicking outside
    document.addEventListener('click', (e) => {
        if (window.innerWidth <= 768 && 
            !sidebar.contains(e.target) && 
            !mobileToggle.contains(e.target) && 
            sidebar.classList.contains('show')) {
            sidebar.classList.remove('show');
            mobileToggle.classList.remove('active');
        }
    });

    // Desktop sidebar toggle
    const logoDetails = document.querySelector('.logo-details');
    if (logoDetails) {
        logoDetails.addEventListener('click', () => {
            if (window.innerWidth > 768) {
                sidebar.classList.toggle('close');
                localStorage.setItem('sidebarState', sidebar.classList.contains('close'));
                
                if (mainContent) {
                    mainContent.style.marginLeft = sidebar.classList.contains('close') ? 
                        'var(--sidebar-collapsed)' : 'var(--sidebar-width)';
                }
            }
        });
    }

    // Handle resize
    const handleResize = () => {
        if (window.innerWidth > 768) {
            sidebar.classList.remove('show');
            const savedState = localStorage.getItem('sidebarState');
            if (savedState === 'true') {
                sidebar.classList.add('close');
            }
        } else {
            sidebar.classList.remove('close');
        }
    };

    window.addEventListener('resize', handleResize);
    handleResize();
});