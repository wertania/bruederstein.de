<template>
  <section
    class="py-16 bg-background-secondary dark:bg-background-secondary-dark"
  >
    <div
      class="container mx-auto flex flex-col md:flex-row items-center gap-10 px-4 py-8 border border-gray-100 dark:border-dark-secondary-100 rounded-xl shadow-sm hover:shadow-md dark:shadow-lg dark:hover:shadow-xl transition-all duration-300"
    >
      <!-- Optional image on the left -->
      <div v-if="image" class="md:w-1/2 w-full flex justify-center">
        <img
          :src="image.src"
          :alt="image.alt"
          :width="image.width"
          :height="image.height"
          class="rounded-lg object-cover"
        />
      </div>
      <!-- Text content -->
      <div class="md:w-1/2 w-full">
        <p
          class="text-primary-600 font-semibold mb-2 text-content dark:text-content-dark"
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
    </div>
  </section>
</template>

<script setup>
// Props for the left-aligned feature section
const props = defineProps({
  tagline: String,
  heading: String,
  description: String,
  image: Object, // { src, alt, width, height }
});
</script>
