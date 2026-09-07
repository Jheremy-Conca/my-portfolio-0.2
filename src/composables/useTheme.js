import { ref, watch } from 'vue'

const STORAGE_KEY = 'portfolio-bg-color'

// Paleta de fondos disponible desde el selector de color.
export const BG_PRESETS = [
  { id: 'noche', es: 'Noche', en: 'Night', value: '#0a030f' },
  { id: 'ciruela', es: 'Ciruela', en: 'Plum', value: '#1d0b27' },
  { id: 'abismo', es: 'Abismo', en: 'Abyss', value: '#0a1220' },
  { id: 'bosque', es: 'Bosque', en: 'Forest', value: '#0b1a14' },
  { id: 'carbon', es: 'Carbón', en: 'Charcoal', value: '#0d0d0f' },
  { id: 'vino', es: 'Vino', en: 'Wine', value: '#1a0b10' },
]

const DEFAULT_BG = BG_PRESETS[0].value

function readStored() {
  try {
    return localStorage.getItem(STORAGE_KEY) || DEFAULT_BG
  } catch {
    return DEFAULT_BG
  }
}

// Estado a nivel de módulo: el color de fondo es único para toda la app,
// así evitamos que cada vista mute `document.body` por su cuenta.
const bgColor = ref(readStored())
let started = false

function applyBg(color) {
  document.documentElement.style.setProperty('--bg-color', color)
}

function setBgColor(color) {
  bgColor.value = color
  try {
    localStorage.setItem(STORAGE_KEY, color)
  } catch {
    /* almacenamiento no disponible: se aplica igual en memoria */
  }
}

export function useTheme() {
  if (!started) {
    applyBg(bgColor.value)
    watch(bgColor, applyBg)
    started = true
  }
  return { bgColor, setBgColor, presets: BG_PRESETS }
}
