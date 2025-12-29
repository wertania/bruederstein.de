<template>
  <section class="py-16 bg-background-secondary dark:bg-background-secondary-dark">
    <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-12">
        <h2 class="text-3xl font-bold mb-4 text-content dark:text-content-dark">
          {{ title }}
        </h2>
        <p class="text-lg text-secondary-400 dark:text-dark-secondary-400">
          {{ description }}
        </p>
      </div>

      <div class="space-y-4">
        <div
          v-for="(item, index) in faqs"
          :key="index"
          class="border border-secondary-100 dark:border-dark-secondary-100 rounded-lg overflow-hidden"
        >
          <button
            class="w-full px-6 py-4 text-left bg-background-secondary dark:bg-background-secondary-dark hover:bg-background-tertiary dark:hover:bg-background-tertiary-dark transition-colors duration-200"
            @click="toggleFAQ(index)"
          >
            <div class="flex justify-between items-center">
              <h3 class="text-lg font-medium text-content dark:text-content-dark">
                {{ item.question }}
              </h3>
              <Icon
                :name="openFaqs[index] ? 'mdi:chevron-up' : 'mdi:chevron-down'"
                class="w-6 h-6 text-primary dark:text-primary"
              />
            </div>
          </button>
          <div
            v-show="openFaqs[index]"
            class="px-6 py-4 bg-background dark:bg-background-dark"
          >
            <p class="text-secondary-400 dark:text-dark-secondary-400">
              {{ item.answer }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue';

const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  faqs: {
    type: Array,
    required: true,
  },
});

const openFaqs = ref(props.faqs.map(() => false));

const toggleFAQ = (index) => {
  openFaqs.value[index] = !openFaqs.value[index];
};
</script> 