<!-- pages/privacy.vue -->
<script setup>
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

const sections = [
  {
    id: 'collect',
    title: 'Information We Collect',
    description: 'At M.V Landscaping, we collect the following types of information:',
    items: [
      'Contact information (name, email address, phone number, address)',
      'Property details relevant to landscaping services',
      'Service preferences and requirements',
      'Photos of your property (with your permission)',
    ],
    hasBackground: false,
  },
  {
    id: 'use',
    title: 'How We Use Your Information',
    description: 'We use the collected information to:',
    items: [
      'Provide and improve our landscaping services',
      'Communicate about appointments and service updates',
      'Send quotes and invoices',
      'Respond to your inquiries and requests',
      'Maintain and improve our services',
    ],
    hasBackground: false,
  },
  {
    id: 'share',
    title: 'Information Sharing',
    description: 'We do not sell, trade, or otherwise transfer your personal information to outside parties. This does not include trusted third parties who assist us in operating our business, such as:',
    items: [
      'Payment processing services',
      'Communication tools',
      'Business management software',
    ],
    hasBackground: false,
  },
  {
    id: 'security',
    title: 'Data Security',
    description: 'We implement appropriate security measures to protect your personal information. However, no method of transmission over the internet or electronic storage is 100% secure.',
    hasBackground: false,
  },
  {
    id: 'contact',
    title: 'Contact Information',
    description: 'For any questions about this Privacy Policy, please contact us at:',
    isContact: true,
    hasBackground: true,
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
  title: 'Privacy Policy - M.V Landscaping',
  meta: [
    {
      name: 'description',
      content: 'Privacy Policy for M.V Landscaping services - Learn how we collect, use, and protect your personal information.',
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
          {{ t('privacy.title') }}
        </h1>
        <p class="text-gray-400">
          {{ t('privacy.lastUpdated') }}: {{ new Date().toLocaleDateString() }}
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
            <div v-if="section.content" :class="{ 'bg-gray-50 dark:bg-gray-700 p-6 rounded-lg': section.hasBackground }">
              <ul
                class="space-y-2"
                :class="[
                  section.isContact ? 'list-none' : 'list-disc pl-6',
                  { 'text-gray-600 dark:text-gray-300': !section.isContact },
                ]"
              >
                <template v-if="section.isContact">
                  <li v-for="(item, i) in contactInfo" :key="i" class="flex items-center">
                    <component :is="item.icon" class="h-6 w-6 mr-3 text-gray-400 dark:text-gray-500" />
                    <span class="text-gray-600 dark:text-gray-300">{{ item.text }}</span>
                  </li>
                </template>
                <template v-else>
                  <li v-for="(item, i) in section.items" :key="i">
                    {{ item }}
                  </li>
                </template>
              </ul>
            </div>
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
