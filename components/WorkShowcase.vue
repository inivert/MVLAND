<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { useI18n } from 'vue-i18n'

interface Project {
  title: string
  description: string
  image: string
  tags: string[]
}

const { t } = useI18n()
const isVisible = ref(false)
const selectedProject = ref<Project | null>(null)
const isModalOpen = ref(false)

function openModal(project: Project): void {
  selectedProject.value = project
  isModalOpen.value = true
  document.body.style.overflow = 'hidden'
}

function closeModal(): void {
  isModalOpen.value = false
  document.body.style.overflow = ''
  setTimeout(() => {
    selectedProject.value = null
  }, 300)
}

const projects = [
  {
    title: t('work.projects.modern.title', 'Modern Stone Pathway'),
    description: t(
      'work.projects.modern.description',
      'Elegant walkway design featuring premium natural stone pavers and drought-resistant border plants.',
    ),
    image: '/images/samples/IMG_6685.jpeg',
    tags: ['Stone Pathway', 'Modern Design', 'Low Maintenance'],
  },
  {
    title: t('work.projects.fireplace.title', 'Outdoor Living Space'),
    description: t(
      'work.projects.fireplace.description',
      'Custom-built stone fireplace with comfortable seating area, surrounded by decorative gravel and accent lighting.',
    ),
    image: '/images/samples/IMG_6687.jpeg',
    tags: ['Fireplace', 'Outdoor Living', 'Stone Work'],
  },
  {
    title: t('work.projects.patio.title', 'Contemporary Patio Design'),
    description: t(
      'work.projects.patio.description',
      'Modern patio featuring clean lines with a perfect blend of hardscape and strategic plant placement for privacy.',
    ),
    image: '/images/samples/IMG_6689.jpeg',
    tags: ['Patio', 'Contemporary', 'Privacy Design'],
  },
  {
    title: t('work.projects.garden.title', 'Natural Rock Garden'),
    description: t(
      'work.projects.garden.description',
      'Thoughtfully arranged rock garden with native plants and flowing water feature, creating a peaceful atmosphere.',
    ),
    image: '/images/samples/IMG_6691.jpeg',
    tags: ['Rock Garden', 'Water Feature', 'Native Plants'],
  },
  {
    title: t('work.projects.backyard.title', 'Mulch Installation'),
    description: t(
      'work.projects.backyard.description',
      'Mulch installation for a beautiful and natural look.',
    ),
    image: '/images/samples/IMG_6695.jpeg',
    tags: ['Backyard Design', 'Lighting', 'Landscaping'],
  },
  {
    title: t('work.projects.landscape.title', 'Complete Landscape Transformation'),
    description: t(
      'work.projects.landscape.description',
      'Full yard renovation featuring professional grading, premium sod installation, and strategic plant placement.',
    ),
    image: '/images/samples/IMG_6673.jpeg',
    tags: ['Full Renovation', 'Sod Installation', 'Plant Design'],
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
  <section
    class="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800"
  >
    <div class="max-w-7xl mx-auto">
      <div class="text-center mb-16">
        <span class="text-sm font-medium text-green-600 dark:text-green-400 mb-2 block">{{
          t('work.subtitle')
        }}</span>
        <h2
          class="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent mb-4"
        >
          {{ t('work.title') }}
        </h2>
        <p class="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          {{
            t(
              'work.description',
              'Explore our portfolio of completed landscaping projects, showcasing our expertise in creating beautiful outdoor spaces.',
            )
          }}
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
          <div
            class="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-lg transition-all duration-500 group-hover:shadow-2xl"
          >
            <nuxt-img
              :src="project.image"
              :alt="project.title"
              class="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
              loading="lazy"
              placeholder
              format="webp"
              quality="80"
              sizes="sm:100vw md:50vw lg:33vw"
            />
            <div
              class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            />
            <div
              class="absolute inset-0 p-6 flex flex-col justify-end translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300"
            >
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
              <button
                class="group/btn inline-flex items-center justify-center px-4 py-2 bg-white/90 hover:bg-white text-gray-900 rounded-lg text-sm font-medium transition-colors duration-300"
                @click="openModal(project)"
              >
                Expand
                <svg
                  class="w-4 h-4 ml-2 transform group-hover/btn:scale-110 transition-transform duration-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div class="mt-16 text-center">
        <button
          class="inline-flex items-center justify-center px-6 py-3 text-base font-medium text-white bg-gradient-to-r from-green-600 to-emerald-600 rounded-lg hover:from-green-500 hover:to-emerald-500 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
        >
          {{ t('work.viewMore') }}
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

    <!-- Image Modal -->
    <div
      v-if="isModalOpen"
      class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm transition-all duration-300"
      :class="{ 'opacity-0': !selectedProject }"
      @click="closeModal"
    >
      <div
        class="relative w-full h-full max-w-[90vw] max-h-[90vh] flex items-center justify-center rounded-2xl transform transition-all duration-500"
        @click="closeModal"
      >
        <!-- Image wrapper with aspect ratio preservation -->
        <div
          class="relative flex items-center justify-center bg-black/20 rounded-xl backdrop-blur-sm p-4"
          @click.stop
        >
          <nuxt-img
            v-if="selectedProject"
            :src="selectedProject.image"
            :alt="selectedProject.title"
            class="max-w-full max-h-[85vh] object-contain rounded-lg shadow-2xl transform transition-transform duration-300 hover:scale-[1.02]"
            loading="lazy"
            placeholder
            format="webp"
            quality="90"
            sizes="sm:100vw md:80vw lg:70vw"
          />
          <!-- Close button -->
          <button
            class="absolute top-4 right-4 p-2 rounded-full bg-black/50 hover:bg-black/70 text-white backdrop-blur-sm transition-colors duration-300 shadow-lg"
            @click="closeModal"
          >
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
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
          <!-- Image info overlay -->
          <div
            class="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/90 via-black/50 to-transparent backdrop-blur-[2px]"
          >
            <h3 class="text-2xl font-semibold text-white mb-2">
              {{ selectedProject?.title }}
            </h3>
            <p class="text-gray-200 text-base max-w-3xl">
              {{ selectedProject?.description }}
            </p>
            <div class="flex flex-wrap gap-2 mt-4">
              <span
                v-for="tag in selectedProject?.tags"
                :key="tag"
                class="px-3 py-1 text-sm font-medium bg-white/10 text-white rounded-full backdrop-blur-sm"
              >
                {{ tag }}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.group {
  opacity: 1;
  transform: translateY(0);
  transition:
    opacity 0.5s ease-out,
    transform 0.5s ease-out;
}

/* Add smooth transitions for modal */
.modal-enter-active,
.modal-leave-active {
  transition: opacity 0.3s ease;
}

.modal-enter-from,
.modal-leave-to {
  opacity: 0;
}

/* Image modal transitions */
.modal-image-enter-active {
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.modal-image-leave-active {
  transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
}

.modal-image-enter-from,
.modal-image-leave-to {
  opacity: 0;
  transform: scale(0.95);
}

/* Improve image quality */
img {
  image-rendering: -webkit-optimize-contrast;
  image-rendering: crisp-edges;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  transform: translateZ(0);
}

/* Disable transitions for users who prefer reduced motion */
@media (prefers-reduced-motion: reduce) {
  .transition-all,
  .transition-transform,
  .transition-opacity {
    transition: none !important;
  }

  .modal-image-enter-active,
  .modal-image-leave-active {
    transition: none !important;
  }
}
</style>
