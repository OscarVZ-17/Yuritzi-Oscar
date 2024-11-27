document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('login-form');
    const loginContainer = document.getElementById('login-container');
    const usernameInput = document.getElementById('username');
    const passwordInput = document.getElementById('password');

    // Create background hearts
    const backgroundHearts = document.createElement('div');
    backgroundHearts.className = 'background-hearts';
    loginContainer.appendChild(backgroundHearts);

    // Add floating background hearts
    for (let i = 0; i < 20; i++) {
        const heart = document.createElement('i');
        heart.className = 'bx bxs-heart background-heart';
        heart.style.left = `${Math.random() * 100}%`;
        heart.style.fontSize = `${Math.random() * 20 + 10}px`;
        heart.style.animationDuration = `${Math.random() * 3 + 2}s`;
        heart.style.animationDelay = `${Math.random() * 2}s`;
        backgroundHearts.appendChild(heart);
    }

    const validUsers = {
        'Oscar': 'amor2024',
        'Yuritzi': 'amor2024'
    };

    // Check if user is already logged in
    const loggedInUser = localStorage.getItem('currentUser');
    if (loggedInUser && window.location.pathname.includes('index.html')) {
        window.location.href = 'home.html';
        return;
    }

    // Show error message
    const showError = (message) => {
        const errorDiv = document.createElement('div');
        errorDiv.className = 'error-message fade-in';
        errorDiv.textContent = message;
        loginForm.insertBefore(errorDiv, loginForm.firstChild);
        
        setTimeout(() => {
            errorDiv.remove();
        }, 3000);
    };

    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const username = usernameInput.value.trim();
        const password = passwordInput.value;

        if (!username || !password) {
            showError('Por favor completa todos los campos');
            loginForm.classList.add('shake');
            setTimeout(() => loginForm.classList.remove('shake'), 500);
            return;
        }

        if (validUsers[username] && validUsers[username] === password) {
            localStorage.setItem('currentUser', username);
            
            // Add success animation before redirect
            const loginBox = document.querySelector('.login-box');
            loginBox.style.transform = 'scale(0.95)';
            loginBox.style.opacity = '0';
            
            setTimeout(() => {
                window.location.href = 'home.html';
            }, 500);
        } else {
            showError('Usuario o contraseña incorrectos');
            loginForm.classList.add('shake');
            setTimeout(() => loginForm.classList.remove('shake'), 500);
            passwordInput.value = '';
        }
    });

    // Add input focus animations
    const inputs = document.querySelectorAll('.input-group input');
    inputs.forEach(input => {
        input.addEventListener('focus', () => {
            input.parentElement.querySelector('i').style.color = 'var(--primary-color)';
        });
        
        input.addEventListener('blur', () => {
            if (!input.value) {
                input.parentElement.querySelector('i').style.color = '#a0aec0';
            }
        });
    });
});