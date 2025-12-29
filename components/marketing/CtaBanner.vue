<template>
  <section class="py-12 bg-white dark:bg-background-dark">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <h2 class="text-3xl font-extrabold text-content dark:text-content-dark">
        {{ headline }}
      </h2>
      <p class="mt-4 text-lg text-content dark:text-content-dark">
        {{ description }}
      </p>
      <div v-if="ctaLabel || cta" class="mt-8 flex justify-center">
        <a
          :href="ctaUrl || cta?.url"
          class="rounded-full bg-gradient-to-br from-white/90 via-white/80 to-white/70 backdrop-blur-sm px-8 py-3.5 text-lg font-semibold text-gray-900 shadow-2xl hover:shadow-primary/50 hover:from-white hover:via-white hover:to-white/90 transition-all duration-300 hover:scale-105 border border-gray-200"
          style="box-shadow: 0 8px 32px 0 rgba(141, 63, 87, 0.2), inset 0 1px 0 0 rgba(255, 255, 255, 0.5);"
        >
          {{ ctaLabel || cta?.label }}
        </a>
      </div>
    </div>
  </section>
</template>

<script setup>
// Props for the CTA banner, matching the JSON structure
const props = defineProps({
  headline: String,
  description: String,
  cta: Object,
  ctaLabel: String,
  ctaUrl: String,
});
</script>
