<template>
  <section class="py-12">
    <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
      <ul class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <li
          v-for="(feature, idx) in features"
          :key="idx"
          class="flex items-start p-6 bg-background-secondary dark:bg-background-secondary-dark rounded-xl shadow-lg hover:shadow-xl dark:shadow-lg dark:hover:shadow-xl transition-all duration-300 border border-secondary-100 dark:border-dark-secondary-100"
        >
          <!-- Icon with proper color contrast -->
          <span
            class="flex-shrink-0 mr-4 flex items-center justify-center rounded-lg bg-primary dark:bg-primary w-12 h-12"
          >
            <Icon
              :name="typeof feature === 'object' ? feature.icon || icon : icon"
              class="w-6 h-6 text-white dark:text-white"
              aria-hidden="true"
            />
          </span>
          <!-- Feature text -->
          <span
            class="text-base font-medium text-content dark:text-content-dark"
          >
            {{ typeof feature === "object" ? feature.text : feature }}
          </span>
        </li>
      </ul>
    </div>
  </section>
</template>

<script setup>
const props = defineProps({
  features: {
    type: Array,
    required: true,
  },
  icon: {
    type: String,
    default: "mdi:check-circle-outline",
  },
});
</script>
