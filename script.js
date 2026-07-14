// Base de datos de traducciones (Sin el texto del botón de escuchar)
const translations = {
    es: {
        heroBadge: "Feria de Innovación Tecnológica",
        heroTitle: "Tu voz en tus manos",
        heroSubtitle: "Rompiendo barreras en la rutina diaria a través de Inteligencia Artificial.",
        btnLearn: "Saber más",
        aboutTitle: "El Desafío Diario",
        aboutText: "Imaginar ir a pedir un café, preguntar por una dirección en la calle o comprar un boleto de autobús, y no poder hacerte entender. Para los más de 430 millones de personas sordas en el mundo, la rutina diaria está llena de estas barreras invisibles. UNMUTE nace para devolver la autonomía.",
        widgetDemoTitle: "Simulación del Sistema",
        widgetDemoDesc: "La IA traduce gestos a palabras al instante.",
        stepsMainTitle: "¿Cómo Funciona?",
        step1Title: "1. Captura",
        step1Desc: "Una cámara web estándar detecta el movimiento y el esqueleto de tus manos.",
        step2Title: "2. Traducción IA",
        step2Desc: "Nuestro algoritmo analiza la postura de los dedos en milisegundos.",
        step3Title: "3. Voz y Texto",
        step3Desc: "El sistema muestra la palabra en la pantalla y la reproduce en voz alta.",
        techTitle: "Tecnología que nos impulsa",
        techSubtitle: "Herramientas de vanguardia que hacen posible la inclusión en tiempo real.",
        footerText: "© 2026 UNMUTE - Proyecto de Especialidad Tecnológica para la Inclusión."
    },
    en: {
        heroBadge: "Technology Innovation Fair",
        heroTitle: "Your voice in your hands",
        heroSubtitle: "Breaking daily barriers through Artificial Intelligence.",
        btnLearn: "Learn more",
        aboutTitle: "The Daily Challenge",
        aboutText: "Imagine going to order a coffee, asking for directions on the street, or buying a bus ticket, and not being able to make yourself understood. For the more than 430 millions of deaf people worldwide, daily routines are filled with these invisible barriers. UNMUTE was born to restore autonomy.",
        widgetDemoTitle: "System Simulation",
        widgetDemoDesc: "AI translates gestures into words instantly.",
        stepsMainTitle: "How It Works?",
        step1Title: "1. Capture",
        step1Desc: "A standard webcam detects your hand movements and skeleton mapping.",
        step2Title: "2. AI Translation",
        step2Desc: "Our algorithm analyzes finger postures in milliseconds.",
        step3Title: "3. Voice and Text",
        step3Desc: "The system displays the word on screen and instantly reads it aloud.",
        techTitle: "Technology Driving Us",
        techSubtitle: "Cutting-edge tools that make real-time inclusion possible.",
        footerText: "© 2026 UNMUTE - Technology Specialty Project for Inclusion."
    }
};

let currentLang = 'es';

// Función para alternar idioma
function setLanguage(lang) {
    currentLang = lang;
    
    // Controlar qué botón navbar se ve activo
    document.getElementById('btn-es').classList.toggle('active', lang === 'es');
    document.getElementById('btn-en').classList.toggle('active', lang === 'en');

    // Mapear cada texto de la base de datos a su respectivo elemento en la interfaz
    document.getElementById('hero-badge').innerText = translations[lang].heroBadge;
    document.getElementById('hero-title').innerText = translations[lang].heroTitle;
    document.getElementById('hero-subtitle').innerText = translations[lang].heroSubtitle;
    document.getElementById('btn-learn').innerText = translations[lang].btnLearn;
    document.getElementById('about-title').innerText = translations[lang].aboutTitle;
    document.getElementById('about-text').innerText = translations[lang].aboutText;
    document.getElementById('widget-demo-title').innerText = translations[lang].widgetDemoTitle;
    document.getElementById('widget-demo-desc').innerText = translations[lang].widgetDemoDesc;
    document.getElementById('steps-main-title').innerText = translations[lang].stepsMainTitle;
    document.getElementById('step1-title').innerText = translations[lang].step1Title;
    document.getElementById('step1-desc').innerText = translations[lang].step1Desc;
    document.getElementById('step2-title').innerText = translations[lang].step2Title;
    document.getElementById('step2-desc').innerText = translations[lang].step2Desc;
    document.getElementById('step3-title').innerText = translations[lang].step3Title;
    document.getElementById('step3-desc').innerText = translations[lang].step3Desc;
    document.getElementById('tech-title').innerText = translations[lang].techTitle;
    document.getElementById('tech-subtitle').innerText = translations[lang].techSubtitle;
    document.getElementById('footer-text').innerText = translations[lang].footerText;
}