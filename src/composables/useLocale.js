import { ref, computed } from 'vue'

const STORAGE_KEY = 'portfolio-locale'

function readStored() {
  try {
    return localStorage.getItem(STORAGE_KEY) || 'es'
  } catch {
    return 'es'
  }
}

const locale = ref(readStored())

function persist() {
  try {
    localStorage.setItem(STORAGE_KEY, locale.value)
  } catch {
    /* almacenamiento no disponible */
  }
}

function toggleLang() {
  locale.value = locale.value === 'es' ? 'en' : 'es'
  persist()
}

function setLocale(next) {
  if (next !== 'es' && next !== 'en') return
  locale.value = next
  persist()
}

const dictionary = {
  es: {
    // About / Home
    greeting: '👋 Hola, soy',
    bio: 'Actualmente trabajo con Nuxt.js, NestJS, PostgreSQL, Supabase y Prisma. También tengo experiencia con Vue.js, Node.js, Java y Spring Boot. Me encanta aprender cosas nuevas, experimentar con tecnologías modernas y siempre doy lo mejor de mí en mi trabajo.',
    age: 'EDAD',
    years: 'AÑOS',

    // ProjectsCard (bento) + vista Proyectos
    projectsTitle: 'Proyectos y pruebas',
    projectsDesc:
      'Aquí podrás encontrar algunos de mis proyectos, pruebas o experimentos.',
    projectsSubtitle:
      'Aquí encontrarás algunos de mis proyectos y experimentos.',
    filterAll: 'Todos',
    filterSeeLess: 'Ver menos',
    filterMore: 'más',
    projectsEmpty: 'No hay proyectos con esa tecnología todavía.',
    projectDemo: 'Ver demo',
    projectCode: 'Código',

    // GitHub
    githubTitle: 'Github',
    githubDesc: 'Mi perfil de GitHub, donde subo mis proyectos.',

    // Clima
    weatherWarm: 'Caluroso',
    weatherMild: 'Templado',
    weatherCold: 'Frío',

    // Discord
    discordTitle: 'Discord',
    discordLoading: 'Cargando estado...',
    discordOnline: 'En línea',
    discordIdle: 'Ausente',
    discordDnd: 'No molestar',
    discordOffline: 'Desconectado',
    discordUnknown: 'Desconocido',

    // Spotify / Last.fm
    spotifyLoading: 'Cargando última canción escuchada...',
    spotifyNowPlaying: 'Escuchando ahora',
    spotifyRecent: 'Escuchando recientemente',
    spotifyOfflineTitle: 'Actualmente desconectado',
    spotifyOfflineSubtitle:
      'No hay reproducciones recientes. ¡Regresa más tarde! 😴',

    // CV
    cvTitle: 'Mi CV',
    cvHint: 'Descargar PDF',
    cvAria: 'Descargar CV',

    // Idioma
    langHint: 'Cambiar a inglés',
    langAria: 'Cambiar a inglés',

    // Navegación / 404
    backHome: '← Volver al inicio',
    notFoundTitle: 'Esta ruta no existe',
    notFoundDesc:
      'Parece que seguiste un enlace roto, o escribiste mal la dirección.',

    // Barra de controles
    ctrlLanguage: 'Idioma',
    ctrlBgColor: 'Color de fondo',
  },
  en: {
    greeting: "👋 Hi, I'm",
    bio: "I'm currently working with Nuxt.js, NestJS, PostgreSQL, Supabase and Prisma. I also have experience with Vue.js, Node.js, Java and Spring Boot. I love learning new things, experimenting with modern technologies and always giving my best at work.",
    age: 'AGE',
    years: 'YEARS',

    projectsTitle: 'Projects & experiments',
    projectsDesc: "Here you'll find some of my projects, tests or experiments.",
    projectsSubtitle: "Here you'll find some of my projects and experiments.",
    filterAll: 'All',
    filterSeeLess: 'See less',
    filterMore: 'more',
    projectsEmpty: 'No projects with that technology yet.',
    projectDemo: 'View demo',
    projectCode: 'Code',

    githubTitle: 'Github',
    githubDesc: 'My GitHub profile, where I upload my projects.',

    weatherWarm: 'Hot',
    weatherMild: 'Mild',
    weatherCold: 'Cold',

    discordTitle: 'Discord',
    discordLoading: 'Loading status...',
    discordOnline: 'Online',
    discordIdle: 'Idle',
    discordDnd: 'Do not disturb',
    discordOffline: 'Offline',
    discordUnknown: 'Unknown',

    spotifyLoading: 'Loading last played track...',
    spotifyNowPlaying: 'Now playing',
    spotifyRecent: 'Recently played',
    spotifyOfflineTitle: 'Currently offline',
    spotifyOfflineSubtitle: 'No recent plays. Come back later! 😴',

    cvTitle: 'My Resume',
    cvHint: 'Download PDF',
    cvAria: 'Download CV',

    langHint: 'Switch to Spanish',
    langAria: 'Switch to Spanish',

    backHome: '← Back to home',
    notFoundTitle: "This route doesn't exist",
    notFoundDesc:
      'Looks like you followed a broken link, or mistyped the address.',

    ctrlLanguage: 'Language',
    ctrlBgColor: 'Background color',
  },
}

const t = computed(() => dictionary[locale.value])

export function useLocale() {
  return { locale, toggleLang, setLocale, t }
}
