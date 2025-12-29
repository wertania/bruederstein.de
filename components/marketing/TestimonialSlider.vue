<template>
  <section class="relative isolate" aria-label="Customer testimonials">
    <!-- Background Gradients -->
    <div
      class="absolute inset-y-0 left-0 -z-10 transform-gpu overflow-hidden blur-3xl"
      aria-hidden="true"
    >
      <div
        class="relative top-[50%] left-[0] aspect-[1155/678] w-[20rem] -translate-y-1/2 bg-gradient-to-tr from-highlight to-highlight-secondary opacity-50 sm:w-[30rem]"
        style="
          clip-path: polygon(
            74.1% 44.1%,
            100% 61.6%,
            97.5% 26.9%,
            85.5% 0.1%,
            80.7% 2%,
            72.5% 32.5%,
            60.2% 62.4%,
            52.4% 68.1%,
            47.5% 58.3%,
            45.2% 34.5%,
            27.5% 76.7%,
            0.1% 64.9%,
            17.9% 100%,
            27.6% 76.8%,
            76.1% 97.7%,
            74.1% 44.1%
          );
        "
      ></div>
    </div>
    <div
      class="absolute inset-y-0 right-0 -z-10 transform-gpu overflow-hidden blur-3xl"
      aria-hidden="true"
    >
      <div
        class="relative top-[50%] right-[0] aspect-[1155/678] w-[20rem] -translate-y-1/2 bg-gradient-to-tr from-highlight to-highlight-secondary opacity-50 sm:w-[30rem]"
        style="
          clip-path: polygon(
            74.1% 44.1%,
            100% 61.6%,
            97.5% 26.9%,
            85.5% 0.1%,
            80.7% 2%,
            72.5% 32.5%,
            60.2% 62.4%,
            52.4% 68.1%,
            47.5% 58.3%,
            45.2% 34.5%,
            27.5% 76.7%,
            0.1% 64.9%,
            17.9% 100%,
            27.6% 76.8%,
            76.1% 97.7%,
            74.1% 44.1%
          );
        "
      ></div>
    </div>

    <!-- Slider Content -->
    <div class="w-full py-16 sm:py-24">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-12 sm:mb-16">
          <h2
            class="text-2xl sm:text-3xl font-semibold tracking-tight text-content dark:text-content-dark"
          >
            {{ title }}
          </h2>
        </div>

                <!-- Testimonials Slider -->
        <div 
          ref="sliderContainer"
          class="testimonials-slider relative overflow-hidden rounded-2xl py-8"
          @mouseenter="pauseAnimation"
          @mouseleave="resumeAnimation"
          role="region"
          aria-label="Testimonials carousel"
        >
          <div
            ref="sliderTrack"
            class="testimonials-track flex gap-4 sm:gap-6 px-4 sm:px-6"
            :class="{ paused: isPaused }"
            :style="{ transform: `translateX(${translateX}px)` }"
          >
            <!-- Original testimonials -->
            <div
              v-for="(testimonial, index) in testimonials"
              :key="`original-${index}`"
              class="testimonial-card flex-shrink-0 w-80 sm:w-96"
              @mouseenter="highlightTestimonial(index)"
              @mouseleave="unhighlightTestimonial"
              :class="{ highlighted: highlightedIndex === index }"
              role="article"
              :aria-label="`Testimonial from ${testimonial.author}`"
            >
              <div
                class="h-full p-4 sm:p-6 bg-white/90 dark:bg-black/50 backdrop-blur-sm rounded-xl shadow-lg border border-gray-200/50 dark:border-gray-700/50 transition-all duration-300 hover:shadow-xl hover:scale-102"
              >
                <!-- Rating Stars -->
                <div class="flex justify-end mb-4">
                  <div
                    class="flex items-center gap-1"
                    role="img"
                    :aria-label="`${testimonial.rating} out of 5 stars`"
                  >
                    <svg
                      v-for="star in 5"
                      :key="star"
                      class="w-5 h-5 transition-opacity duration-200"
                      :class="
                        star <= testimonial.rating
                          ? 'text-yellow-400 opacity-100'
                          : 'text-gray-300 dark:text-gray-600 opacity-40'
                      "
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      aria-hidden="true"
                    >
                      <path
                        d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                      />
                    </svg>
                  </div>
                </div>

                <!-- Quote -->
                <div class="flex-1 mb-6">
                  <blockquote
                    class="text-base sm:text-lg italic text-content dark:text-content-dark leading-relaxed"
                  >
                    "{{ testimonial.quote }}"
                  </blockquote>
                </div>

                <!-- Author Info -->
                <footer
                  class="border-t border-gray-200/50 dark:border-gray-700/50 pt-4"
                >
                  <cite class="not-italic">
                    <div
                      class="text-highlight dark:text-white text-base sm:text-lg font-semibold"
                    >
                      {{ testimonial.author }}
                    </div>
                    <div
                      class="text-content-secondary dark:text-gray-300 text-sm sm:text-base"
                    >
                      {{ testimonial.role }}
                    </div>
                  </cite>
                </footer>
              </div>
            </div>

            <!-- Duplicated testimonials for seamless loop -->
            <div
              v-for="(testimonial, index) in testimonials"
              :key="`duplicate-${index}`"
              class="testimonial-card flex-shrink-0 w-80 sm:w-96"
              @mouseenter="highlightTestimonial(index)"
              @mouseleave="unhighlightTestimonial"
              :class="{ highlighted: highlightedIndex === index }"
              role="article"
              :aria-label="`Testimonial from ${testimonial.author}`"
            >
              <div
                class="h-full p-4 sm:p-6 bg-white/90 dark:bg-black/50 backdrop-blur-sm rounded-xl shadow-lg border border-gray-200/50 dark:border-gray-700/50 transition-all duration-300 hover:shadow-xl hover:scale-102"
              >
                <!-- Rating Stars -->
                <div class="flex justify-end mb-4">
                  <div
                    class="flex items-center gap-1"
                    role="img"
                    :aria-label="`${testimonial.rating} out of 5 stars`"
                  >
                    <svg
                      v-for="star in 5"
                      :key="star"
                      class="w-5 h-5 transition-opacity duration-200"
                      :class="
                        star <= testimonial.rating
                          ? 'text-yellow-400 opacity-100'
                          : 'text-gray-300 dark:text-gray-600 opacity-40'
                      "
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      aria-hidden="true"
                    >
                      <path
                        d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                      />
                    </svg>
                  </div>
                </div>

                <!-- Quote -->
                <div class="flex-1 mb-6">
                  <blockquote
                    class="text-base sm:text-lg italic text-content dark:text-content-dark leading-relaxed"
                  >
                    "{{ testimonial.quote }}"
                  </blockquote>
                </div>

                <!-- Author Info -->
                <footer
                  class="border-t border-gray-200/50 dark:border-gray-700/50 pt-4"
                >
                  <cite class="not-italic">
                    <div
                      class="text-highlight dark:text-white text-base sm:text-lg font-semibold"
                    >
                      {{ testimonial.author }}
                    </div>
                    <div
                      class="text-content-secondary dark:text-gray-300 text-sm sm:text-base"
                    >
                      {{ testimonial.role }}
                    </div>
                  </cite>
                </footer>
              </div>
            </div>
          </div>
        </div>

        <!-- Navigation Indicators -->
        <div
          class="flex justify-center gap-2 mt-8"
          role="tablist"
          aria-label="Testimonial navigation"
        >
          <button
            v-for="(_, index) in testimonials"
            :key="`indicator-${index}`"
            type="button"
            class="w-3 h-3 rounded-full transition-all duration-300 hover:scale-125 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 dark:focus:ring-offset-gray-900"
            :class="getIndicatorClass(index)"
            :aria-label="`View testimonial ${index + 1}`"
            :aria-selected="highlightedIndex === index"
            role="tab"
            @click="jumpToTestimonial(index)"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted, computed, nextTick } from "vue";

// Types
interface Testimonial {
  quote: string;
  author: string;
  role: string;
  rating: number;
}

// Props
const props = defineProps<{
  title: string;
  testimonials: Testimonial[];
}>();

// Reactive state
const sliderContainer = ref<HTMLElement>();
const sliderTrack = ref<HTMLElement>();
const translateX = ref(0);
const isPaused = ref(false);
const highlightedIndex = ref<number | null>(null);
const animationId = ref<number>();
const cardWidth = ref(384 + 48); // Default card width (96 * 4 = 384px) + padding
const gap = ref(24); // Default gap (6 * 4 = 24px)

// Animation settings
const ANIMATION_SPEED = 0.5; // pixels per frame
const RESET_THRESHOLD_MULTIPLIER = 0.5;

// Computed
const totalWidth = computed(() => {
  return props.testimonials.length * (cardWidth.value + gap.value);
});

const resetThreshold = computed(() => {
  return -totalWidth.value * RESET_THRESHOLD_MULTIPLIER;
});

// Methods
const updateDimensions = () => {
  if (typeof window !== "undefined") {
    // Update card width and gap based on screen size
    if (window.innerWidth >= 640) {
      // sm breakpoint
      cardWidth.value = 384 + 48; // w-96 + padding
      gap.value = 24; // gap-6
    } else {
      cardWidth.value = 320 + 32; // w-80 + padding
      gap.value = 16; // gap-4
    }
  }
};

const animate = () => {
  if (!isPaused.value) {
    translateX.value -= ANIMATION_SPEED;

    // Reset position for seamless loop
    if (translateX.value <= resetThreshold.value) {
      translateX.value = 0;
    }
  }

  animationId.value = requestAnimationFrame(animate);
};

const pauseAnimation = () => {
  isPaused.value = true;
};

const resumeAnimation = () => {
  isPaused.value = false;
  highlightedIndex.value = null;
};

const highlightTestimonial = (index: number) => {
  highlightedIndex.value = index;
};

const unhighlightTestimonial = () => {
  // Don't unhighlight immediately to prevent flickering
  setTimeout(() => {
    if (isPaused.value) return;
    highlightedIndex.value = null;
  }, 100);
};

const jumpToTestimonial = (index: number) => {
  const targetPosition = -(index * (cardWidth.value + gap.value));
  translateX.value = targetPosition;
  highlightedIndex.value = index;
  isPaused.value = true;

  // Resume animation after a delay
  setTimeout(() => {
    isPaused.value = false;
    highlightedIndex.value = null;
  }, 3000);
};

const getIndicatorClass = (index: number) => {
  const isActive = highlightedIndex.value === index;
  return isActive
    ? "bg-primary dark:bg-accent scale-125"
    : "bg-gray-400 dark:bg-gray-600 hover:bg-gray-500 dark:hover:bg-gray-500";
};

const handleResize = () => {
  updateDimensions();
};

const handleVisibilityChange = () => {
  if (document.hidden) {
    isPaused.value = true;
  } else {
    isPaused.value = false;
  }
};

const handleReducedMotion = () => {
  const prefersReducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  ).matches;
  if (prefersReducedMotion) {
    isPaused.value = true;
  }
};

// Lifecycle
onMounted(async () => {
  await nextTick();
  updateDimensions();

  // Start animation
  animationId.value = requestAnimationFrame(animate);

  // Event listeners
  window.addEventListener("resize", handleResize);
  document.addEventListener("visibilitychange", handleVisibilityChange);

  // Respect user's motion preferences
  if (typeof window !== "undefined") {
    handleReducedMotion();
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    mediaQuery.addEventListener("change", handleReducedMotion);
  }
});

onUnmounted(() => {
  if (animationId.value) {
    cancelAnimationFrame(animationId.value);
  }

  window.removeEventListener("resize", handleResize);
  document.removeEventListener("visibilitychange", handleVisibilityChange);

  if (typeof window !== "undefined") {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    mediaQuery.removeEventListener("change", handleReducedMotion);
  }
});
</script>

<style scoped>
.testimonials-slider {
  min-height: 450px;
  @apply sm:min-h-96;
}

.testimonials-track {
  will-change: transform;
  height: 100%;
}

.testimonials-track.paused {
  animation-play-state: paused;
}

.testimonial-card {
  height: auto;
  min-height: 380px;
  @apply sm:min-h-96;
}

.testimonial-card.highlighted .testimonial-content {
  @apply shadow-2xl;
}

/* Smooth scrolling for reduced motion users */
@media (prefers-reduced-motion: reduce) {
  .testimonials-track {
    animation: none !important;
  }

  .testimonial-card {
    transition: none !important;
  }
}

/* Performance optimizations */
.testimonials-track {
  backface-visibility: hidden;
  perspective: 1000px;
}

.testimonial-card {
  backface-visibility: hidden;
  transform: translateZ(0);
}

/* Focus styles for accessibility */
.testimonial-card:focus-within {
  @apply ring-2 ring-primary focus:ring-offset-2 dark:focus:ring-offset-gray-900;
}

/* High contrast mode support */
@media (prefers-contrast: high) {
  .testimonial-card {
    @apply border-2 border-gray-900 dark:border-white;
  }
}
</style>
