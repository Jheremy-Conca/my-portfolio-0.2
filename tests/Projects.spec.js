import { describe, it, expect, beforeEach } from 'vitest'
import { mount } from '@vue/test-utils'
import { nextTick } from 'vue'
import Projects from '../src/views/Projects.vue'
import ProjectCard from '../src/components/cards/ProjectCard.vue'
import { useLocale } from '../src/composables/useLocale'

function mountView() {
  return mount(Projects, {
    global: {
      stubs: { RouterLink: true },
    },
  })
}

describe('Projects.vue', () => {
  beforeEach(() => {
    useLocale().setLocale('es')
  })

  it('muestra todos los proyectos por defecto', () => {
    const wrapper = mountView()
    const cards = wrapper.findAllComponents(ProjectCard)
    expect(cards.length).toBeGreaterThan(0)
    expect(wrapper.vm.activeFilter).toBe('all')
  })

  it('filtra por tecnología', async () => {
    const wrapper = mountView()
    const total = wrapper.findAllComponents(ProjectCard).length

    wrapper.vm.activeFilter = 'Vue 3'
    await nextTick()

    const filtered = wrapper.findAllComponents(ProjectCard)
    expect(filtered.length).toBeGreaterThan(0)
    expect(filtered.length).toBeLessThan(total)
    filtered.forEach((c) => {
      expect(c.props('stack')).toContain('Vue 3')
    })
  })

  it('muestra el mensaje vacío cuando ningún proyecto coincide', async () => {
    const wrapper = mountView()
    wrapper.vm.activeFilter = 'COBOL'
    await nextTick()
    expect(wrapper.findAllComponents(ProjectCard).length).toBe(0)
    expect(wrapper.text()).toContain('No hay proyectos')
  })

  it('traduce la cabecera al cambiar de idioma', async () => {
    const wrapper = mountView()
    expect(wrapper.text()).toContain('Proyectos y pruebas')
    useLocale().setLocale('en')
    await nextTick()
    expect(wrapper.text()).toContain('Projects & experiments')
  })
})
