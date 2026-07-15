// Base de datos de traducciones coherentemente estructurada
const translations = {
    es: {
        heroBadge: "Feria de Innovación Tecnológica",
        heroTitle: "Tu voz en tus manos",
        heroSubtitle: "Rompiendo barreras en la rutina diaria a través de Inteligencia Artificial.",
        btnLearn: "Saber más",
        
        // Sección Problemática
        probMainTitle: "El Desafío de la Comunicación Silenciosa",
        probMainSubtitle: "La brecha invisible que aísla a millones de personas en su vida cotidiana.",
        stat1Title: "Personas Sordas",
        stat1Desc: "De acuerdo con datos de la OMS, más del 5% de la población mundial requiere asistencia por pérdida auditiva discapacitante.",
        stat2Title: "Barrera de Acceso",
        stat2Desc: "La Federación Mundial de Sordos reporta que menos del 15% de los niños sordos a nivel global tienen acceso a educación formal en lengua de señas.",
        stat3Title: "Sin Reconocimiento",
        stat3Desc: "Según el reporte de la WFD, la mayoría de los países del mundo aún no han otorgado reconocimiento constitucional oficial a sus lenguas de señas.",
        probNarrative: "Ir por un café, dar indicaciones en la calle o realizar trámites médicos son tareas cotidianas que se transforman en muros de aislamiento debido a la falta de herramientas de traducción directa y la escasez crítica de intérpretes humanos.",
        
        // Sección Solución Unificada e Interactiva
        solBadge: "Nuestra Propuesta",
        solTitle: "Para esto hemos creado signSpeakAI",
        solIntro: "Nace como un sistema interactivo y bidireccional diseñado para navegadores y dispositivos móviles. No es solo software; es un puente tecnológico que utiliza visión computacional avanzada e inteligencia artificial para devolver la autonomía a las personas sordas y conectar comunidades en sus interacciones cotidianas más sencillas.",
        solPurposeText: "Creemos que la tecnología no solo debe resolver problemas complejos, sino mejorar el día a día humano. Diseñamos esta herramienta para que pedir un café, dar las gracias o saludar sea un derecho fluido para todos, construyendo empatía directa sin necesidad de hardware costoso o conexiones pesadas a internet.",
        solFeat1Title: "🗣️ Modo Traducción",
        solFeat1Desc: "Muestra señas frente a la cámara y el sistema las traducirá a texto y voz en tiempo real.",
        solFeat2Title: "📖 Modo Aprendizaje",
        solFeat2Desc: "Accede a lecciones breves y ejercicios interactivos para comenzar a aprender Lengua de Señas.",

        // Simulador Widget
        widgetDemoTitle: "Simulación del Sistema",
        widgetDemoDesc: "La IA traduce gestos a palabras al instante.",
        
        // Cómo Funciona
        stepsMainTitle: "Flujo de Funcionamiento del Software",
        step1Title: "1. Captura de Esqueleto",
        step1Desc: "La cámara de tu dispositivo lee el flujo de video en tiempo real. Un algoritmo extrae la estructura ósea tridimensional de las manos a través de puntos clave (Keypoints).",
        step2Title: "2. Red Neuronal Predictiva",
        step2Desc: "La IA procesa instantáneamente las posiciones tridimensionales de los dedos, contrastándolas de forma inteligente para detectar la seña específica ejecutada.",
        step3Title: "3. Traducción Fluida",
        step3Desc: "El software genera el texto traducido al instante e invoca la síntesis de voz nativa del dispositivo, logrando una comunicación bidireccional fluida y audible.",
        
        footerText: "© 2026 signSpeakAI - Proyecto de Especialidad Tecnológica para la Inclusión."
    },
    en: {
        heroBadge: "Technology Innovation Fair",
        heroTitle: "Your voice in your hands",
        heroSubtitle: "Breaking daily barriers through Artificial Intelligence.",
        btnLearn: "Learn more",
        
        // Problem Section
        probMainTitle: "The Challenge of Silent Communication",
        probMainSubtitle: "The invisible gap isolating millions in their everyday lives.",
        stat1Title: "Deaf Individuals",
        stat1Desc: "According to WHO data, over 5% of the world population needs rehabilitation services to address disabling hearing loss.",
        stat2Title: "Access Barrier",
        stat2Desc: "The World Federation of the Deaf reports that less than 15% of deaf children globally have access to formal sign language education.",
        stat3Title: "Without Recognition",
        stat3Desc: "Based on WFD research, most countries have not yet officially recognized sign languages constitutionally.",
        probNarrative: "Ordering coffee, asking for street directions, or scheduling medical appointments are daily tasks turned into isolating barriers due to a lack of instant translation tools and a severe global interpreter deficit.",
        
        // Solution Section
        solBadge: "Our Solution",
        solTitle: "This is why we created signSpeakAI",
        solIntro: "It was born as an interactive and two-way system designed for browsers and mobile screens. It is more than just code; it's a technical bridge using advanced computer vision and artificial intelligence to bring autonomy back to deaf people and connect communities during basic everyday interactions.",
        solPurposeText: "We believe technology shouldn't just solve complex equations, but rather improve the simplest, most human moments of our daily lives. We designed this tool so that getting a coffee, saying thank you, or greeting someone becomes an accessible right for everyone, building a direct bridge of empathy without heavy hardware or bandwidth issues.",
        solFeat1Title: "🗣️ Translation Mode",
        solFeat1Desc: "Perform hand gestures in front of your camera, and our system will translate them to text and audio in real-time.",
        solFeat2Title: "📖 Learning Mode",
        solFeat2Desc: "Access bite-sized lessons and interactive exercises to start learning Sign Language.",

        // Simulator Widget
        widgetDemoTitle: "System Simulation",
        widgetDemoDesc: "AI translates gestures into words instantly.",
        
        // How It Works
        stepsMainTitle: "How the Software Runs",
        step1Title: "1. Skeleton Capture",
        step1Desc: "Your device camera reads the live video stream. An algorithm maps out three-dimensional joint positions (Keypoints) of your hand in real-time.",
        step2Title: "2. Predictive Neural Network",
        step2Desc: "The AI instantly processes finger joint coordinates, analyzing spelling rules and hand structures to classify the specific gesture.",
        step3Title: "3. Seamless Translation",
        step3Desc: "The software renders translation text on the screen and triggers the device's local speech engine, building fluent face-to-face communication.",
        
        footerText: "© 2026 signSpeakAI - Technology Specialty Project for Inclusion."
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
    
    // Problemática
    document.getElementById('prob-main-title').innerText = translations[lang].probMainTitle;
    document.getElementById('prob-main-subtitle').innerText = translations[lang].probMainSubtitle;
    document.getElementById('stat1-title').innerText = translations[lang].stat1Title;
    document.getElementById('stat1-desc').innerText = translations[lang].stat1Desc;
    document.getElementById('stat2-title').innerText = translations[lang].stat2Title;
    document.getElementById('stat2-desc').innerText = translations[lang].stat2Desc;
    document.getElementById('stat3-title').innerText = translations[lang].stat3Title;
    document.getElementById('stat3-desc').innerText = translations[lang].stat3Desc;
    document.getElementById('prob-narrative').innerText = translations[lang].probNarrative;

    // Solución Unificada
    document.getElementById('sol-badge').innerText = translations[lang].solBadge;
    document.getElementById('sol-title').innerText = translations[lang].solTitle;
    document.getElementById('sol-intro').innerText = translations[lang].solIntro;
    document.getElementById('sol-purpose-text').innerText = translations[lang].solPurposeText;
    document.getElementById('sol-feat1-title').innerText = translations[lang].solFeat1Title;
    document.getElementById('sol-feat1-desc').innerText = translations[lang].solFeat1Desc;
    document.getElementById('sol-feat2-title').innerText = translations[lang].solFeat2Title;
    document.getElementById('sol-feat2-desc').innerText = translations[lang].solFeat2Desc;

    // Widget e Instrucciones
    document.getElementById('widget-demo-title').innerText = translations[lang].widgetDemoTitle;
    document.getElementById('widget-demo-desc').innerText = translations[lang].widgetDemoDesc;
    document.getElementById('steps-main-title').innerText = translations[lang].stepsMainTitle;
    document.getElementById('step1-title').innerText = translations[lang].step1Title;
    document.getElementById('step1-desc').innerText = translations[lang].step1Desc;
    document.getElementById('step2-title').innerText = translations[lang].step2Title;
    document.getElementById('step2-desc').innerText = translations[lang].step2Desc;
    document.getElementById('step3-title').innerText = translations[lang].step3Title;
    document.getElementById('step3-desc').innerText = translations[lang].step3Desc;
    document.getElementById('footer-text').innerText = translations[lang].footerText;
}