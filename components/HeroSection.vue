<!-- components/HeroSection.vue -->
<script setup lang="ts">
import { onMounted, reactive, ref } from 'vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

interface CardStyle {
  transform: string
}

interface ContentStyle {
  transform: string
}

// Background pattern
const patternUrl
  = 'data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'20\' height=\'20\' viewBox=\'0 0 20 20\'%3E%3Cpath fill=\'%23ffffff\' fill-opacity=\'0.4\' d=\'M1 1h2v2H1V1zm4 0h2v2H5V1zm4 0h2v2H9V1zm4 0h2v2h-2V1zm4 0h2v2h-2V1z\'/%3E%3C/svg%3E'

// Card animation composable
function useCardAnimation() {
  const cardStyle = reactive<CardStyle>({
    transform: 'rotateX(0deg) rotateY(0deg)',
  })

  const contentStyle = reactive<ContentStyle>({
    transform: 'translateZ(0px)',
  })

  const handleMouseMove = (e: MouseEvent) => {
    const target = e.target as HTMLElement
    const rect = target.getBoundingClientRect()

    // Calculate mouse position relative to card center
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    const centerX = rect.width / 2
    const centerY = rect.height / 2

    // Smoother rotation calculations with dampening
    const rotateX = ((y - centerY) / centerY) * 8 // Reduced from 10 to 8 degrees
    const rotateY = ((x - centerX) / centerX) * 8 // Reduced from 10 to 8 degrees

    // Apply smooth transform with easing
    cardStyle.transform = `perspective(2000px) rotateX(${-rotateX}deg) rotateY(${rotateY}deg) scale3d(1.01, 1.01, 1.01)`
    contentStyle.transform = 'translateZ(20px)' // Reduced from 30px to 20px
  }

  const handleMouseLeave = () => {
    // Smooth reset animation
    cardStyle.transform = 'perspective(2000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)'
    contentStyle.transform = 'translateZ(0px)'
  }

  return {
    cardStyle,
    contentStyle,
    handleMouseMove,
    handleMouseLeave,
  }
}

const { cardStyle, contentStyle, handleMouseMove, handleMouseLeave } = useCardAnimation()

// Featured project data
const featuredProject = reactive({
  label: t('hero.card.label'),
  title: t('hero.card.title'),
  description: t('hero.card.description'),
  images: [
    '/images/samples/IMG_6685.jpeg',
    '/images/samples/IMG_6687.jpeg',
    '/images/samples/IMG_6689.jpeg',
    '/images/samples/IMG_6691.jpeg',
    '/images/samples/IMG_6701.jpeg',
  ],
})

// Image rotation
const currentImageIndex = ref(0)
const imageLoaded = ref(false)
const imageError = ref(false)

function rotateImage() {
  imageLoaded.value = false
  imageError.value = false
  currentImageIndex.value = (currentImageIndex.value + 1) % featuredProject.images.length
}

// Set up image rotation interval
onMounted(() => {
  // Initial load check
  const img = new Image()
  img.src = featuredProject.images[0]
  img.onload = () => {
    imageLoaded.value = true
  }
  img.onerror = () => {
    imageError.value = true
    console.error('Failed to load image:', featuredProject.images[0])
  }

  setInterval(rotateImage, 5000)
})

// Handle image load
function handleImageLoad() {
  imageLoaded.value = true
  imageError.value = false
}

// Handle image error
function handleImageError() {
  imageError.value = true
  imageLoaded.value = false
  console.error('Failed to load image:', featuredProject.images[currentImageIndex.value])
}
</script>

<template>
  <section
    class="relative min-h-screen flex items-center justify-center overflow-hidden bg-white dark:bg-gray-900 transition-colors duration-300"
    aria-label="Hero Section"
  >
    <!-- Animated background patterns -->
    <div class="absolute inset-0 opacity-5 dark:opacity-10 transition-opacity duration-300">
      <div
        class="absolute inset-0"
        :style="{ backgroundImage: `url('${patternUrl}')`, backgroundSize: '20px 20px' }"
        aria-hidden="true"
      />
    </div>

    <!-- Main hero content -->
    <div class="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
      <div class="grid lg:grid-cols-2 gap-12 items-center">
        <!-- Left column: Text content -->
        <div class="text-center lg:text-left">
          <h1
            class="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-gray-100 mb-6 tracking-tight transition-colors duration-300"
          >
            <span class="block transform hover:scale-105 transition-all duration-300">{{
              t('hero.title')
            }}</span>
          </h1>
          <p
            class="text-gray-800 dark:text-gray-300 text-xl mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed transition-colors duration-300"
          >
            {{ t('hero.subtitle') }}
          </p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <a
              href="#contact"
              class="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-medium text-white bg-emerald-800 dark:bg-emerald-600 rounded-lg overflow-hidden transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-emerald-500/25"
              aria-label="Get Started"
            >
              <span
                class="absolute inset-0 w-full h-full bg-emerald-900 dark:bg-emerald-700 opacity-0 group-hover:opacity-100 transition-all duration-300"
              />
              <span class="relative flex items-center">
                {{ t('hero.cta') }}
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
          </div>
        </div>

        <!-- Right column: Interactive 3D card -->
        <div class="relative group hero-perspective">
          <div
            class="relative w-full aspect-[4/3] rounded-2xl overflow-hidden hero-transform-gpu transition-all duration-500 hover:scale-[1.02] shadow-xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700/20 group-hover:border-emerald-500/20"
            :style="cardStyle"
            @mousemove="handleMouseMove"
            @mouseleave="handleMouseLeave"
          >
            <!-- Border beam effect -->
            <div
              class="absolute -inset-px rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"
            >
              <div class="absolute inset-0 rounded-2xl border-2 border-emerald-500/20">
                <div
                  class="absolute inset-[-2px] bg-gradient-to-r from-transparent via-emerald-500/20 to-transparent border-beam"
                />
              </div>
            </div>

            <!-- Background image -->
            <div class="absolute inset-0 w-full h-full">
              <nuxt-img
                :key="currentImageIndex"
                :src="featuredProject.images[currentImageIndex]"
                :alt="featuredProject.title"
                class="absolute inset-0 w-full h-full object-cover hero-transition-all duration-700"
                :class="{ 'opacity-0': !imageLoaded || imageError }"
                loading="lazy"
                placeholder
                format="webp"
                quality="85"
                sizes="sm:100vw md:80vw lg:50vw"
                @load="handleImageLoad"
                @error="handleImageError"
              />
              <nuxt-img
                src="/images/samples/hero-bg.jpg"
                alt="Fallback background"
                class="absolute inset-0 w-full h-full object-cover"
                :class="{ 'opacity-0': imageLoaded && !imageError }"
                loading="lazy"
                placeholder
                format="webp"
                quality="80"
                sizes="sm:100vw md:80vw lg:50vw"
              />
            </div>

            <!-- Gradient overlay -->
            <div
              class="absolute inset-0 bg-gradient-to-tr from-gray-900/70 via-gray-900/40 to-transparent dark:from-black/60 dark:via-black/40 dark:to-transparent backdrop-blur-[0.5px] transition-colors duration-300"
              aria-hidden="true"
            />

            <!-- Content overlay -->
            <div
              class="relative z-10 p-8 flex flex-col justify-end hero-transform-gpu transition-all duration-500"
              :style="contentStyle"
            >
              <span
                class="text-sm font-medium text-emerald-300 tracking-wider uppercase mb-2 transition-colors duration-300 text-shadow"
              >{{ featuredProject.label }}</span>
              <h3
                class="text-3xl font-bold text-white mb-2 transition-colors duration-300 text-shadow"
              >
                {{ featuredProject.title }}
              </h3>
              <p class="text-gray-100 text-lg transition-colors duration-300 text-shadow">
                {{ featuredProject.description }}
              </p>
            </div>

            <!-- Interactive elements -->
            <div class="absolute top-4 right-4 flex space-x-2">
              <span
                v-for="(_, index) in featuredProject.images"
                :key="index"
                class="w-2 h-2 rounded-full transition-all duration-300"
                :class="[
                  currentImageIndex === index
                    ? 'w-6 bg-emerald-400'
                    : 'bg-white/70 hover:bg-emerald-400/70',
                ]"
              />
            </div>
          </div>

          <!-- Card glow effect -->
          <div
            class="absolute -inset-1 rounded-2xl bg-gradient-to-t from-emerald-500/20 to-emerald-500/5 opacity-0 group-hover:opacity-100 transition-all duration-700 pointer-events-none blur-xl"
            aria-hidden="true"
          />
        </div>
      </div>

      <!-- Scroll indicator -->
    </div>

    <!-- Debug info during development -->
    <div v-if="imageError" class="absolute top-0 left-0 bg-red-500/80 text-white p-2 text-sm">
      Failed to load image. Check console for details.
    </div>
  </section>
</template>

<style scoped>
.hero-perspective {
  perspective: 2000px;
  transform-style: preserve-3d;
  backface-visibility: hidden;
  isolation: isolate;
}

/* Update transition properties for smoother animation */
.hero-transform-gpu {
  transform-style: preserve-3d;
  transition: all 0.5s cubic-bezier(0.17, 0.67, 0.83, 0.67);
  will-change: transform;
  backface-visibility: hidden;
  -webkit-font-smoothing: subpixel-antialiased;
  isolation: isolate;
}

/* Add smooth transition for content */
[class*='hero-transform-gpu'] > * {
  transition: all 0.5s cubic-bezier(0.17, 0.67, 0.83, 0.67);
  backface-visibility: hidden;
}

@keyframes hero-scroll {
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(20px);
  }
  100% {
    transform: translateY(0);
  }
}

.hero-animate-scroll {
  animation: hero-scroll 2s ease-in-out infinite;
}

/* Smooth transitions */
.hero-transition-all {
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 300ms;
}

/* Hover effects */
.hero-hover-scale:hover {
  transform: scale(1.05);
}

/* Text gradient animation */
@keyframes hero-gradient {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}

.hero-gradient-animate {
  background-size: 200% 200%;
  animation: hero-gradient 3s ease infinite;
}

/* Improve image quality */
img {
  image-rendering: -webkit-optimize-contrast;
  transform: translateZ(0);
  backface-visibility: hidden;
  filter: brightness(1.15) contrast(1.1) saturate(1.15);
}

.dark img {
  filter: brightness(1.05) contrast(1.1) saturate(1.1);
}

/* Border beam animation */
@keyframes border-beam {
  0% {
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(100%);
  }
}

.border-beam {
  animation: border-beam 3s ease-in-out infinite;
}

/* Add transition utilities */
.transition-colors {
  transition-property: background-color, border-color, color, fill, stroke;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 300ms;
}

/* Enhance text shadow for better readability over clearer images */
.text-shadow {
  text-shadow: 0 2px 8px rgba(0, 0, 0, 0.4);
}
</style>
