<template>
  <section class="py-16">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-12">
        <h2 class="text-3xl font-bold mb-4 text-content dark:text-content-dark">
          {{ title }}
        </h2>
        <p class="text-lg text-secondary-400 dark:text-dark-secondary-400">
          {{ description }}
        </p>
      </div>

      <div class="overflow-x-auto">
        <table class="w-full border-collapse">
          <thead>
            <tr class="bg-background-secondary dark:bg-background-secondary-dark">
              <th class="px-6 py-4 text-left text-lg font-semibold text-content dark:text-content-dark border-b border-secondary-100 dark:border-dark-secondary-100">
                {{ featureColumnTitle }}
              </th>
              <th
                v-for="(plan, index) in plans"
                :key="index"
                class="px-6 py-4 text-center text-lg font-semibold text-content dark:text-content-dark border-b border-secondary-100 dark:border-dark-secondary-100"
              >
                {{ plan.name }}
              </th>
            </tr>
          </thead>
          <tbody>
            <tr
              v-for="(feature, featureIndex) in features"
              :key="featureIndex"
              class="border-b border-secondary-100 dark:border-dark-secondary-100"
            >
              <td class="px-6 py-4 text-content dark:text-content-dark">
                {{ feature.name }}
              </td>
              <td
                v-for="(plan, planIndex) in plans"
                :key="planIndex"
                class="px-6 py-4 text-center"
              >
                <Icon
                  v-if="feature.availability[planIndex]"
                  name="mdi:check-circle"
                  class="w-6 h-6 text-primary dark:text-primary mx-auto"
                />
                <Icon
                  v-else
                  name="mdi:close-circle"
                  class="w-6 h-6 text-secondary-400 dark:text-dark-secondary-400 mx-auto"
                />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </section>
</template>

<script setup>
defineProps({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  featureColumnTitle: {
    type: String,
    default: 'Feature',
  },
  plans: {
    type: Array,
    required: true,
  },
  features: {
    type: Array,
    required: true,
  },
});
</script> 