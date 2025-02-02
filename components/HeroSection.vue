<!-- components/HeroSection.vue -->
<script setup>
import { reactive } from 'vue'

const cardStyle = reactive({
  transform: 'rotateX(0deg) rotateY(0deg)',
})

const contentStyle = reactive({
  transform: 'translateZ(0px)',
})

function handleMouseMove(e) {
  const rect = e.target.getBoundingClientRect()
  const x = e.clientX - rect.left
  const y = e.clientY - rect.top

  const centerX = rect.width / 2
  const centerY = rect.height / 2

  const rotateX = (y - centerY) / 20
  const rotateY = -(x - centerX) / 20

  cardStyle.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`
  contentStyle.transform = 'translateZ(50px)'
}

function handleMouseLeave() {
  cardStyle.transform = 'rotateX(0deg) rotateY(0deg)'
  contentStyle.transform = 'translateZ(0px)'
}
</script>

<template>
  <section class="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-black dark:from-black dark:via-gray-900 dark:to-gray-800">
    <!-- Animated background patterns -->
    <div class="absolute inset-0 opacity-20">
      <div class="absolute inset-0" style="background-image: url('data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E');" />
    </div>

    <!-- Main hero content -->
    <div class="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
      <div class="grid lg:grid-cols-2 gap-12 items-center">
        <!-- Left column: Text content -->
        <div class="text-center lg:text-left">
          <h1 class="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight">
            <span class="block transform hover:scale-105 transition-transform duration-300">Transform Your</span>
            <span class="block bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent transform hover:scale-105 transition-transform duration-300 delay-100">
              Outdoor Dreams
            </span>
          </h1>
          <p class="text-xl text-gray-300 mb-8 max-w-2xl mx-auto lg:mx-0">
            Experience the art of landscaping with our innovative designs and sustainable solutions. We bring your vision to life.
          </p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <a
              href="#contact"
              class="group relative inline-flex items-center justify-center px-8 py-3 text-lg font-medium text-white bg-gradient-to-r from-green-500 to-emerald-600 rounded-lg overflow-hidden transition-all duration-300 hover:scale-105"
            >
              <span class="absolute inset-0 w-full h-full bg-gradient-to-r from-green-400 to-emerald-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <span class="relative flex items-center">
                Get Started
                <svg
                  class="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform duration-300"
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
              </span>
            </a>
            <a
              href="#portfolio"
              class="group relative inline-flex items-center justify-center px-8 py-3 text-lg font-medium text-white border-2 border-white/20 rounded-lg overflow-hidden hover:border-white/40 transition-all duration-300"
            >
              <span class="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <span class="relative flex items-center">
                View Portfolio
                <svg
                  class="w-5 h-5 ml-2 transform group-hover:rotate-45 transition-transform duration-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  />
                </svg>
              </span>
            </a>
          </div>
        </div>

        <!-- Right column: Interactive 3D card -->
        <div class="relative group perspective">
          <div
            class="relative w-full aspect-[4/3] rounded-2xl overflow-hidden transform-gpu transition-transform duration-500 hover:scale-105"
            :style="cardStyle"
            @mousemove="handleMouseMove"
            @mouseleave="handleMouseLeave"
          >
            <!-- Background image -->
            <img
              src="/images/hero.jpg"
              alt="Beautiful landscape design"
              class="absolute inset-0 w-full h-full object-cover"
              loading="eager"
              fetchpriority="high"
            >

            <!-- Gradient overlay -->
            <div class="absolute inset-0 bg-gradient-to-tr from-black/60 via-black/40 to-transparent" />

            <!-- Content overlay -->
            <div
              class="absolute inset-0 p-8 flex flex-col justify-end transform-gpu transition-transform duration-500"
              :style="contentStyle"
            >
              <span class="text-sm font-medium text-green-400 mb-2">Featured Project</span>
              <h3 class="text-2xl font-bold text-white mb-2">
                Modern Garden Oasis
              </h3>
              <p class="text-gray-300">
                A perfect blend of contemporary design and natural beauty.
              </p>
            </div>

            <!-- Interactive elements -->
            <div class="absolute inset-0">
              <div class="absolute top-4 right-4 flex space-x-2">
                <span
                  v-for="n in 3"
                  :key="n"
                  class="w-2 h-2 rounded-full bg-white/50"
                />
              </div>
            </div>
          </div>

          <!-- Card reflection -->
          <div class="absolute inset-0 rounded-2xl bg-gradient-to-t from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
        </div>
      </div>

      <!-- Scroll indicator -->
      <div class="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div class="flex flex-col items-center space-y-2">
          <span class="text-sm text-gray-400">Scroll to explore</span>
          <div class="w-6 h-10 border-2 border-gray-400 rounded-full p-1">
            <div class="w-1.5 h-1.5 bg-gray-400 rounded-full animate-scroll" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.perspective {
  perspective: 1000px;
}

@keyframes scroll {
  0% { transform: translateY(0); }
  50% { transform: translateY(20px); }
  100% { transform: translateY(0); }
}

.animate-scroll {
  animation: scroll 2s ease-in-out infinite;
}

/* Smooth transitions */
.transition-all {
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
}

/* Hover effects */
.hover\:scale-105:hover {
  transform: scale(1.05);
}

/* Text gradient animation */
@keyframes gradient {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}

.bg-gradient-animate {
  background-size: 200% 200%;
  animation: gradient 3s ease infinite;
}
</style>
