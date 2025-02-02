<!-- components/ServicesGrid.vue -->
<script setup>
const services = [
  {
    title: 'Landscape Design',
    description: 'Create your dream outdoor space with our professional landscape design services.',
    icon: 'PencilIcon',
    features: [
      'Custom design plans',
      '3D visualization',
      'Sustainable solutions',
      'Expert consultation',
    ],
  },
  {
    title: 'Lawn Maintenance',
    description: 'Keep your lawn looking pristine with our comprehensive maintenance services.',
    icon: 'ScissorsIcon',
    features: [
      'Regular mowing',
      'Fertilization',
      'Weed control',
      'Pest management',
    ],
  },
  {
    title: 'Hardscaping',
    description: 'Add structure and functionality to your outdoor space with our hardscaping solutions.',
    icon: 'CubeIcon',
    features: [
      'Patios & walkways',
      'Retaining walls',
      'Outdoor kitchens',
      'Fire pits',
    ],
  },
  {
    title: 'Garden Care',
    description: 'Maintain beautiful and healthy gardens with our expert garden care services.',
    icon: 'LeafIcon',
    features: [
      'Planting & pruning',
      'Mulching',
      'Seasonal cleanup',
      'Plant health care',
    ],
  },
  {
    title: 'Irrigation Systems',
    description: 'Install and maintain efficient irrigation systems for your landscape.',
    icon: 'WaterIcon',
    features: [
      'Smart controllers',
      'Drip irrigation',
      'System maintenance',
      'Water conservation',
    ],
  },
  {
    title: 'Outdoor Lighting',
    description: 'Enhance the beauty and security of your property with outdoor lighting.',
    icon: 'LightBulbIcon',
    features: [
      'LED solutions',
      'Path lighting',
      'Security lighting',
      'Holiday lighting',
    ],
  },
]
</script>

<template>
  <section class="py-24 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900">
    <div class="max-w-7xl mx-auto">
      <div class="text-center mb-16">
        <h2 class="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
          Our Services
        </h2>
        <p class="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          We offer a comprehensive range of landscaping services to enhance your outdoor living space
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div
          v-for="service in services"
          :key="service.title"
          class="bg-gray-50 dark:bg-gray-800 rounded-lg p-8 transition-transform duration-300 hover:transform hover:scale-105"
        >
          <div class="text-green-600 dark:text-green-500 mb-4">
            <component :is="service.icon" class="w-12 h-12" />
          </div>
          <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-4">
            {{ service.title }}
          </h3>
          <p class="text-gray-600 dark:text-gray-400">
            {{ service.description }}
          </p>
          <ul class="mt-4 space-y-2">
            <li
              v-for="feature in service.features"
              :key="feature"
              class="flex items-center text-gray-600 dark:text-gray-400"
            >
              <svg class="w-4 h-4 text-green-600 dark:text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
              </svg>
              {{ feature }}
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>
