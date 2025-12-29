<template>
  <section class="py-8 text-center">
    <h1 class="text-4xl font-bold mb-2 text-content dark:text-content-dark">
      {{ title }}
    </h1>
    <p class="text-lg text-secondary-400 dark:text-dark-secondary-400">
      {{ subtitle }}
    </p>
  </section>
</template>

<script setup>
// Props for the hero section: title and subtitle
const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  subtitle: {
    type: String,
    required: false,
  },
});
</script>
