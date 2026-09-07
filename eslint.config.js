import js from '@eslint/js'
import pluginVue from 'eslint-plugin-vue'
import vitest from '@vitest/eslint-plugin'
import prettier from 'eslint-config-prettier'
import globals from 'globals'

export default [
  {
    ignores: [
      'dist/**',
      'node_modules/**',
      // Componentes generados de shadcn-vue: se mantienen tal cual.
      'src/components/ui/**',
    ],
  },
  js.configs.recommended,
  ...pluginVue.configs['flat/recommended'],
  {
    files: ['**/*.{js,vue}'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
    rules: {
      // El proyecto tiene componentes de una sola palabra (Home, Projects...).
      'vue/multi-word-component-names': 'off',
      'no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
    },
  },
  {
    files: ['tests/**/*.{js,vue}', '**/*.spec.js', '**/*.test.js'],
    plugins: { vitest },
    languageOptions: {
      globals: {
        ...globals.vitest,
      },
    },
    rules: {
      ...vitest.configs.recommended.rules,
    },
  },
  prettier,
]
