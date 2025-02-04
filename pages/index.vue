<script setup lang="ts">
import { defineAsyncComponent, onMounted } from 'vue'
import { useI18n } from 'vue-i18n'

// Dynamic imports for better initial loading performance
const ContactForm = defineAsyncComponent(() => import('~/components/ContactForm.vue'))
const HeroSection = defineAsyncComponent(() => import('~/components/HeroSection.vue'))
const ServicesGrid = defineAsyncComponent(() => import('~/components/ServicesGrid.vue'))
const TestimonialsCarousel = defineAsyncComponent(() => import('~/components/TestimonialsCarousel.vue'))
const WorkShowcase = defineAsyncComponent(() => import('~/components/WorkShowcase.vue'))

const { t } = useI18n()

const features = [
  t('about.features.professionalTeam'),
  t('about.features.qualityMaterials'),
  t('about.features.sustainablePractices'),
  t('about.features.customSolutions'),
  t('about.features.timelyDelivery'),
  t('about.features.ongoingSupport'),
]

onMounted(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in')
        }
      })
    },
    {
      threshold: 0.1,
      rootMargin: '50px',
    },
  )

  const sections = document.querySelectorAll('section')
  sections.forEach((section) => {
    observer.observe(section)
  })
})
</script>

<template>
  <main>
    <HeroSection />
    <div
      class="min-h-screen bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800"
    >
      <!-- Services Section -->
      <ServicesGrid />

      <!-- About Section -->
      <section id="about" class="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div
          class="absolute inset-0 bg-gradient-to-t from-transparent via-gray-50/50 to-transparent dark:via-gray-900/50"
        />
        <div class="relative max-w-7xl mx-auto">
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2
                class="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent mb-6"
              >
                {{ t('about.title') }}
              </h2>
              <p class="text-gray-600 dark:text-gray-400 mb-8">
                {{ t('about.description') }}
              </p>
              <ul class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <li
                  v-for="feature in features"
                  :key="feature"
                  class="flex items-center p-4 bg-white dark:bg-gray-800 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300"
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
                  <span class="text-gray-700 dark:text-gray-300">{{ feature }}</span>
                </li>
              </ul>
            </div>
            <div class="relative group">
              <div class="absolute -inset-4">
                <div
                  class="w-full h-full mx-auto rotate-180 opacity-30 blur-lg filter bg-gradient-to-r from-green-400 via-emerald-500 to-green-600 group-hover:opacity-40 transition-opacity duration-300"
                />
              </div>
              <div class="relative rounded-2xl overflow-hidden shadow-2xl">
                <nuxt-img
                  src="/images/samples/hero-bg.jpg"
                  :alt="t('about.teamImageAlt')"
                  class="w-full aspect-[4/3] object-cover transform group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                  placeholder
                  format="webp"
                  quality="85"
                  sizes="sm:100vw md:80vw lg:50vw"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Work Showcase Section -->
      <WorkShowcase />

      <!-- Testimonials Section -->
      <TestimonialsCarousel />

      <!-- Contact Section -->
      <ContactForm />
    </div>
  </main>
</template>

<style>
.perspective {
  perspective: 1000px;
}

@keyframes scroll {
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(6px);
  }
  100% {
    transform: translateY(0);
  }
}

.animate-scroll {
  animation: scroll 2s ease-in-out infinite;
}

.bg-grid-pattern {
  background-image: linear-gradient(to right, rgba(128, 128, 128, 0.1) 1px, transparent 1px),
    linear-gradient(to bottom, rgba(128, 128, 128, 0.1) 1px, transparent 1px);
  background-size: 24px 24px;
}

.animate-fade-in {
  animation: fadeIn 0.8s ease-out forwards;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.btn-primary {
  @apply inline-flex items-center justify-center px-6 py-3 text-base font-medium text-white bg-gradient-to-r from-green-500 to-emerald-600 rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 dark:focus:ring-offset-gray-900;
}

.btn-secondary {
  @apply inline-flex items-center justify-center px-6 py-3 text-base font-medium border-2 border-green-500/20 rounded-lg transition-all duration-300 hover:border-green-500/40 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 dark:focus:ring-offset-gray-900;
}
</style>
