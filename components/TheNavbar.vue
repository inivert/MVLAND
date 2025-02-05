<!-- components/TheNavbar.vue -->
<script setup>
import { onMounted, onUnmounted, ref } from 'vue'
import { useI18n } from 'vue-i18n'
import LanguageSwitcher from './LanguageSwitcher.vue'

const { t } = useI18n()
const isMenuOpen = ref(false)
const scrolled = ref(false)
const activeIndex = ref(null)
const isDark = ref(false)

const menuItems = [
  { href: '#services', label: t('navigation.services') },
  { href: '#work', label: t('navigation.work') },
  { href: '#testimonials', label: t('navigation.testimonials') },
  { href: '#contact', label: t('navigation.contact') },
]

function toggleTheme() {
  isDark.value = !isDark.value
  document.documentElement.classList.toggle('dark')
  // Save theme preference
  localStorage.setItem('theme', isDark.value ? 'dark' : 'light')
}

function handleScroll() {
  scrolled.value = window.scrollY > 20
}

function initializeTheme() {
  // Check for saved theme preference
  const savedTheme = localStorage.getItem('theme')
  if (savedTheme) {
    isDark.value = savedTheme === 'dark'
  }
  else {
    // If no saved preference, check system preference
    isDark.value = window.matchMedia('(prefers-color-scheme: dark)').matches
  }

  // Apply theme
  if (isDark.value) {
    document.documentElement.classList.add('dark')
  }
  else {
    document.documentElement.classList.remove('dark')
  }
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
  initializeTheme()

  // Listen for system theme changes
  const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
  mediaQuery.addEventListener('change', (e) => {
    if (!localStorage.getItem('theme')) {
      isDark.value = e.matches
      document.documentElement.classList.toggle('dark', e.matches)
    }
  })
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
  // Clean up media query listener
  const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
  mediaQuery.removeEventListener('change')
})
</script>

<template>
  <nav
    class="fixed w-full z-50 transition-all duration-300"
    :class="[scrolled ? 'py-2 bg-white/90 dark:bg-gray-900/90 backdrop-blur-lg shadow-lg' : 'py-6']"
  >
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between items-center">
        <!-- Logo -->
        <a href="/" class="flex items-center space-x-3 group">
          <div class="h-12 w-12 relative">
            <img
              src="/images/logo.png"
              alt="M.V Landscaping Logo"
              class="h-full w-full object-contain brightness-0 dark:brightness-200 transition-transform duration-300 group-hover:scale-105"
            />
          </div>
          <span
            class="text-xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent transition-all duration-300 group-hover:opacity-80"
          >
            M.V Landscaping
          </span>
        </a>

        <!-- Desktop Menu -->
        <div class="hidden md:flex items-center space-x-1">
          <template v-for="(item, index) in menuItems" :key="item.href">
            <a
              :href="item.href"
              class="relative px-4 py-2 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors group"
              @mouseenter="activeIndex = index"
              @mouseleave="activeIndex = null"
            >
              {{ item.label }}
              <span
                class="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-green-400 to-green-600 transform origin-left transition-transform duration-300"
                :class="[activeIndex === index ? 'scale-x-100' : 'scale-x-0']"
              />
            </a>
          </template>
          <button
            class="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            :aria-label="isDark ? t('common.switchToLight') : t('common.switchToDark')"
            @click="toggleTheme"
          >
            <svg
              v-if="isDark"
              class="w-5 h-5 text-yellow-500"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
              />
            </svg>
            <svg
              v-else
              class="w-5 h-5 text-gray-600"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
            </svg>
          </button>
          <LanguageSwitcher />
        </div>

        <!-- Mobile Menu Button -->
        <button
          class="md:hidden relative w-10 h-10 focus:outline-none group"
          :aria-label="isMenuOpen ? t('common.close') : t('common.menu')"
          @click="isMenuOpen = !isMenuOpen"
        >
          <div class="absolute inset-0 w-6 h-6 m-auto">
            <span
              class="absolute block w-full h-0.5 bg-current transform transition-all duration-300"
              :class="[isMenuOpen ? 'rotate-45' : '-translate-y-2']"
            />
            <span
              class="absolute block w-full h-0.5 bg-current transform transition-all duration-300"
              :class="[isMenuOpen ? 'opacity-0' : '']"
            />
            <span
              class="absolute block w-full h-0.5 bg-current transform transition-all duration-300"
              :class="[isMenuOpen ? '-rotate-45' : 'translate-y-2']"
            />
          </div>
        </button>
      </div>
    </div>

    <!-- Mobile Menu -->
    <div
      v-show="isMenuOpen"
      class="md:hidden absolute top-full left-0 w-full bg-white/95 dark:bg-gray-900/95 backdrop-blur-lg shadow-lg py-4"
      @click.self="isMenuOpen = false"
    >
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
        <a
          v-for="item in menuItems"
          :key="item.href"
          :href="item.href"
          class="block px-4 py-2 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800"
          @click="isMenuOpen = false"
        >
          {{ item.label }}
        </a>
        <!-- Theme Toggle in Mobile Menu -->
        <div class="px-4 py-2 flex items-center justify-between">
          <span class="text-gray-600 dark:text-gray-300">{{
            isDark ? t('common.switchToLight') : t('common.switchToDark')
          }}</span>
          <button
            class="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            @click="toggleTheme"
          >
            <svg
              v-if="isDark"
              class="w-5 h-5 text-yellow-500"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
              />
            </svg>
            <svg
              v-else
              class="w-5 h-5 text-gray-600"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
            </svg>
          </button>
        </div>
        <!-- Language Switcher in Mobile Menu -->
        <div class="px-4 py-2">
          <LanguageSwitcher />
        </div>
      </div>
    </div>
  </nav>
</template>
