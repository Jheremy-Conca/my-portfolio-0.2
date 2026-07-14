import { ref, computed } from 'vue';

const locale = ref(localStorage.getItem('portfolio-locale') || 'es');

function toggleLang() {
  locale.value = locale.value === 'es' ? 'en' : 'es';
  localStorage.setItem('portfolio-locale', locale.value);
}

const dictionary = {
  es: {
    greeting: '👋 Hola, soy',
    bio: 'Tengo experiencia en Vue.js, HTML, CSS, Java, Node.js, Express, Spring Boot Java y MySQL. Me encanta aprender cosas nuevas, experimentar con tecnologías modernas y siempre doy lo mejor de mí en mi trabajo.',
    age: 'EDAD',
    years: 'AÑOS',
    projectsTitle: 'Proyectos y pruebas',
    projectsDesc: 'Aquí podrás encontrar algunos de mis proyectos, pruebas o experimentos.',
    githubTitle: 'Github',
    githubDesc: 'Mi perfil de GitHub, donde subo mis proyectos.',
    weatherWarm: 'Caluroso',
    weatherMild: 'Templado',
    weatherCold: 'Frío',
    discordTitle: 'Discord',
    disconnected: 'Desconectado',
    connected: 'Conectado',
    cvTitle: 'Mi CV',
    cvHint: 'Descargar PDF',
    langHint: 'Cambiar a inglés',
    backHome: '← Volver al inicio',
  },
  en: {
    greeting: "👋 Hi, I'm",
    bio: "I have experience in Vue.js, HTML, CSS, Java, Node.js, Express, Spring Boot and MySQL. I love learning new things, experimenting with modern technologies and always giving my best at work.",
    age: 'AGE',
    years: 'YEARS',
    projectsTitle: 'Projects & experiments',
    projectsDesc: "Here you'll find some of my projects, tests or experiments.",
    githubTitle: 'Github',
    githubDesc: 'My GitHub profile, where I upload my projects.',
    weatherWarm: 'Hot',
    weatherMild: 'Mild',
    weatherCold: 'Cold',
    discordTitle: 'Discord',
    disconnected: 'Disconnected',
    connected: 'Connected',
    cvTitle: 'My Resume',
    cvHint: 'Download PDF',
    langHint: 'Switch to Spanish',
    backHome: '← Back to home',
  },
};

const t = computed(() => dictionary[locale.value]);

export function useLocale() {
  return { locale, toggleLang, t };
}