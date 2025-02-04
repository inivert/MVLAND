<!-- pages/terms.vue -->
<script setup>
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

const sections = [
  {
    id: 'services',
    title: 'Services',
    description: 'M.V Landscaping provides professional landscaping services including but not limited to:',
    items: [
      'Lawn maintenance and care',
      'Landscape design and installation',
      'Hardscape construction',
      'Tree and shrub care',
      'Seasonal clean-up',
      'Snow removal (seasonal)',
    ],
  },
  {
    id: 'agreements',
    title: 'Service Agreements',
    items: [
      'All services are subject to availability and weather conditions',
      'Service schedules may be adjusted due to inclement weather',
      'Quotes are valid for 30 days from the date of issue',
      'Additional services not included in the original quote will be charged separately',
      'Emergency services may incur additional charges',
    ],
  },
  {
    id: 'responsibilities',
    title: 'Customer Responsibilities',
    items: [
      'Provide accurate property information and access',
      'Mark or identify underground utilities or irrigation systems',
      'Secure pets during service visits',
      'Remove personal items from service areas',
      'Promptly communicate any service concerns or special requirements',
    ],
  },
  {
    id: 'payment',
    title: 'Payment Terms',
    items: [
      'Payment is due upon completion of service unless otherwise agreed',
      'Recurring services may require advance payment or deposits',
      'Late payments may incur additional fees',
      'Accepted payment methods will be specified on invoices',
    ],
  },
  {
    id: 'cancellation',
    title: 'Cancellation Policy',
    items: [
      '24-hour notice required for service cancellation',
      'Late cancellations may incur a fee',
      'Weather-related cancellations will be rescheduled at no additional cost',
    ],
  },
  {
    id: 'liability',
    title: 'Liability',
    description: 'M.V Landscaping maintains appropriate insurance coverage for our services. However:',
    items: [
      'We are not liable for damage caused by unmarked utilities or irrigation systems',
      'Pre-existing property conditions are not our responsibility',
      'Force majeure events may affect service delivery',
    ],
  },
  {
    id: 'contact',
    title: 'Contact Information',
    description: 'For questions about these Terms of Service, please contact us at:',
    isContact: true,
  },
]

const contactInfo = [
  {
    icon: 'svg-email',
    text: 'mvlandscaping7@gmail.com',
  },
  {
    icon: 'svg-phone',
    text: '(401) 644-0452',
  },
  {
    icon: 'svg-location',
    text: 'Rhode Island Area',
  },
]

// SVG Components
const svgEmail = {
  name: 'svg-email',
  template: `<svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
  </svg>`,
}

const svgPhone = {
  name: 'svg-phone',
  template: `<svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
  </svg>`,
}

const svgLocation = {
  name: 'svg-location',
  template: `<svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>`,
}

// Register components
const components = {
  'svg-email': svgEmail,
  'svg-phone': svgPhone,
  'svg-location': svgLocation,
}

for (const [_name, component] of Object.entries(components)) {
  defineComponent(component)
}

useHead({
  title: 'Terms of Service - M.V Landscaping',
  meta: [
    {
      name: 'description',
      content: 'Terms of Service for M.V Landscaping - Understanding our service agreements, policies, and customer responsibilities.',
    },
  ],
})
</script>

<template>
  <div class="min-h-screen bg-gray-50 dark:bg-gray-900">
    <!-- Header Banner -->
    <div class="bg-gray-900 dark:bg-gray-800 text-white py-12">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 class="text-4xl font-bold mb-4 text-white">
          {{ t('terms.title') }}
        </h1>
        <p class="text-gray-400">
          {{ t('terms.lastUpdated') }}: {{ new Date().toLocaleDateString() }}
        </p>
      </div>
    </div>

    <!-- Content -->
    <div class="max-w-4xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
      <div class="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-8">
        <div class="prose prose-lg dark:prose-invert max-w-none">
          <!-- Table of Contents -->
          <div class="mb-12 p-6 bg-gray-50 dark:bg-gray-700 rounded-lg">
            <h2 class="text-xl font-semibold text-gray-900 dark:text-white mb-4">
              Table of Contents
            </h2>
            <ul class="space-y-2">
              <li v-for="(section, index) in sections" :key="section.id">
                <a :href="`#${section.id}`" class="text-indigo-600 hover:text-indigo-800 dark:text-indigo-400 dark:hover:text-indigo-300">
                  {{ index + 1 }}. {{ section.title }}
                </a>
              </li>
            </ul>
          </div>

          <section
            v-for="(section, index) in sections"
            :id="section.id"
            :key="section.id"
            class="mb-12 scroll-mt-24"
          >
            <h2 class="text-3xl font-semibold text-gray-900 dark:text-white mb-6">
              {{ index + 1 }}. {{ section.title }}
            </h2>
            <p v-if="section.description" class="text-gray-600 dark:text-gray-300 mb-4">
              {{ section.description }}
            </p>

            <template v-if="section.id === 'services'">
              <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                <ul class="list-disc pl-6 space-y-2 text-gray-600 dark:text-gray-300">
                  <li v-for="(item, i) in section.items.slice(0, 3)" :key="i">
                    {{ item }}
                  </li>
                </ul>
                <ul class="list-disc pl-6 space-y-2 text-gray-600 dark:text-gray-300">
                  <li v-for="(item, i) in section.items.slice(3)" :key="i">
                    {{ item }}
                  </li>
                </ul>
              </div>
            </template>

            <template v-else-if="section.isContact">
              <div class="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg">
                <ul class="space-y-3">
                  <li v-for="(item, i) in contactInfo" :key="i" class="flex items-center">
                    <component :is="item.icon" class="h-6 w-6 mr-3 text-gray-400 dark:text-gray-500" />
                    <span class="text-gray-600 dark:text-gray-300">{{ item.text }}</span>
                  </li>
                </ul>
              </div>
            </template>

            <template v-else-if="section.items">
              <div class="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg">
                <ul class="list-disc pl-6 space-y-3 text-gray-600 dark:text-gray-300">
                  <li v-for="(item, i) in section.items" :key="i">
                    {{ item }}
                  </li>
                </ul>
              </div>
            </template>
          </section>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.scroll-mt-24 {
  scroll-margin-top: 6rem;
}

@media (prefers-color-scheme: dark) {
  .prose {
    --tw-prose-body: theme('colors.gray.300');
    --tw-prose-headings: theme('colors.white');
    --tw-prose-links: theme('colors.indigo.400');
    --tw-prose-bold: theme('colors.white');
    --tw-prose-counters: theme('colors.gray.400');
    --tw-prose-bullets: theme('colors.gray.400');
    --tw-prose-quotes: theme('colors.gray.300');
    --tw-prose-quote-borders: theme('colors.gray.700');
    --tw-prose-captions: theme('colors.gray.400');
    --tw-prose-code: theme('colors.white');
    --tw-prose-pre-code: theme('colors.gray.300');
    --tw-prose-pre-bg: theme('colors.gray.800');
    --tw-prose-hr: theme('colors.gray.700');
  }
}
</style>
