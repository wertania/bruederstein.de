<template>
  <section
    class="relative py-20 bg-background dark:bg-background-dark"
  >
    <!-- Hero content container -->
    <div class="container mx-auto px-4 text-center max-w-2xl">
      <p class="text-lg font-semibold mb-2 bg-gradient-to-r from-[#D4AF37] via-[#9F8162] to-[#CD7F32] bg-clip-text text-transparent">{{ tagline }}</p>
      <h1 class="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-[#D4AF37] via-[#9F8162] to-[#CD7F32] bg-clip-text text-transparent">{{ heading }}</h1>
      <p class="text-xl text-content dark:text-content-dark opacity-90">{{ description }}</p>
    </div>
  </section>
</template>

<script setup>
// Props for the hero section
const props = defineProps({
  tagline: String,
  heading: String,
  description: String,
});
</script>
