<!-- components/ServicesGrid.vue -->
<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { SERVICES } from '~/constants/services'

const { t } = useI18n()
</script>

<template>
  <section id="services" class="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
    <div
      class="absolute inset-0 bg-gradient-to-t from-transparent via-gray-50/30 to-transparent dark:via-gray-900/30"
    />
    <div class="relative max-w-7xl mx-auto">
      <div class="text-center mb-16">
        <span
          class="inline-block px-4 py-2 rounded-full bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 text-sm font-medium mb-4 transform hover:scale-105 transition-transform duration-300"
        >
          {{ t('services.subtitle') }}
        </span>
        <h2
          class="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent mb-4"
        >
          {{ t('services.title') }}
        </h2>
        <p class="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          {{ t('services.description') }}
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
        <div
          v-for="(category, index) in SERVICES"
          :key="index"
          class="group relative bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
        >
          <div
            class="absolute inset-0 bg-gradient-to-br from-green-500/5 to-emerald-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"
          />
          <div class="relative z-10">
            <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-4">
              {{ category.title }}
            </h3>
            <ul class="space-y-3">
              <li
                v-for="(item, itemIndex) in category.items"
                :key="itemIndex"
                class="flex items-center text-gray-600 dark:text-gray-400"
              >
                <svg
                  class="w-5 h-5 text-green-500 mr-3 flex-shrink-0"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fill-rule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clip-rule="evenodd"
                  />
                </svg>
                {{ item }}
              </li>
            </ul>
          </div>
        </div>
      </div>

      <!-- Contact CTA -->
    </div>
  </section>
</template>

<style scoped>
.group:hover {
  transform: translateY(-4px);
}
</style>
