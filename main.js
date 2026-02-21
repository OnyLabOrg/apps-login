// Translations
const translations = {
    de: {
        title: "Melden Sie sich bei Ihrer OnyLab-Anwendung an",
        badge: {email: "email", marketing: "marketing", order: "bestellung", sms: "sms"}
    },
    fr: {
        title: "Connectez-vous à votre application OnyLab",
        badge: {email: "email", marketing: "marketing", order: "commande", sms: "sms"}
    },
    en: {
        title: "Connect to your OnyLab application",
        badge: {email: "email", marketing: "marketing", order: "order", sms: "sms"}
    },
    es: {
        title: "Conéctese a su aplicación OnyLab",
        badge: {email: "correo electrónico", marketing: "marketing", order: "pedido", sms: "sms"}
    },
    pt: {
        title: "Conecte-se à sua aplicação OnyLab",
        badge: {email: "email", marketing: "marketing", order: "pedido", sms: "sms"}
    },
};

let currentLang = 'en';
let isMenuOpen = false;

// Detect browser language
function detectBrowserLanguage() {
    const browserLang = navigator.language || navigator.userLanguage;
    const langCode = browserLang.split('-')[0];
    
    // Supported languages
    const supportedLangs = ['de', 'fr', 'en', 'es', 'pt'];
    
    if (supportedLangs.includes(langCode)) {
        return langCode;
    }
    
    // Default language if not supported
    return 'en';
}

// Update content based on language
function updateContent(lang) {
    const t = translations[lang];
    
    const title = document.querySelector('.title');
    if (title !== null) {
        title.innerHTML = t.title;
    }
    const badgeEmail = document.querySelector('.app-badge-email');
    if (badgeEmail !== null) {
        badgeEmail.innerHTML = t.badge.email;
    }
    const badgeSms = document.querySelector('.app-badge-sms');
    if (badgeSms !== null) {
        badgeSms.innerHTML = t.badge.sms;
    }
    const badgeOrder = document.querySelector('.app-badge-order');
    if (badgeOrder !== null) {
        badgeOrder.innerHTML = t.badge.order;
    }
    const badgeMarketing = document.querySelector('.app-badge-marketing');
    if (badgeMarketing !== null) {
        badgeMarketing.innerHTML = t.badge.marketing;
    }
    
    // Update text direction for Arabic
    if (lang === 'ar') {
        document.body.style.direction = 'rtl';
        document.querySelector('.login-card').style.textAlign = 'right';
    } else {
        document.body.style.direction = 'ltr';
        document.querySelector('.login-card').style.textAlign = 'center';
    }
}

// Select a language
function selectLanguage(code, name, flagClass) {
    currentLang = code;
    
    // Update button display
    document.getElementById('currentLanguage').textContent = name;
    document.getElementById('currentFlag').className = `language-flag ${flagClass}`;
    
    // Update active options
    document.querySelectorAll('.language-option').forEach(option => {
        option.classList.remove('active');
    });
    event.target.closest('.language-option').classList.add('active');
    
    // Update content
    updateContent(code);
    
    // Close menu
    toggleLanguageMenu();
    
    // Save preference
    localStorage.setItem('preferredLanguage', code);
}

// Toggle language menu
function toggleLanguageMenu() {
    isMenuOpen = !isMenuOpen;
    const menu = document.getElementById('languageMenu');
    const arrow = document.getElementById('dropdownArrow');
    
    if (isMenuOpen) {
        menu.classList.add('open');
        arrow.classList.add('open');
    } else {
        menu.classList.remove('open');
        arrow.classList.remove('open');
    }
}

// Close menu when clicking outside
document.addEventListener('click', (e) => {
    if (!e.target.closest('.language-dropdown') && isMenuOpen) {
        toggleLanguageMenu();
    }
});

// Particle animation
function createParticles() {
    const particlesContainer = document.getElementById('particles');
    const particleCount = 50;

    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.top = Math.random() * 100 + '%';
        particle.style.animationDelay = Math.random() * 3 + 's';
        particle.style.animationDuration = (Math.random() * 2 + 2) + 's';
        particlesContainer.appendChild(particle);
    }
}

// Parallax effect on login card
document.addEventListener('mousemove', (e) => {
    const card = document.querySelector('.login-card');
    const x = (e.clientX - window.innerWidth / 2) / window.innerWidth;
    const y = (e.clientY - window.innerHeight / 2) / window.innerHeight;

    card.style.transform = `perspective(1000px) rotateY(${x * 5}deg) rotateX(${-y * 5}deg) translateY(-5px)`;
});

// Reset card when mouse leaves the window
document.addEventListener('mouseleave', () => {
    const card = document.querySelector('.login-card');
    card.style.transform = 'perspective(1000px) rotateY(0deg) rotateX(0deg) translateY(-5px)';
});

// Initialization
document.addEventListener('DOMContentLoaded', () => {
    createParticles();
    
    // Detect preferred language (saved or browser)
    const savedLang = localStorage.getItem('preferredLanguage');
    const browserLang = detectBrowserLanguage();
    const preferredLang = savedLang || browserLang;
    
    // Initial language configuration
    const langConfig = {
        'de': { name: 'Deutsch', flag: 'flag-de' },
        'fr': { name: 'Français', flag: 'flag-fr' },
        'en': { name: 'English', flag: 'flag-en' },
        'es': { name: 'Español', flag: 'flag-es' },
        'pt': { name: 'Português', flag: 'flag-pt' },
        'ar': { name: 'العربية', flag: 'flag-ar' }
    };
    
    const config = langConfig[preferredLang];
    currentLang = preferredLang;
    
    // Update initial display
    document.getElementById('currentLanguage').textContent = config.name;
    document.getElementById('currentFlag').className = `language-flag ${config.flag}`;
    
    // Update active option in menu
    document.querySelectorAll('.language-option').forEach(option => {
        option.classList.remove('active');
        if (option.onclick.toString().includes(`'${preferredLang}'`)) {
            option.classList.add('active');
        }
    });
    
    // Update content
    updateContent(preferredLang);
    
    // Delayed entrance animation for elements
    setTimeout(() => {
        document.querySelector('.login-card').style.opacity = '1';
    }, 300);
});

// Connect to specific app
function connectToApp(appKey) {
    window.location.href = 'https://login.apps.onylab.com/auth?app=' + String(appKey);
}

// Flip cards — lock state during transition to prevent animation glitches
document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.app-card').forEach(card => {
        let isAnimating = false;

        function onFlipEnd() {
            isAnimating = false;
            if (!card.matches(':hover')) {
                card.classList.remove('flipped');
            }
        }

        card.addEventListener('mouseenter', () => {
            isAnimating = true;
            card.classList.add('flipped');
        });

        card.addEventListener('mouseleave', () => {
            if (!isAnimating) {
                card.classList.remove('flipped');
                return;
            }
            // Wait for the flip transition to complete before unflipping
            card.addEventListener('transitionend', function handler(e) {
                if (e.propertyName !== 'transform') return;
                card.removeEventListener('transitionend', handler);
                onFlipEnd();
            });
            setTimeout(onFlipEnd, 3000);
        });
    });
});