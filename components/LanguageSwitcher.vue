<script setup>
import { computed, onBeforeUnmount, onMounted, ref } from 'vue'
import { useI18n } from 'vue-i18n'
import { useRouter } from 'vue-router'

const router = useRouter()
const { locale, locales } = useI18n()
const isOpen = ref(false)
const dropdownRef = ref(null)

const availableLocales = computed(() => {
  return locales.value.map(l => ({
    code: l.code,
    name: l.name,
  }))
})

const currentLocale = computed(() => {
  return availableLocales.value.find(l => l.code === locale.value) || availableLocales.value[0]
})

function switchLanguage(code) {
  locale.value = code
  isOpen.value = false

  const currentRoute = router.currentRoute.value
  const localizedRoute = {
    ...currentRoute,
    params: {
      ...currentRoute.params,
      lang: code,
    },
  }
  router.push(localizedRoute)
}

function handleClickOutside(e) {
  if (dropdownRef.value && !dropdownRef.value.contains(e.target)) {
    isOpen.value = false
  }
}

onMounted(() => {
  if (process.client) {
    window.addEventListener('click', handleClickOutside)
  }
})

onBeforeUnmount(() => {
  if (process.client) {
    window.removeEventListener('click', handleClickOutside)
  }
})
</script>

<template>
  <div ref="dropdownRef" class="relative w-full sm:w-auto sm:inline-block text-left">
    <button
      type="button"
      class="inline-flex items-center justify-center w-full sm:w-auto px-4 py-3 sm:py-2 text-base sm:text-sm font-medium text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-md hover:bg-gray-50 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500 min-h-[44px] sm:min-h-[36px]"
      :aria-expanded="isOpen"
      @click="isOpen = !isOpen"
    >
      {{ currentLocale.name }}
      <svg
        class="w-5 h-5 ml-2 -mr-1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
        aria-hidden="true"
      >
        <path
          fill-rule="evenodd"
          d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
          clip-rule="evenodd"
        />
      </svg>
    </button>

    <div
      v-if="isOpen"
      class="absolute right-0 left-0 sm:left-auto z-50 mt-2 w-full sm:w-48 origin-top-right rounded-md bg-white dark:bg-gray-800 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
      role="menu"
      aria-orientation="vertical"
      aria-labelledby="menu-button"
      tabindex="-1"
    >
      <div class="py-1" role="none">
        <a
          v-for="localeItem in availableLocales"
          :key="localeItem.code"
          href="#"
          class="text-gray-700 dark:text-gray-300 block px-4 py-3 sm:py-2 text-base sm:text-sm hover:bg-gray-100 dark:hover:bg-gray-700 min-h-[44px] sm:min-h-[36px] flex items-center"
          role="menuitem"
          tabindex="-1"
          :class="{ 'bg-gray-100 dark:bg-gray-700': currentLocale.code === localeItem.code }"
          @click.prevent="switchLanguage(localeItem.code)"
        >
          {{ localeItem.name }}
        </a>
      </div>
    </div>
  </div>
</template>
