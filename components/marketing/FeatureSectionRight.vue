<template>
  <section
    class="py-16 bg-background-secondary dark:bg-background-secondary-dark"
  >
    <div
      class="container mx-auto flex flex-col md:flex-row items-center gap-10 px-4 py-8 border border-gray-100 dark:border-gray-700 rounded-xl shadow-sm hover:shadow-md dark:shadow-lg dark:hover:shadow-xl transition-all duration-300"
    >
      <!-- Text content -->
      <div class="md:w-1/2 w-full order-2 md:order-1">
        <p
          class="text-primary dark:text-primary font-semibold mb-2"
        >
          {{ tagline }}
        </p>
        <h2 class="text-3xl font-bold mb-4 text-content dark:text-content-dark">
          {{ heading }}
        </h2>
        <p class="text-lg text-content dark:text-content-dark">
          {{ description }}
        </p>
      </div>
      <!-- Image on the right -->
      <div
        v-if="image"
        class="md:w-1/2 w-full flex justify-center order-1 md:order-2"
      >
        <img
          :src="image.src"
          :alt="image.alt"
          :width="image.width"
          :height="image.height"
          class="rounded-lg object-cover"
        />
      </div>
    </div>
  </section>
</template>

<script setup>
// Props for the right-aligned feature section
const props = defineProps({
  tagline: String,
  heading: String,
  description: String,
  image: Object, // { src, alt, width, height }
});
</script>
