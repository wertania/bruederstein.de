<template>
  <section class="py-16">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Header Section -->
      <div class="text-center mb-12">
        <p class="text-base font-semibold text-primary dark:text-primary">
          {{ tagline }}
        </p>
        <h2
          class="mt-2 text-4xl font-extrabold text-content dark:text-content-dark"
        >
          {{ heading }}
        </h2>
        <p class="mt-4 text-lg text-secondary-400 dark:text-dark-secondary-400">
          {{ description }}
        </p>
      </div>

      <!-- Full-width Image Section -->
      <div class="w-full mb-20 flex justify-center">
        <img
          :src="image.src"
          :alt="image.alt"
          class="w-full rounded-2xl object-contain"
          :width="image.width"
          :height="image.height"
          style="max-height: 680px; margin: 0 auto"
        />
      </div>

      <!-- Features Grid: 3 columns on md+ screens, 1 column on mobile -->
      <ul class="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
        <li
          v-for="(feature, idx) in features"
          :key="idx"
          class="flex flex-col items-center text-center border border-secondary-100 dark:border-dark-secondary-100 rounded-lg p-6 shadow-lg hover:shadow-xl dark:shadow-lg dark:hover:shadow-xl transition"
        >
          <!-- Icon with accessible label -->
          <span
            class="mb-4 flex items-center justify-center rounded-full bg-primary/10 dark:bg-primary/20 w-16 h-16"
          >
            <Icon
              :name="feature.icon"
              class="w-10 h-10 text-primary dark:text-primary"
              aria-hidden="true"
            />
          </span>
          <h3
            class="text-lg font-semibold text-content dark:text-content-dark mb-2"
          >
            {{ feature.title }}
          </h3>
          <p class="text-secondary-400 dark:text-dark-secondary-400 text-base">
            {{ feature.description }}
          </p>
        </li>
      </ul>
    </div>
  </section>
</template>

<script setup>
// Props for the roadmap feature section
const props = defineProps({
  tagline: String,
  heading: String,
  description: String,
  image: Object,
  features: Array,
});
</script>
