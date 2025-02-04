<!-- components/ContactForm.vue -->
<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

interface FormData {
  name: string
  email: string
  phone: string
  message: string
}

const formData = ref<FormData>({
  name: '',
  email: '',
  phone: '',
  message: '',
})

const isSubmitting = ref(false)
const showSuccess = ref(false)
const formError = ref(false)
const focusedField = ref<string | null>(null)
const isClient = ref(false)

// Only enable focus effects after hydration
onMounted(() => {
  isClient.value = true
})

async function handleSubmit() {
  isSubmitting.value = true
  showSuccess.value = false
  formError.value = false

  try {
    // Simulate API call
    await new Promise<void>(resolve => setTimeout(resolve, 1000))
    showSuccess.value = true
    formData.value = {
      name: '',
      email: '',
      phone: '',
      message: '',
    }
  }
  catch (error) {
    console.error('Error submitting form:', error)
    formError.value = true
  }
  finally {
    isSubmitting.value = false
  }
}
</script>

<template>
  <section id="contact" class="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
    <div
      class="absolute inset-0 bg-gradient-to-t from-transparent via-gray-50/30 to-transparent dark:via-gray-900/30"
    />
    <div class="relative max-w-7xl mx-auto">
      <div class="text-center mb-16">
        <span
          class="inline-block px-4 py-2 rounded-full bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 text-sm font-medium mb-4 transform hover:scale-105 transition-transform duration-300"
        >
          {{ t('contact.subtitle') }}
        </span>
        <h2
          class="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent mb-4"
        >
          {{ t('contact.title') }}
        </h2>
        <p class="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          {{ t('contact.description') }}
        </p>
      </div>

      <div class="max-w-2xl mx-auto">
        <form
          class="space-y-6 rounded-xl bg-gray-50/50 dark:bg-gray-800/50 backdrop-blur-sm p-8"
          @submit.prevent="handleSubmit"
        >
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div
              class="form-group"
              :class="{ 'is-focused': isClient && focusedField === 'name' }"
            >
              <label
                for="name"
                class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
              >
                {{ t('contact.name') }}
              </label>
              <input
                id="name"
                v-model="formData.name"
                type="text"
                required
                class="form-input"
                :class="{ 'border-green-500': isClient && focusedField === 'name' }"
                @focus="focusedField = 'name'"
                @blur="focusedField = null"
              >
            </div>

            <div
              class="form-group"
              :class="{ 'is-focused': isClient && focusedField === 'email' }"
            >
              <label
                for="email"
                class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
              >
                {{ t('contact.email') }}
              </label>
              <input
                id="email"
                v-model="formData.email"
                type="email"
                required
                class="form-input"
                :class="{ 'border-green-500': isClient && focusedField === 'email' }"
                @focus="focusedField = 'email'"
                @blur="focusedField = null"
              >
            </div>
          </div>

          <div
            class="form-group"
            :class="{ 'is-focused': isClient && focusedField === 'phone' }"
          >
            <label
              for="phone"
              class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
            >
              {{ t('contact.phone') }}
            </label>
            <input
              id="phone"
              v-model="formData.phone"
              type="tel"
              class="form-input"
              :class="{ 'border-green-500': isClient && focusedField === 'phone' }"
              @focus="focusedField = 'phone'"
              @blur="focusedField = null"
            >
          </div>

          <div
            class="form-group"
            :class="{ 'is-focused': isClient && focusedField === 'message' }"
          >
            <label
              for="message"
              class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
            >
              {{ t('contact.message') }}
            </label>
            <textarea
              id="message"
              v-model="formData.message"
              rows="4"
              required
              class="form-input min-h-[120px] resize-y"
              :class="{ 'border-green-500': isClient && focusedField === 'message' }"
              @focus="focusedField = 'message'"
              @blur="focusedField = null"
            />
          </div>

          <div class="flex justify-center pt-4">
            <button
              type="submit"
              class="inline-flex items-center px-8 py-3 text-base font-medium rounded-xl text-white
              bg-gradient-to-r from-green-600/90 to-emerald-600/90 backdrop-blur-sm
              hover:from-green-500 hover:to-emerald-500
              focus:outline-none focus:ring-1 focus:ring-green-500
              transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed
              transform hover:scale-105"
              :disabled="isSubmitting"
            >
              <span class="relative flex items-center">
                <ClientOnly>
                  <svg
                    v-if="isSubmitting"
                    class="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      class="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      stroke-width="4"
                    />
                    <path
                      class="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    />
                  </svg>
                </ClientOnly>
                {{ isSubmitting ? t('common.loading') : t('contact.submit') }}
              </span>
            </button>
          </div>

          <ClientOnly>
            <!-- Success message -->
            <div
              v-if="showSuccess"
              class="rounded-xl bg-green-50 dark:bg-green-900/30 p-4 transform animate-fade-in"
            >
              <div class="flex items-center">
                <div class="flex-shrink-0">
                  <svg class="h-5 w-5 text-green-400" viewBox="0 0 20 20" fill="currentColor">
                    <path
                      fill-rule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </div>
                <div class="ml-3">
                  <p class="text-sm font-medium text-green-800 dark:text-green-200">
                    {{ t('contact.success') }}
                  </p>
                </div>
              </div>
            </div>

            <!-- Error message -->
            <div
              v-if="formError"
              class="rounded-xl bg-red-50 dark:bg-red-900/30 p-4 transform animate-fade-in"
            >
              <div class="flex items-center">
                <div class="flex-shrink-0">
                  <svg class="h-5 w-5 text-red-400" viewBox="0 0 20 20" fill="currentColor">
                    <path
                      fill-rule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </div>
                <div class="ml-3">
                  <p class="text-sm font-medium text-red-800 dark:text-red-200">
                    {{ t('contact.error') }}
                  </p>
                </div>
              </div>
            </div>
          </ClientOnly>
        </form>
      </div>
    </div>
  </section>
</template>

<style scoped>
.form-group {
  @apply relative transition-all duration-300;
}

.form-input {
  @apply block w-full rounded-lg border border-gray-200 dark:border-gray-700
  bg-white/80 dark:bg-gray-800/80
  text-gray-900 dark:text-white
  focus:ring-1 focus:ring-green-500/30 focus:border-green-500/70
  hover:border-gray-300 dark:hover:border-gray-600
  transition-all duration-300 text-base px-4 py-3;
}

.form-group.is-focused label {
  @apply text-green-600 dark:text-green-400 font-medium transform -translate-y-0.5 transition-transform;
}

.animate-fade-in {
  animation: fadeIn 0.3s ease-out forwards;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(-5px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

textarea::-webkit-scrollbar {
  width: 6px;
}

textarea::-webkit-scrollbar-track {
  @apply bg-gray-100/50 dark:bg-gray-800/50;
  border-radius: 3px;
}

textarea::-webkit-scrollbar-thumb {
  @apply bg-green-500/30 dark:bg-green-600/30;
  border-radius: 3px;
  border: 2px solid transparent;
  background-clip: padding-box;
}

textarea::-webkit-scrollbar-thumb:hover {
  @apply bg-green-600/50 dark:bg-green-500/50;
}

@media (prefers-reduced-motion: reduce) {
  .transition-all {
    transition: none !important;
  }

  .animate-fade-in {
    animation: none !important;
  }
}
</style>
