<!-- components/TestimonialsCarousel.vue -->
<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue'

const testimonials = [
  {
    id: 1,
    text: 'The team transformed our backyard into a stunning oasis. Their attention to detail and creative vision exceeded our expectations!',
    name: 'Sarah Johnson',
    location: 'Warwick, RI',
  },
  {
    id: 2,
    text: 'Professional, reliable, and incredibly skilled. They not only delivered on time but also provided valuable suggestions that improved our original design.',
    name: 'Michael Chen',
    location: 'Cumberland, RI',
  },
  {
    id: 3,
    text: 'Outstanding service from start to finish. Their sustainable landscaping practices and knowledge of local flora helped create a beautiful, low-maintenance garden.',
    name: 'Emily Rodriguez',
    location: 'Providence, RI',
  },
]

const currentIndex = ref(0)
const autoplay = ref(true)
let intervalId: number | null = null

function nextSlide() {
  currentIndex.value = (currentIndex.value + 1) % testimonials.length
}

function prevSlide() {
  currentIndex.value = (currentIndex.value - 1 + testimonials.length) % testimonials.length
}

onMounted(() => {
  startAutoplay()
})

onUnmounted(() => {
  if (intervalId) {
    clearInterval(intervalId)
  }
})

function startAutoplay() {
  intervalId = window.setInterval(() => {
    if (autoplay.value) {
      nextSlide()
    }
  }, 5000)
}
</script>

<template>
  <section class="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-gradient-to-b from-gray-50/50 via-white to-gray-50/50 dark:from-gray-900/50 dark:via-gray-800 dark:to-gray-900/50">
    <!-- Background decoration -->
    <div class="absolute inset-0 overflow-hidden">
      <div class="absolute -top-40 -right-32 w-96 h-96 rounded-full bg-gradient-to-br from-green-200 to-green-300 dark:from-green-900 dark:to-green-800 opacity-20 blur-3xl" />
      <div class="absolute -bottom-40 -left-32 w-96 h-96 rounded-full bg-gradient-to-tr from-emerald-200 to-emerald-300 dark:from-emerald-900 dark:to-emerald-800 opacity-20 blur-3xl" />
    </div>

    <div class="relative max-w-7xl mx-auto">
      <!-- Section header -->
      <div class="text-center mb-24">
        <h2 class="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-6">
          What Our <span class="text-emerald-600 dark:text-emerald-400">Clients Say</span>
        </h2>
        <p class="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          Hear from our satisfied customers about their experience with our landscaping services.
        </p>
      </div>

      <!-- Testimonials carousel -->
      <div
        class="relative mx-auto max-w-3xl"
        @mouseenter="autoplay = false"
        @mouseleave="autoplay = true"
      >
        <!-- Main testimonial -->
        <div class="relative min-h-[300px]">
          <transition-group
            name="testimonial"
            tag="div"
            class="relative"
          >
            <div
              v-for="(testimonial, index) in testimonials"
              v-show="currentIndex === index"
              :key="testimonial.id"
              class="absolute inset-0 w-full"
            >
              <div class="relative bg-white dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl shadow-lg p-8 md:p-10">
                <!-- Quote icon -->
                <div class="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
                  <div class="w-12 h-12 bg-emerald-500 rounded-full flex items-center justify-center shadow-lg">
                    <svg class="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                    </svg>
                  </div>
                </div>

                <!-- Content -->
                <div class="mt-6 text-center">
                  <p class="text-xl md:text-2xl text-gray-700 dark:text-gray-300 leading-relaxed mb-8">
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

        <!-- Indicators -->
        <div class="absolute -bottom-12 left-1/2 transform -translate-x-1/2 flex space-x-2">
          <button
            v-for="(_, index) in testimonials"
            :key="index"
            class="group focus:outline-none"
            @click="currentIndex = index"
          >
            <div
              class="w-2 h-2 rounded-full transition-all duration-300"
              :class="[
                currentIndex === index
                  ? 'w-6 bg-emerald-500'
                  : 'bg-gray-300 dark:bg-gray-600 group-hover:bg-emerald-500/50',
              ]"
            />
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.testimonial-enter-active,
.testimonial-leave-active {
  transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
}

.testimonial-enter-from {
  opacity: 0;
  transform: translateX(20px);
}

.testimonial-leave-to {
  opacity: 0;
  transform: translateX(-20px);
}

.testimonial-enter-to,
.testimonial-leave-from {
  opacity: 1;
  transform: translateX(0);
}

/* Ensure smooth transitions for indicator dots */
.w-6 {
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
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
