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

      <!-- Main Content: Image and Features -->
      <div class="flex flex-col lg:flex-row lg:items-center lg:space-x-12">
        <!-- Image Section -->
        <div class="flex-shrink-0 mb-10 lg:mb-0 lg:w-1/2">
          <img
            :src="image.src"
            :alt="image.alt"
            class="mx-auto w-full max-w-xl rounded-xl shadow-lg dark:shadow-lg dark:shadow-black/40"
            :width="image.width"
            :height="image.height"
          />
        </div>

        <!-- Features Grid -->
        <ul class="grid grid-cols-1 sm:grid-cols-2 gap-8 w-full lg:w-1/2">
          <li
            v-for="(feature, idx) in features"
            :key="idx"
            class="flex flex-col items-center text-center bg-background-secondary dark:bg-background-secondary-dark border border-secondary-100 dark:border-dark-secondary-100 rounded-lg p-6 shadow-lg hover:shadow-xl dark:shadow-lg dark:hover:shadow-xl transition"
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
    </div>
  </section>
</template>

<script setup>
// Props for the feature section, matching the JSON structure
const props = defineProps({
  tagline: String,
  heading: String,
  description: String,
  image: Object,
  features: Array,
});
</script>

<!--
Component: FeatureSectionCenterAssigned
- Modern, clean layout
- Responsive image and features grid
- Accessible icons
- Uses TailwindCSS best practices
-->
