<!-- components/TestimonialsCarousel.vue -->
<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue'

const testimonials = [
  {
    id: 1,
    text: 'The team transformed our backyard into a stunning oasis. Their attention to detail and creative vision exceeded our expectations!',
    name: 'Sarah Johnson',
    location: 'Boston, MA',
    avatar: '/images/testimonials/avatar1.jpg',
  },
  {
    id: 2,
    text: 'Professional, reliable, and incredibly skilled. They not only delivered on time but also provided valuable suggestions that improved our original design.',
    name: 'Michael Chen',
    location: 'Cambridge, MA',
    avatar: '/images/testimonials/avatar2.jpg',
  },
  {
    id: 3,
    text: 'Outstanding service from start to finish. Their sustainable landscaping practices and knowledge of local flora helped create a beautiful, low-maintenance garden.',
    name: 'Emily Rodriguez',
    location: 'Brookline, MA',
    avatar: '/images/testimonials/avatar3.jpg',
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
      <div class="text-center mb-16">
        <h2 class="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent mb-4">
          What Our Clients Say
        </h2>
        <p class="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          Hear from our satisfied customers about their experience with our landscaping services.
        </p>
      </div>

      <!-- Testimonials carousel -->
      <div class="relative" @mouseenter="autoplay = false" @mouseleave="autoplay = true">
        <!-- Main testimonial -->
        <transition-group
          name="testimonial"
          tag="div"
          class="relative"
        >
          <div
            v-for="(testimonial, index) in testimonials"
            v-show="currentIndex === index"
            :key="testimonial.id"
            class="relative"
          >
            <div class="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 md:p-12 transition-all duration-500">
              <!-- Quote decoration -->
              <div class="absolute top-0 left-0 transform -translate-x-4 -translate-y-4">
                <svg class="w-16 h-16 text-green-500/10" fill="currentColor" viewBox="0 0 32 32">
                  <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                </svg>
              </div>

              <!-- Content -->
              <div class="relative">
                <p class="text-xl md:text-2xl text-gray-600 dark:text-gray-300 italic mb-8">
                  {{ testimonial.text }}
                </p>
                <div class="flex items-center gap-4">
                  <div class="relative w-16 h-16 rounded-full overflow-hidden ring-2 ring-green-500/20">
                    <img :src="testimonial.avatar" :alt="testimonial.name" class="w-full h-full object-cover">
                  </div>
                  <div>
                    <h4 class="text-lg font-semibold text-gray-900 dark:text-white">
                      {{ testimonial.name }}
                    </h4>
                    <p class="text-gray-500 dark:text-gray-400">
                      {{ testimonial.location }}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </transition-group>

        <!-- Navigation buttons -->
        <div class="absolute top-1/2 -translate-y-1/2 flex justify-between items-center w-full">
          <button
            class="group relative -left-4 w-12 h-12 rounded-full bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm shadow-lg flex items-center justify-center transform transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-green-500/50"
            @click="prevSlide"
          >
            <svg
              class="w-6 h-6 text-gray-600 dark:text-gray-300 transform group-hover:-translate-x-0.5 transition-transform duration-300"
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
            class="group relative -right-4 w-12 h-12 rounded-full bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm shadow-lg flex items-center justify-center transform transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-green-500/50"
            @click="nextSlide"
          >
            <svg
              class="w-6 h-6 text-gray-600 dark:text-gray-300 transform group-hover:translate-x-0.5 transition-transform duration-300"
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
            class="w-2.5 h-2.5 rounded-full transition-all duration-300 focus:outline-none"
            :class="[
              currentIndex === index
                ? 'bg-green-500 w-8'
                : 'bg-gray-300 dark:bg-gray-600 hover:bg-green-500/50',
            ]"
            @click="currentIndex = index"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.testimonial-enter-active,
.testimonial-leave-active {
  transition: all 0.5s ease;
}

.testimonial-enter-from {
  opacity: 0;
  transform: translateX(30px);
}

.testimonial-leave-to {
  opacity: 0;
  transform: translateX(-30px);
}

.testimonial-enter-to,
.testimonial-leave-from {
  opacity: 1;
  transform: translateX(0);
}

@media (prefers-reduced-motion: reduce) {
  .testimonial-enter-active,
  .testimonial-leave-active {
    transition: opacity 0.5s ease;
  }

  .testimonial-enter-from,
  .testimonial-leave-to {
    transform: none;
  }
}
</style>
