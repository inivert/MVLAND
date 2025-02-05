<script setup>
// Ensure color mode is properly initialized
useHead({
  htmlAttrs: {
    class: 'h-full',
  },
  bodyAttrs: {
    class: 'h-full antialiased',
  },
})
</script>

<template>
  <div :class="{ 'dark': $colorMode.value === 'dark' }">
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>
