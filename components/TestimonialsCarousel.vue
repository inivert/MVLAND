<!-- components/TestimonialsCarousel.vue -->
<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

const testimonials = [
  {
    name: t('testimonials.clients.john.name'),
    location: t('testimonials.clients.john.location'),
    text: t('testimonials.clients.john.text'),
    image: '/images/samples/IMG_6685.jpeg',
  },
  {
    name: t('testimonials.clients.sarah.name'),
    location: t('testimonials.clients.sarah.location'),
    text: t('testimonials.clients.sarah.text'),
    image: '/images/samples/IMG_6687.jpeg',
  },
  {
    name: t('testimonials.clients.michael.name'),
    location: t('testimonials.clients.michael.location'),
    text: t('testimonials.clients.michael.text'),
    image: '/images/samples/IMG_6689.jpeg',
  },
]

const currentIndex = ref(0)
const isAnimating = ref(false)

function nextSlide() {
  if (isAnimating.value) {
    return
  }
  isAnimating.value = true
  currentIndex.value = (currentIndex.value + 1) % testimonials.length
  setTimeout(() => {
    isAnimating.value = false
  }, 500)
}

function prevSlide() {
  if (isAnimating.value) {
    return
  }
  isAnimating.value = true
  currentIndex.value = (currentIndex.value - 1 + testimonials.length) % testimonials.length
  setTimeout(() => {
    isAnimating.value = false
  }, 500)
}

onMounted(() => {
  // Auto-advance slides every 5 seconds
  const interval = setInterval(nextSlide, 5000)

  // Clean up interval on component unmount
  onUnmounted(() => {
    clearInterval(interval)
  })
})
</script>

<template>
  <section id="testimonials" class="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
    <div
      class="absolute inset-0 bg-gradient-to-b from-transparent via-gray-50/30 to-transparent dark:via-gray-900/30"
    />
    <div class="relative max-w-7xl mx-auto">
      <div class="text-center mb-16">
        <span class="text-sm font-medium text-green-600 dark:text-green-400 mb-2 block">{{
          t('testimonials.subtitle')
        }}</span>
        <h2
          class="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent mb-4"
        >
          {{ t('testimonials.title') }}
        </h2>
      </div>

      <div class="relative">
        <!-- Testimonials Carousel -->
        <div class="relative min-h-[400px]">
          <transition-group name="testimonial" tag="div" class="relative w-full">
            <div
              v-for="(testimonial, index) in testimonials"
              v-show="currentIndex === index"
              :key="index"
              class="w-full absolute top-0 left-0 right-0"
            >
              <div class="max-w-3xl mx-auto">
                <!-- Image -->
                <div class="relative mx-auto mb-8" style="width: 96px; height: 96px">
                  <!-- Glow container -->
                  <div class="absolute" style="inset: -100%; width: 300%; height: 300%">
                    <div
                      class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-gradient-to-br from-green-400 to-emerald-600 rounded-full opacity-50 blur-xl transform -rotate-6"
                    />
                  </div>
                  <!-- Image container -->
                  <div class="relative w-full h-full">
                    <NuxtImg
                      :src="testimonial.image"
                      :alt="testimonial.name"
                      class="w-full h-full object-cover rounded-full border-4 border-white dark:border-gray-800"
                      loading="lazy"
                      placeholder
                      format="webp"
                      quality="85"
                      sizes="96px"
                    />
                  </div>
                </div>

                <!-- Content -->
                <div class="mt-6 text-center">
                  <p
                    class="text-xl md:text-2xl text-gray-700 dark:text-gray-300 leading-relaxed mb-8"
                  >
                    "{{ testimonial.text }}"
                  </p>
                  <div class="flex flex-col items-center">
                    <h4 class="text-lg font-semibold text-gray-900 dark:text-white">
                      {{ testimonial.name }}
                    </h4>
                    <p class="text-emerald-600 dark:text-emerald-400 font-medium">
                      {{ testimonial.location }}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </transition-group>
        </div>

        <!-- Navigation buttons -->
        <div class="absolute top-1/2 -translate-y-1/2 flex justify-between items-center w-full">
          <button
            class="group -left-4 md:-left-8 absolute w-10 h-10 rounded-full bg-white/80 dark:bg-gray-800/80 shadow-lg backdrop-blur-sm flex items-center justify-center transform transition-all duration-200 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-emerald-500/50 hover:bg-white dark:hover:bg-gray-800"
            :aria-label="t('common.previous')"
            @click="prevSlide"
          >
            <svg
              class="w-5 h-5 text-emerald-600 dark:text-emerald-400 transform group-hover:-translate-x-0.5 transition-transform duration-200"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>
          <button
            class="group -right-4 md:-right-8 absolute w-10 h-10 rounded-full bg-white/80 dark:bg-gray-800/80 shadow-lg backdrop-blur-sm flex items-center justify-center transform transition-all duration-200 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-emerald-500/50 hover:bg-white dark:hover:bg-gray-800"
            :aria-label="t('common.next')"
            @click="nextSlide"
          >
            <svg
              class="w-5 h-5 text-emerald-600 dark:text-emerald-400 transform group-hover:translate-x-0.5 transition-transform duration-200"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* Transition animations */
.testimonial-enter-active,
.testimonial-leave-active {
  transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
  position: absolute;
  width: 100%;
}

.testimonial-enter-from {
  opacity: 0;
  transform: translateX(50px);
}

.testimonial-leave-to {
  opacity: 0;
  transform: translateX(-50px);
}

.testimonial-enter-to,
.testimonial-leave-from {
  opacity: 1;
  transform: translateX(0);
}

/* Improve transition performance */
.transition-all {
  will-change: transform, opacity;
}

@media (prefers-reduced-motion: reduce) {
  .testimonial-enter-active,
  .testimonial-leave-active {
    transition: opacity 0.5s ease;
  }

  .testimonial-enter-from,
  .testimonial-leave-to,
  .testimonial-enter-to,
  .testimonial-leave-from {
    transform: none;
  }
}
</style>
