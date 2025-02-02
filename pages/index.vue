<script setup lang="ts">
import { onMounted } from 'vue'
import ContactForm from '~/components/ContactForm.vue'
import HeroSection from '~/components/HeroSection.vue'
import TestimonialsCarousel from '~/components/TestimonialsCarousel.vue'
import WorkShowcase from '~/components/WorkShowcase.vue'

const services = [
  {
    title: 'Landscape Design',
    description: 'Custom designs that transform your outdoor space into a beautiful and functional environment.',
    icon: '🎨',
    link: '#services',
  },
  {
    title: 'Lawn Maintenance',
    description: 'Regular care to keep your lawn healthy, vibrant, and well-maintained throughout the year.',
    icon: '🌱',
    link: '#services',
  },
  {
    title: 'Hardscaping',
    description: 'Expert installation of patios, walkways, and retaining walls to enhance your outdoor living space.',
    icon: '🏗️',
    link: '#services',
  },
  {
    title: 'Garden Care',
    description: 'Professional plant care and seasonal maintenance to keep your garden thriving.',
    icon: '🌺',
    link: '#services',
  },
  {
    title: 'Irrigation Systems',
    description: 'Smart irrigation solutions for efficient water management and healthy landscapes.',
    icon: '💧',
    link: '#services',
  },
  {
    title: 'Tree Services',
    description: 'Complete tree care including trimming, removal, and health maintenance.',
    icon: '🌳',
    link: '#services',
  },
]

const features = [
  'Professional Team',
  'Quality Materials',
  'Sustainable Practices',
  'Custom Solutions',
  'Timely Delivery',
  'Ongoing Support',
]

onMounted(() => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate-fade-in')
      }
    })
  }, {
    threshold: 0.1,
    rootMargin: '50px',
  })

  const sections = document.querySelectorAll('section')
  sections.forEach((section) => {
    observer.observe(section)
  })
})
</script>

<template>
  <main>
    <HeroSection />
    <div class="min-h-screen bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      <!-- Services Section -->
      <section id="services" class="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div class="absolute inset-0 bg-gradient-to-b from-transparent via-green-50/30 to-transparent dark:via-green-900/10" />
        <div class="relative max-w-7xl mx-auto">
          <div class="text-center mb-16">
            <h2 class="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent mb-4">
              Our Services
            </h2>
            <p class="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Discover our comprehensive range of landscaping services designed to transform your outdoor space.
            </p>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div
              v-for="service in services"
              :key="service.title"
              class="group relative bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 overflow-hidden"
            >
              <div class="absolute inset-0 bg-gradient-to-br from-green-500/5 to-emerald-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div class="relative z-10">
                <div class="text-4xl mb-4 transform group-hover:scale-110 transition-transform duration-300">
                  {{ service.icon }}
                </div>
                <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  {{ service.title }}
                </h3>
                <p class="text-gray-600 dark:text-gray-400">
                  {{ service.description }}
                </p>
                <div class="mt-4 flex items-center text-green-600 dark:text-green-400 opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                  <span class="text-sm font-medium">Learn more</span>
                  <svg
                    class="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform duration-300"
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
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- About Section -->
      <section id="about" class="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div class="absolute inset-0 bg-gradient-to-t from-transparent via-gray-50/50 to-transparent dark:via-gray-900/50" />
        <div class="relative max-w-7xl mx-auto">
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 class="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent mb-6">
                About M.V Landscaping
              </h2>
              <p class="text-gray-600 dark:text-gray-400 mb-8">
                With years of experience in transforming outdoor spaces, we bring creativity, expertise, and dedication to every project. Our team of skilled professionals ensures that your vision becomes reality.
              </p>
              <ul class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <li
                  v-for="feature in features"
                  :key="feature"
                  class="flex items-center p-4 bg-white dark:bg-gray-800 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300"
                >
                  <svg class="w-5 h-5 text-green-500 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                  </svg>
                  <span class="text-gray-700 dark:text-gray-300">{{ feature }}</span>
                </li>
              </ul>
            </div>
            <div class="relative group">
              <div class="absolute -inset-4">
                <div class="w-full h-full mx-auto rotate-180 opacity-30 blur-lg filter bg-gradient-to-r from-green-400 via-emerald-500 to-green-600 group-hover:opacity-40 transition-opacity duration-300" />
              </div>
              <div class="relative rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="/images/samples/hero-bg.jpg"
                  alt="Our team at work"
                  class="w-full aspect-[4/3] object-cover transform group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                >
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
