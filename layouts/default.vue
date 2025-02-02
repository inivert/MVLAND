<script setup>
import TheFooter from '~/components/TheFooter.vue'
import TheNavbar from '~/components/TheNavbar.vue'
</script>

<template>
  <div>
    <TheNavbar />
    <main>
      <slot />
    </main>
    <TheFooter />
  </div>
</template>
