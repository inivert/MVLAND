<!-- components/ContactForm.vue -->
<script setup lang="ts">
import { reactive, ref } from 'vue'

const emit = defineEmits(['success', 'error'])

const services = [
  'Landscape Design',
  'Lawn Maintenance',
  'Hardscaping',
  'Garden Care',
  'Irrigation Systems',
  'Tree Services',
]

const formData = reactive({
  name: '',
  email: '',
  service: '',
  message: '',
})

const isSubmitting = ref(false)
const showSuccess = ref(false)

function handleSubmit() {
  isSubmitting.value = true
  showSuccess.value = false

  // Simulate API call
  setTimeout(() => {
    try {
      formData.name = ''
      formData.email = ''
      formData.service = ''
      formData.message = ''
      showSuccess.value = true
      setTimeout(() => {
        showSuccess.value = false
      }, 3000)
    } catch (error) {
      console.error('Form submission error:', error)
    } finally {
      isSubmitting.value = false
    }
  }, 1000)
}
</script>

<template>
  <section id="contact" class="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
    <!-- Background decoration -->
    <div class="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-gray-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <div class="absolute inset-0 bg-grid-pattern opacity-5" />
    </div>

    <div class="relative max-w-7xl mx-auto">
      <!-- Section header -->
      <div class="text-center mb-16">
        <h2 class="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent mb-4">
          Get in Touch
        </h2>
        <p class="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          Ready to transform your outdoor space? Contact us for a free consultation and quote.
        </p>
      </div>

      <div class="grid lg:grid-cols-2 gap-12 items-start">
        <!-- Contact form -->
        <div class="relative">
          <div class="absolute -inset-1">
            <div class="w-full h-full mx-auto opacity-30 blur-lg filter bg-gradient-to-r from-green-400 via-emerald-500 to-green-600" />
          </div>
          <form class="relative bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8" @submit.prevent="handleSubmit">
            <!-- Success message -->
            <div
              v-if="showSuccess"
              class="absolute top-0 left-0 right-0 p-4 bg-green-500 text-white text-center rounded-t-2xl transition-all duration-300"
            >
              Message sent successfully!
            </div>

            <!-- Name field -->
            <div class="mb-6">
              <label class="relative block">
                <input
                  v-model="formData.name"
                  type="text"
                  class="peer w-full px-4 py-3 rounded-lg border bg-transparent transition-all duration-300 outline-none focus:border-green-500 dark:focus:border-green-400"
                  :class="[
                    formData.name ? 'border-green-500' : 'border-gray-300 dark:border-gray-600',
                  ]"
                  required
                >
                <span
                  class="absolute left-3 top-3 text-gray-500 transition-all duration-300 pointer-events-none
                           peer-focus:-translate-y-7 peer-focus:text-sm peer-focus:text-green-500
                           peer-valid:-translate-y-7 peer-valid:text-sm"
                  :class="{ 'scale-90 -translate-y-7': formData.name }"
                >
                  Your Name
                </span>
              </label>
            </div>

            <!-- Email field -->
            <div class="mb-6">
              <label class="relative block">
                <input
                  v-model="formData.email"
                  type="email"
                  class="peer w-full px-4 py-3 rounded-lg border bg-transparent transition-all duration-300 outline-none focus:border-green-500 dark:focus:border-green-400"
                  :class="[
                    formData.email ? 'border-green-500' : 'border-gray-300 dark:border-gray-600',
                  ]"
                  required
                >
                <span
                  class="absolute left-3 top-3 text-gray-500 transition-all duration-300 pointer-events-none
                           peer-focus:-translate-y-7 peer-focus:text-sm peer-focus:text-green-500
                           peer-valid:-translate-y-7 peer-valid:text-sm"
                  :class="{ 'scale-90 -translate-y-7': formData.email }"
                >
                  Email Address
                </span>
              </label>
            </div>

            <!-- Service selection -->
            <div class="mb-6">
              <label class="relative block">
                <select
                  v-model="formData.service"
                  class="peer w-full px-4 py-3 rounded-lg border bg-transparent transition-all duration-300 outline-none appearance-none focus:border-green-500 dark:focus:border-green-400"
                  :class="[
                    formData.service ? 'border-green-500 text-gray-900 dark:text-white' : 'border-gray-300 dark:border-gray-600 text-gray-500',
                  ]"
                  required
                >
                  <option value="" disabled selected>Select a Service</option>
                  <option
                    v-for="service in services"
                    :key="service"
                    :value="service"
                    class="text-gray-900 dark:text-white bg-white dark:bg-gray-800"
                  >
                    {{ service }}
                  </option>
                </select>
                <svg
                  class="absolute right-4 top-1/2 transform -translate-y-1/2 w-5 h-5 pointer-events-none text-gray-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </label>
            </div>

            <!-- Message field -->
            <div class="mb-6">
              <label class="relative block">
                <textarea
                  v-model="formData.message"
                  rows="4"
                  class="peer w-full px-4 py-3 rounded-lg border bg-transparent transition-all duration-300 outline-none resize-none focus:border-green-500 dark:focus:border-green-400"
                  :class="[
                    formData.message ? 'border-green-500' : 'border-gray-300 dark:border-gray-600',
                  ]"
                  required
                />
                <span
                  class="absolute left-3 top-3 text-gray-500 transition-all duration-300 pointer-events-none
                           peer-focus:-translate-y-7 peer-focus:text-sm peer-focus:text-green-500
                           peer-valid:-translate-y-7 peer-valid:text-sm"
                  :class="{ 'scale-90 -translate-y-7': formData.message }"
                >
                  Your Message
                </span>
              </label>
            </div>

            <!-- Submit button -->
            <button
              type="submit"
              :disabled="isSubmitting"
              class="group relative w-full py-3 px-6 text-lg font-medium text-white bg-gradient-to-r from-green-500 to-emerald-600 rounded-lg overflow-hidden transition-all duration-300 hover:scale-[1.02] disabled:opacity-50 disabled:hover:scale-100 focus:outline-none focus:ring-2 focus:ring-green-500/50"
            >
              <span class="absolute inset-0 w-full h-full bg-gradient-to-r from-green-400 to-emerald-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <span class="relative flex items-center justify-center">
                <svg
                  v-if="isSubmitting"
                  class="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
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
                  <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                </svg>
                {{ isSubmitting ? 'Sending...' : 'Send Message' }}
              </span>
            </button>
          </form>
        </div>

        <!-- Contact information -->
        <div class="lg:pl-8">
          <div class="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8">
            <h3 class="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
              Contact Information
            </h3>

            <div class="space-y-6">
              <!-- Phone -->
              <div class="flex items-start">
                <div class="flex-shrink-0">
                  <div class="flex items-center justify-center w-12 h-12 rounded-lg bg-green-500/10 text-green-500">
                    <svg
                      class="w-6 h-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                  </div>
                </div>
                <div class="ml-4">
                  <p class="text-lg font-medium text-gray-900 dark:text-white">
                    Phone
                  </p>
                  <a href="tel:+1234567890" class="text-gray-600 dark:text-gray-400 hover:text-green-500 dark:hover:text-green-400 transition-colors">
                    (123) 456-7890
                  </a>
                </div>
              </div>

              <!-- Email -->
              <div class="flex items-start">
                <div class="flex-shrink-0">
                  <div class="flex items-center justify-center w-12 h-12 rounded-lg bg-green-500/10 text-green-500">
                    <svg
                      class="w-6 h-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                </div>
                <div class="ml-4">
                  <p class="text-lg font-medium text-gray-900 dark:text-white">
                    Email
                  </p>
                  <a href="mailto:info@mvlandscaping.com" class="text-gray-600 dark:text-gray-400 hover:text-green-500 dark:hover:text-green-400 transition-colors">
                    info@mvlandscaping.com
                  </a>
                </div>
              </div>

              <!-- Location -->
              <div class="flex items-start">
                <div class="flex-shrink-0">
                  <div class="flex items-center justify-center w-12 h-12 rounded-lg bg-green-500/10 text-green-500">
                    <svg
                      class="w-6 h-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  </div>
                </div>
                <div class="ml-4">
                  <p class="text-lg font-medium text-gray-900 dark:text-white">
                    Location
                  </p>
                  <p class="text-gray-600 dark:text-gray-400">
                    Boston Metropolitan Area<br>
                    Massachusetts, USA
                  </p>
                </div>
              </div>

              <!-- Hours -->
              <div class="flex items-start">
                <div class="flex-shrink-0">
                  <div class="flex items-center justify-center w-12 h-12 rounded-lg bg-green-500/10 text-green-500">
                    <svg
                      class="w-6 h-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                </div>
                <div class="ml-4">
                  <p class="text-lg font-medium text-gray-900 dark:text-white">
                    Business Hours
                  </p>
                  <p class="text-gray-600 dark:text-gray-400">
                    Monday - Friday: 8:00 AM - 6:00 PM<br>
                    Saturday: 9:00 AM - 4:00 PM
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
textarea::-webkit-scrollbar {
  width: 8px;
}

textarea::-webkit-scrollbar-track {
  @apply bg-gray-100 dark:bg-gray-800;
  border-radius: 4px;
}

textarea::-webkit-scrollbar-thumb {
  @apply bg-green-500 dark:bg-green-600;
  border-radius: 4px;
  border: 2px solid transparent;
  background-clip: padding-box;
}

textarea::-webkit-scrollbar-thumb:hover {
  @apply bg-green-600 dark:bg-green-500;
}

@media (prefers-reduced-motion: reduce) {
  .transition-all {
    transition: none !important;
  }
}
</style>
