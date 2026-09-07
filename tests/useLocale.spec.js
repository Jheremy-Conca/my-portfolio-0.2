import { describe, it, expect, beforeEach } from 'vitest'
import { useLocale } from '../src/composables/useLocale'

describe('useLocale', () => {
  beforeEach(() => {
    // El locale es un singleton de módulo: lo dejamos en 'es' antes de cada test.
    const { setLocale } = useLocale()
    setLocale('es')
  })

  it('arranca en español', () => {
    const { locale, t } = useLocale()
    expect(locale.value).toBe('es')
    expect(t.value.greeting).toContain('Hola')
  })

  it('toggleLang alterna entre es y en', () => {
    const { locale, toggleLang } = useLocale()
    toggleLang()
    expect(locale.value).toBe('en')
    toggleLang()
    expect(locale.value).toBe('es')
  })

  it('el diccionario cambia con el locale', () => {
    const { toggleLang, t } = useLocale()
    expect(t.value.filterAll).toBe('Todos')
    toggleLang()
    expect(t.value.filterAll).toBe('All')
  })

  it('setLocale ignora valores no soportados', () => {
    const { locale, setLocale } = useLocale()
    setLocale('fr')
    expect(locale.value).toBe('es')
  })

  it('persiste el locale en localStorage', () => {
    const { toggleLang } = useLocale()
    toggleLang()
    expect(localStorage.getItem('portfolio-locale')).toBe('en')
  })

  it('todas las claves existen en ambos idiomas', () => {
    const { setLocale, t } = useLocale()
    setLocale('es')
    const esKeys = Object.keys(t.value).sort()
    setLocale('en')
    const enKeys = Object.keys(t.value).sort()
    expect(enKeys).toEqual(esKeys)
  })
})
