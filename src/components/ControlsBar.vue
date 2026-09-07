<script setup>
import { computed } from 'vue'
import { Icon } from '@iconify/vue'
import { useLocale } from '../composables/useLocale'
import { useTheme } from '../composables/useTheme'
import { Button } from './ui/button'
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuItem,
} from './ui/dropdown-menu'

const { locale, toggleLang, t } = useLocale()
const { bgColor, setBgColor, presets } = useTheme()

const nextLang = computed(() => (locale.value === 'es' ? 'EN' : 'ES'))
</script>

<template>
  <div class="controls-bar">
    <!-- Idioma -->
    <Button
      variant="secondary"
      size="sm"
      class="controls-bar__btn"
      :aria-label="t.langAria"
      @click="toggleLang"
    >
      <Icon icon="mdi:translate" />
      <span>{{ nextLang }}</span>
    </Button>

    <!-- Color de fondo -->
    <DropdownMenu>
      <DropdownMenuTrigger as-child>
        <Button
          variant="secondary"
          size="icon"
          class="controls-bar__btn"
          :aria-label="t.ctrlBgColor"
        >
          <Icon icon="mdi:palette-outline" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuLabel>{{ t.ctrlBgColor }}</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem
          v-for="preset in presets"
          :key="preset.id"
          @select="setBgColor(preset.value)"
        >
          <span
            class="controls-bar__swatch"
            :style="{ background: preset.value }"
          />
          <span class="controls-bar__swatch-label">
            {{ locale === 'es' ? preset.es : preset.en }}
          </span>
          <Icon
            v-if="bgColor === preset.value"
            icon="mdi:check"
            class="controls-bar__check"
          />
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  </div>
</template>

<style scoped>
.controls-bar {
  position: fixed;
  top: 1rem;
  right: 1rem;
  z-index: 50;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.35rem;
  border-radius: 999px;
  background: rgba(10, 6, 15, 0.6);
  border: 1px solid rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
}

.controls-bar__btn {
  border-radius: 999px;
}

.controls-bar__swatch {
  width: 14px;
  height: 14px;
  border-radius: 50%;
  border: 1px solid rgba(255, 255, 255, 0.25);
  flex-shrink: 0;
}

.controls-bar__swatch-label {
  flex: 1;
}

.controls-bar__check {
  font-size: 1rem;
  opacity: 0.9;
}

@media (max-width: 640px) {
  .controls-bar {
    top: 0.6rem;
    right: 0.6rem;
  }
}
</style>
