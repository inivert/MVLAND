<script setup lang="ts">
import { onMounted, ref } from 'vue'

const isVisible = ref(false)

const projects = [
  {
    title: 'Modern Backyard Retreat',
    description: 'A contemporary outdoor living space featuring a custom fire pit and sustainable native plants.',
    image: '/images/samples/IMG_6685.jpeg',
    tags: ['Modern', 'Sustainable', 'Outdoor Living'],
  },
  {
    title: 'Mediterranean Garden',
    description: 'Drought-resistant landscaping with Mediterranean-inspired design elements and water features.',
    image: '/images/samples/IMG_6687.jpeg',
    tags: ['Mediterranean', 'Water-Wise', 'Design'],
  },
  {
    title: 'Urban Rooftop Oasis',
    description: 'Transforming a city rooftop into a lush garden with container plants and modular seating.',
    image: '/images/samples/IMG_6689.jpeg',
    tags: ['Urban', 'Rooftop', 'Container Garden'],
  },
  {
    title: 'Natural Stone Patio',
    description: 'Custom-designed patio using natural stone, integrated lighting, and native plantings.',
    image: '/images/samples/IMG_6691.jpeg',
    tags: ['Hardscape', 'Natural Stone', 'Lighting'],
  },
  {
    title: 'Zen Garden Retreat',
    description: 'Japanese-inspired garden featuring a koi pond, bamboo elements, and meditation spaces.',
    image: '/images/samples/IMG_6695.jpeg',
    tags: ['Japanese', 'Water Feature', 'Meditation'],
  },
  {
    title: 'Edible Landscape',
    description: 'Beautiful and functional garden design incorporating fruit trees, herbs, and vegetables.',
    image: '/images/samples/IMG_6673.jpeg',
    tags: ['Edible', 'Organic', 'Sustainable'],
  },
]

onMounted(() => {
  // Add a small delay before showing the projects for a nice fade-in effect
  setTimeout(() => {
    isVisible.value = true
  }, 100)
})
</script>

<template>
  <section class="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
    <div class="max-w-7xl mx-auto">
      <div class="text-center mb-16">
        <span class="text-sm font-medium text-green-600 dark:text-green-400 mb-2 block">Our Portfolio</span>
        <h2 class="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent mb-4">
          Recent Projects
        </h2>
        <p class="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          Explore our portfolio of completed landscaping projects, showcasing our expertise in creating beautiful outdoor spaces.
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div
          v-for="(project, index) in projects"
          :key="index"
          class="group relative"
          :class="{ 'opacity-0 translate-y-4': !isVisible }"
          :style="{ transitionDelay: `${index * 100}ms` }"
        >
          <div class="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-lg transition-all duration-500 group-hover:shadow-2xl">
            <img
              :src="project.image"
              :alt="project.title"
              class="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
              loading="lazy"
            >
            <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div class="absolute inset-0 p-6 flex flex-col justify-end translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
              <h3 class="text-xl font-semibold text-white mb-2">
                {{ project.title }}
              </h3>
              <p class="text-gray-200 text-sm mb-4">
                {{ project.description }}
              </p>
              <div class="flex flex-wrap gap-2 mb-4">
                <span
                  v-for="tag in project.tags"
                  :key="tag"
                  class="px-3 py-1 text-xs font-medium bg-white/20 text-white rounded-full backdrop-blur-sm"
                >
                  {{ tag }}
                </span>
              </div>
              <button class="group/btn inline-flex items-center justify-center px-4 py-2 bg-white/90 hover:bg-white text-gray-900 rounded-lg text-sm font-medium transition-colors duration-300">
                View Details
                <svg
                  class="w-4 h-4 ml-2 transform group-hover/btn:translate-x-1 transition-transform duration-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div class="mt-16 text-center">
        <button class="inline-flex items-center justify-center px-6 py-3 text-base font-medium text-white bg-gradient-to-r from-green-600 to-emerald-600 rounded-lg hover:from-green-500 hover:to-emerald-500 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
          View All Projects
          <svg
            class="w-5 h-5 ml-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M17 8l4 4m0 0l-4 4m4-4H3"
            />
          </svg>
        </button>
      </div>
    </div>
  </section>
</template>

<style scoped>
.group {
  opacity: 1;
  transform: translateY(0);
  transition: opacity 0.5s ease-out, transform 0.5s ease-out;
}
</style>
