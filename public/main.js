const translations = {
    de: {
        title: "Melden Sie sich bei Ihrer OnyLab-Anwendung an",
        error: "Die Verbindung ist fehlgeschlagen, bitte kontaktieren Sie <a href=\"mailto:support@onylab.com\">support@onylab.com</a>",
        "app": {
            "brevo": {
                "description": "E-Mail- und SMS-Marketing-Plattform. Synchronisieren Sie HubRise-Kunden mit Brevo."
            },
            "gmb": {
                "description": "Gewinnen Sie mehr Kunden, indem Sie auf Google Search und Maps auf Platz 1 ranken."
            },
            "mailjet": {
                "description": "E-Mail-Marketing-Plattform. Synchronisieren Sie HubRise-Kunden mit Mailjet."
            },
            "orderpad": {
                "description": "Nehmen Sie Bestellungen schnell per Telefon auf Ihrem Tablet oder Computer entgegen."
            },
            "orderpicker": {
                "description": "Kommissionieren Sie Bestellungen präzise und schneller mit einem Workflow, der Fehler minimiert und jede Vorbereitung beschleunigt."
            },
            "smsmode": {
                "description": "SMS-Marketing-Plattform & WhatsApp. Synchronisieren Sie HubRise-Kunden mit smsmode."
            }
        },
        badge: {
            email: "email",
            marketing: "marketing",
            order: "bestellung",
            sms: "sms"
        }
    },
    fr: {
        title: "Connectez-vous à votre application OnyLab",
        error: "La connexion a échoué, veuillez contacter <a href=\"mailto:support@onylab.com\">support@onylab.com</a>",
        "app": {
            "brevo": {
                "description": "Plateforme de marketing par email et SMS. Synchronisez les clients HubRise avec Brevo."
            },
            "gmb": {
                "description": "Attirez plus de clients en étant classé n°1 sur Google Search et Maps."
            },
            "mailjet": {
                "description": "Plateforme de marketing par email. Synchronisez les clients HubRise avec Mailjet."
            },
            "orderpad": {
                "description": "Prenez des commandes rapidement par téléphone sur votre tablette ou votre ordinateur."
            },
            "orderpicker": {
                "description": "Préparez les commandes avec précision et plus rapidement grâce à un flux de travail qui réduit les erreurs et accélère chaque préparation."
            },
            "smsmode": {
                "description": "Plateforme de marketing par SMS & WhatsApp. Synchronisez les clients HubRise avec smsmode."
            }
        },
        badge: {
            email: "email",
            marketing: "marketing",
            order: "commande",
            sms: "sms"
        }
    },
    en: {
        title: "Connect to your OnyLab application",
        error: "The connection failed, please contact <a href=\"mailto:support@onylab.com\">support@onylab.com</a>",
        app: {
            brevo: {
                description: "Email &amp; SMS marketing platform. Synchronize HubRise customers with Brevo."
            },
            gmb: {
                description: "Attract more customers by ranking #1 on Google Search and Maps."
            },
            mailjet: {
                description: "Email marketing platform. Synchronize HubRise customers with Mailjet."
            },
            orderpad: {
                description: "Take orders quickly by phone on your tablet or computer."
            },
            orderpicker: {
                description: "Pick orders accurately and faster with a workflow that minimizes errors and speeds up every preparation."
            },
            smsmode: {
                description: "SMS marketing platform & WhatsApp. Synchronize HubRise customers with smsmode."
            }
        },
        badge: {
            email: "email",
            marketing: "marketing",
            order: "order",
            sms: "sms"
        }
    },
    es: {
        title: "Conéctese a su aplicación OnyLab",
        error: "La conexión ha fallado, póngase en contacto con <a href=\"mailto:support@onylab.com\">support@onylab.com</a>",
        "app": {
            "brevo": {
                "description": "Plataforma de marketing por correo electrónico y SMS. Sincroniza los clientes de HubRise con Brevo."
            },
            "gmb": {
                "description": "Atrae a más clientes posicionándote #1 en Google Search y Maps."
            },
            "mailjet": {
                "description": "Plataforma de marketing por correo electrónico. Sincroniza los clientes de HubRise con Mailjet."
            },
            "orderpad": {
                "description": "Toma pedidos rápidamente por teléfono en tu tablet o computadora."
            },
            "orderpicker": {
                "description": "Prepara pedidos con precisión y mayor rapidez con un flujo de trabajo que minimiza errores y acelera cada preparación."
            },
            "smsmode": {
                "description": "Plataforma de marketing por SMS & WhatsApp. Sincroniza los clientes de HubRise con smsmode."
            }
        },
        badge: {
            email: "correo electrónico",
            marketing: "marketing",
            order: "pedido",
            sms: "sms"
        }
    },
    pt: {
        title: "Conecte-se à sua aplicação OnyLab",
        error: "A conexão falhou, entre em contato com <a href=\"mailto:support@onylab.com\">support@onylab.com</a>",
        "app": {
            "brevo": {
                "description": "Plataforma de marketing por e-mail e SMS. Sincronize os clientes do HubRise com a Brevo."
            },
            "gmb": {
                "description": "Atraia mais clientes ao alcançar o #1 no Google Search e Maps."
            },
            "mailjet": {
                "description": "Plataforma de marketing por e-mail. Sincronize os clientes do HubRise com a Mailjet."
            },
            "orderpad": {
                "description": "Receba pedidos rapidamente por telefone no seu tablet ou computador."
            },
            "orderpicker": {
                "description": "Separe pedidos com precisão e mais rapidez com um fluxo de trabalho que minimiza erros e acelera cada preparação."
            },
            "smsmode": {
                "description": "Plataforma de marketing por SMS & WhatsApp. Sincronize os clientes do HubRise com a smsmode."
            }
        },
        badge: {
            email: "email",
            marketing: "marketing",
            order: "pedido",
            sms: "sms"
        }
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
    const errorMessage = document.querySelector('.error-message');
    if (errorMessage !== null) {
        errorMessage.innerHTML = t.error;
    }
    const appDescriptionBrevo = document.querySelector('.app-description-brevo');
    if (appDescriptionBrevo !== null) {
        appDescriptionBrevo.innerHTML = t.app.brevo.description;
    }
    const appDescriptionGmb = document.querySelector('.app-description-gmb');
    if (appDescriptionGmb !== null) {
        appDescriptionGmb.innerHTML = t.app.gmb.description;
    }
    const appDescriptionMailjet = document.querySelector('.app-description-mailjet');
    if (appDescriptionMailjet !== null) {
        appDescriptionMailjet.innerHTML = t.app.mailjet.description;
    }
    const appDescriptionOrderPad = document.querySelector('.app-description-orderpad');
    if (appDescriptionOrderPad !== null) {
        appDescriptionOrderPad.innerHTML = t.app.orderpad.description;
    }
    const appDescriptionOrderPicker = document.querySelector('.app-description-orderpicker');
    if (appDescriptionOrderPicker !== null) {
        appDescriptionOrderPicker.innerHTML = t.app.orderpicker.description;
    }
    const appDescriptionSMSMode = document.querySelector('.app-description-smsmode');
    if (appDescriptionSMSMode !== null) {
        appDescriptionSMSMode.innerHTML = t.app.smsmode.description;
    }
    const badgeEmail = document.querySelectorAll('.app-badge-email');
    if (badgeEmail !== null) {
        badgeEmail.forEach(elt => elt.innerHTML = t.badge.email);
    }
    const badgeSms = document.querySelectorAll('.app-badge-sms');
    if (badgeSms !== null) {
        badgeSms.forEach(elt => elt.innerHTML = t.badge.sms);
    }
    const badgeOrder = document.querySelectorAll('.app-badge-order');
    if (badgeOrder !== null) {
        badgeOrder.forEach(elt => elt.innerHTML = t.badge.order);
    }
    const badgeMarketing = document.querySelectorAll('.app-badge-marketing');
    if (badgeMarketing !== null) {
        badgeMarketing.forEach(elt => elt.innerHTML = t.badge.marketing);
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

    // Show error message if the "error" query parameter is present
    if (new URLSearchParams(window.location.search).has('error')) {
        document.querySelector('.error-message').hidden = false;
    }
    
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