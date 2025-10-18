// Translations
const translations = {
    de: {
        title: "OnyLab",
        subtitle: "Melden Sie sich bei Ihrer OnyLab-Anwendung an",
        connectButton: "Mit HubRise verbinden",
        connecting: "Verbindung wird hergestellt...",
        secureConnection: "Sichere Verbindung über HubRise",
        infoMessage: "HubRise ist eine Integrationsplattform, mit der Sie Ihr Kassensystem mit vielen Anwendungen verbinden können.\n\nDie OAuth-Verbindung gewährleistet die Sicherheit Ihrer Daten.",
        redirectMessage: "Weiterleitung zu HubRise...\n\nErsetzen Sie in der Produktion diese Warnung durch die echte HubRise-Authentifizierungs-URL."
    },
    fr: {
        title: "OnyLab",
        subtitle: "Connectez-vous à votre application OnyLab",
        connectButton: "Se connecter avec HubRise",
        connecting: "Connexion en cours...",
        secureConnection: "Connexion sécurisée via HubRise",
        infoMessage: "HubRise est une plateforme d'intégration qui permet de connecter votre point de vente à de nombreuses applications.\n\nLa connexion OAuth garantit la sécurité de vos données.",
        redirectMessage: "Redirection vers HubRise...\n\nEn production, remplacez cette alerte par la vraie URL d'authentification HubRise."
    },
    en: {
        title: "OnyLab",
        subtitle: "Connect to your OnyLab application",
        connectButton: "Connect with HubRise",
        connecting: "Connecting...",
        secureConnection: "Secure connection via HubRise",
        infoMessage: "HubRise is an integration platform that allows you to connect your point of sale to many applications.\n\nThe OAuth connection guarantees the security of your data.",
        redirectMessage: "Redirecting to HubRise...\n\nIn production, replace this alert with the real HubRise authentication URL."
    },
    es: {
        title: "OnyLab",
        subtitle: "Conéctese a su aplicación OnyLab",
        connectButton: "Conectar con HubRise",
        connecting: "Conectando...",
        secureConnection: "Conexión segura vía HubRise",
        infoMessage: "HubRise es una plataforma de integración que le permite conectar su punto de venta a muchas aplicaciones.\n\nLa conexión OAuth garantiza la seguridad de sus datos.",
        redirectMessage: "Redirigiendo a HubRise...\n\nEn producción, reemplace esta alerta con la URL real de autenticación de HubRise."
    },
    pt: {
        title: "OnyLab",
        subtitle: "Conecte-se à sua aplicação OnyLab",
        connectButton: "Conectar com HubRise",
        connecting: "Conectando...",
        secureConnection: "Conexão segura via HubRise",
        infoMessage: "HubRise é uma plataforma de integração que permite conectar seu ponto de venda a muitas aplicações.\n\nA conexão OAuth garante a segurança dos seus dados.",
        redirectMessage: "Redirecionando para HubRise...\n\nEm produção, substitua este alerta pela URL real de autenticação do HubRise."
    },
    ar: {
        title: "OnyLab",
        subtitle: "اتصل بتطبيق OnyLab الخاص بك",
        connectButton: "الاتصال مع HubRise",
        connecting: "جارٍ الاتصال...",
        secureConnection: "اتصال آمن عبر HubRise",
        infoMessage: "HubRise هي منصة تكامل تتيح لك ربط نقطة البيع الخاصة بك بالعديد من التطبيقات.\n\nيضمن اتصال OAuth أمان بياناتك.",
        redirectMessage: "إعادة توجيه إلى HubRise...\n\nفي الإنتاج، استبدل هذا التنبيه بعنوان URL الحقيقي لمصادقة HubRise."
    }
};

let currentLang = 'en';
let isMenuOpen = false;

// Detect browser language
function detectBrowserLanguage() {
    const browserLang = navigator.language || navigator.userLanguage;
    const langCode = browserLang.split('-')[0];
    
    // Supported languages
    const supportedLangs = ['de', 'fr', 'en', 'es', 'pt', 'ar'];
    
    if (supportedLangs.includes(langCode)) {
        return langCode;
    }
    
    // Default language if not supported
    return 'en';
}

// Update content based on language
function updateContent(lang) {
    const t = translations[lang];
    
    const logo = document.querySelector('.logo');
    if (logo !== null) {
        logo.textContent = t.title;
    }
    const subtitle = document.querySelector('.subtitle');
    if (subtitle !== null) {
        subtitle.innerHTML = t.subtitle;
    }
    const connectButton = document.querySelector('.connect-button');
    if (connectButton !== null) {
        document.querySelector('.connect-button').innerHTML = `<span class="hubrise-icon"></span>${t.connectButton}`;
    }
    const footerText = document.querySelector('.footer-text');
    if (footerText !== null) {
        document.querySelector('.footer-text').innerHTML = `<small>${t.secureConnection}</small>`;
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

// HubRise connection function
function connectToHubrise() {
    const button = document.querySelector('.connect-button');
    const t = translations[currentLang];
    
    button.style.transform = 'scale(0.95)';
    button.innerHTML = `<span class="hubrise-icon"></span>${t.connecting}`;
    
    setTimeout(() => {
        button.style.transform = 'scale(1)';
        
        window.location.href = 'https://manager.hubrise.com/oauth2/v1/authorize?...';
        button.innerHTML = `<span class="hubrise-icon"></span>${t.connectButton}`;
    }, 1000);
}

// Information function
function showInfo() {
    const t = translations[currentLang];
    alert(t.infoMessage);
}

// Mouse move animation for floating elements
document.addEventListener('mousemove', (e) => {
    const floatingElements = document.querySelectorAll('.floating-element');
    const x = e.clientX / window.innerWidth;
    const y = e.clientY / window.innerHeight;

    floatingElements.forEach((element, index) => {
        const speed = (index + 1) * 0.5;
        const xOffset = (x - 0.5) * speed * 20;
        const yOffset = (y - 0.5) * speed * 20;
        
        element.style.transform += ` translate(${xOffset}px, ${yOffset}px)`;
    });
});

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

// Keyboard handling
document.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        connectToHubrise();
    }
});

// Connect to specific app
function connectToApp(appKey) {
    // Add visual feedback
    const cards = document.querySelectorAll('.app-card');
    cards.forEach(card => {
        card.style.opacity = '0.5';
        card.style.pointerEvents = 'none';
    });
    
    // Simulate connection
    setTimeout(() => {
        window.location.href = 'https://login.apps.onylab.com/auth?app=' + String(appKey);
        
        // Restore cards
        cards.forEach(card => {
            card.style.opacity = '1';
            card.style.pointerEvents = 'auto';
        });
    }, 300);
}