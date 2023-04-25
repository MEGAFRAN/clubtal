const directedTo = "#section-inner-rounded"
const benefits = "#section-underline-list"
const followingSteps = "#section-hamburger"
const contact = "#section-contact"

const SENTIMENT_ANALYSIS_TEXT = {
  sectionsIds: {
    directedTo,
    benefits,
    followingSteps,
    contact,
  },

  spanish: {

    ctaText: ["Descubre las emociones de tu texto, con análisis de opiniones", 
    "Ingresa un contexto (post red social, retroalimentacion, reseña, etc)",
    "Análisis de opiniones"
    ],

    placeholdersTexts: ["Escribe el texto a analizar", 
    "Contexto"
    ],

    ctaButtonTexts: [
      "Analizar texto"
    ],

    sectionsTitles: [
      "¿Que hacemos?",
      "Beneficios para tu negocio",
      "¿Como lo hacemos?",
      "Pruebame en tu sitio web",
      "Pasos a seguir",
      "Contáctanos"
    ],

    formText: [
      "Cuentanos sobre ti",
      "¿Que necesitas en tu negocio?",
      "Escribe aqui lo que necesitas..",
      "Mi nombre",
      "Escribe aqui tu nombre..",
      "Mi email",
      "Escribe aqui tu email..",
      "Enviar mi mensaje"
    ],

    chatbotText: {
      initialMessage: "Hola! Soy Clubbot ¿Que deseas saber de nuestros servicios?",
      inputPlaceholderText: "Escribe tu mensaje ...",
      sendButtonText: "Enviar"
    }
  },

  english: {

    ctaText: ["Discover the feelings of your text, with sentiment analysis", 
    "Enter a Context (social media post, feedback, review, etc.)", "Sentiment analysis"
    ],

    placeholdersTexts: ["Enter the text to be analyzed",
    "Context"],

    ctaButtonTexts: [
      "Analyze text"
    ],

    sectionsTitles: [
      "What do we do?",
      "Benefits for your business",
      "How do we do it?",
      "Try me on your website",
      "Steps to follow",
      "Contact us"
    ],

    formText: [
      "Tell us about yourself",
      "What do you need for your business?",
      "Write here what you need...",
      "My name",
      "Write your name here...",
      "My email",
      "Write your email here...",
      "Send my message"
    ],

    chatbotText: {
      initialMessage: "Hi! I'm Clubbot ¿What would you like to know about our services?",
      inputPlaceholderText: "Type your message ...",
      sendButtonText: "Send"
    }
  },
}
export default SENTIMENT_ANALYSIS_TEXT
