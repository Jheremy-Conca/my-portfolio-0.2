import { describe, it, expect } from 'vitest'
import { nextTick } from 'vue'
import { useTheme, BG_PRESETS } from '../src/composables/useTheme'

describe('useTheme', () => {
  it('expone una paleta de presets con color', () => {
    const { presets } = useTheme()
    expect(presets.length).toBeGreaterThan(1)
    for (const p of presets) {
      expect(p.value).toMatch(/^#[0-9a-f]{3,8}$/i)
      expect(p.es).toBeTruthy()
      expect(p.en).toBeTruthy()
    }
  })

  it('setBgColor actualiza el ref y localStorage', () => {
    const { bgColor, setBgColor } = useTheme()
    setBgColor(BG_PRESETS[2].value)
    expect(bgColor.value).toBe(BG_PRESETS[2].value)
    expect(localStorage.getItem('portfolio-bg-color')).toBe(BG_PRESETS[2].value)
  })

  it('aplica el color como variable CSS --bg-color', async () => {
    const { setBgColor } = useTheme()
    setBgColor(BG_PRESETS[1].value)
    await nextTick()
    expect(document.documentElement.style.getPropertyValue('--bg-color')).toBe(
      BG_PRESETS[1].value,
    )
  })
})
