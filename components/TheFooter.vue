<!-- components/TheFooter.vue -->
<script setup>
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
const currentYear = new Date().getFullYear()

const sectionLinks = [
  { name: t('navigation.home'), href: '#home' },
  { name: t('navigation.services'), href: '#services' },
  { name: t('navigation.work'), href: '#work' },
  { name: t('navigation.testimonials'), href: '#testimonials' },
  { name: t('navigation.contact'), href: '#contact' },
]

const pageLinks = [
  { name: t('footer.privacy'), to: '/privacy' },
  { name: t('footer.terms'), to: '/terms' },
]
</script>

<template>
  <footer class="bg-gray-900 text-gray-400">
    <div class="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <!-- Company Info -->
        <div>
          <h3 class="text-white text-lg font-semibold mb-4">
            M.V Landscaping
          </h3>
          <p class="mb-4">
            {{
              t(
                'footer.description',
                'Transforming outdoor spaces with exceptional landscaping services since 2010.',
              )
            }}
          </p>
          <div class="flex space-x-4">
            <a href="#" class="text-gray-400 hover:text-white transition-colors duration-200">
              <span class="sr-only">Facebook</span>
              <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path
                  fill-rule="evenodd"
                  d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                  clip-rule="evenodd"
                />
              </svg>
            </a>
            <a href="#" class="text-gray-400 hover:text-white transition-colors duration-200">
              <span class="sr-only">Instagram</span>
              <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path
                  fill-rule="evenodd"
                  d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                  clip-rule="evenodd"
                />
              </svg>
            </a>
            <a href="tel:+14016440452" class="text-gray-400 hover:text-white transition-colors duration-200" title="Call us for landscaping services">
              <span class="sr-only">Phone: (401) 644-0452</span>
              <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path
                  d="M20 15.5c-1.25 0-2.45-.2-3.57-.57a1.02 1.02 0 00-1.02.24l-2.2 2.2a15.045 15.045 0 01-6.59-6.59l2.2-2.21a.96.96 0 00.25-1A11.36 11.36 0 018.5 4c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1 0 9.39 7.61 17 17 17 .55 0 1-.45 1-1v-3.5c0-.55-.45-1-1-1zM19 12h2a9 9 0 00-9-9v2c3.87 0 7 3.13 7 7z"
                />
              </svg>
            </a>
          </div>
        </div>

        <!-- Quick Links -->
        <div>
          <h3 class="text-white text-lg font-semibold mb-4">
            {{ t('footer.quickLinks', 'Quick Links') }}
          </h3>
          <ul class="space-y-2">
            <li v-for="link in sectionLinks" :key="link.name">
              <a :href="link.href" class="hover:text-white transition-colors duration-200">
                {{ link.name }}
              </a>
            </li>
            <li v-for="link in pageLinks" :key="link.name">
              <NuxtLink :to="link.to" class="hover:text-white transition-colors duration-200">
                {{ link.name }}
              </NuxtLink>
            </li>
          </ul>
        </div>

        <!-- Contact Info -->
        <div>
          <h3 class="text-white text-lg font-semibold mb-4">
            {{ t('footer.contact') }}
          </h3>
          <ul class="space-y-2">
            <li>
              <a
                href="mailto:mvlandscaping7@gmail.com?subject=Landscaping%20Services%20Inquiry&body=Hello%2C%0A%0AI%20am%20interested%20in%20learning%20more%20about%20your%20landscaping%20services.%20Please%20contact%20me%20with%20more%20information.%0A%0ABest%20regards"
                class="hover:text-white transition-colors duration-200"
                title="Email us for landscaping services"
              >
                mvlandscaping7@gmail.com
              </a>
            </li>
            <li>{{ t('footer.location', 'Rhode Island Area') }}</li>
            <li>{{ t('footer.hours', 'Available Mon-Sat: 8am - 6pm') }}</li>
          </ul>
        </div>
      </div>

      <!-- Bottom Bar -->
      <div class="mt-8 pt-8 border-t border-gray-800">
        <p class="text-center">
          &copy; {{ currentYear }} M.V Landscaping. {{ t('footer.rights') }}
        </p>
      </div>
    </div>
  </footer>
</template>
