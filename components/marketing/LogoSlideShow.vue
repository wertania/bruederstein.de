<template>
  <div class="logo-slideshow-container">
    <div class="text-center mb-8">
      <h2
        v-if="title && title.length > 0"
        class="text-2xl md:text-3xl font-bold text-gray-800 dark:text-gray-100"
      >
        {{ title }}
      </h2>
    </div>

    <div class="logo-slideshow-wrapper">
      <div class="logo-slideshow-track">
        <!-- First set of logos -->
        <div
          v-for="(logo, index) in logos"
          :key="`logo-1-${index}`"
          class="logo-item"
        >
          <img :src="logo.src" :alt="logo.alt" class="logo-image" />
        </div>
        <!-- Duplicate set for seamless loop -->
        <div
          v-for="(logo, index) in logos"
          :key="`logo-2-${index}`"
          class="logo-item"
        >
          <img :src="logo.src" :alt="logo.alt" class="logo-image" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
// Define props
const props = defineProps({
  title: {
    type: String,
    default: "",
  },
  logos: {
    type: Array,
    required: true,
    validator: (logos) => {
      return logos.every((logo) => logo.src && logo.alt);
    },
  },
});
</script>

<style scoped>
.logo-slideshow-container {
  @apply py-16 bg-gray-50 dark:bg-gray-900;
}

.logo-slideshow-wrapper {
  @apply overflow-hidden relative;
  mask-image: linear-gradient(
    to right,
    transparent 0%,
    black 10%,
    black 90%,
    transparent 100%
  );
  -webkit-mask-image: linear-gradient(
    to right,
    transparent 0%,
    black 10%,
    black 90%,
    transparent 100%
  );
}

.logo-slideshow-track {
  @apply flex items-center;
  animation: slide 30s linear infinite;
  width: fit-content;
}

.logo-item {
  @apply flex-shrink-0 mx-8;
  min-width: 120px;
  max-width: 160px;
}

.logo-image {
  @apply w-full h-auto max-h-12 object-contain opacity-60 hover:opacity-100 transition-opacity duration-300;
  filter: grayscale(100%);
}

.logo-image:hover {
  filter: grayscale(0%);
}

@keyframes slide {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%);
  }
}

/* Pause animation on hover for better UX */
.logo-slideshow-wrapper:hover .logo-slideshow-track {
  animation-play-state: paused;
}

/* Dark mode adjustments */
@media (prefers-color-scheme: dark) {
  .logo-image {
    @apply opacity-50;
    filter: grayscale(100%) brightness(0) invert(1);
  }

  .logo-image:hover {
    @apply opacity-90;
    filter: grayscale(0%) brightness(1) invert(0);
  }
}
</style>
