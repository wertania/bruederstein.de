<template>
  <section class="py-24 bg-background dark:bg-background-dark">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <!-- Headline -->
      <div class="mx-auto max-w-3xl text-center mb-16">
        <h2
          class="text-3xl font-bold tracking-tight text-content dark:text-content-dark sm:text-4xl"
        >
          {{ title }}
        </h2>
        <p
          v-if="description"
          class="mt-6 text-lg leading-8 text-content dark:text-content-dark"
        >
          {{ description }}
        </p>
      </div>

      <!-- Grid Layout -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <!-- Feature Card 1 -->
        <div
          class="bg-background-secondary dark:bg-background-secondary-dark rounded-2xl p-8 border border-secondary-100 dark:border-dark-secondary-100 hover:shadow-xl transition-all duration-300"
        >
          <h3
            class="text-xl font-bold text-primary dark:text-primary mb-4 uppercase tracking-wide"
          >
            {{ features[0]?.title }}
          </h3>
          <p class="text-content dark:text-content-dark leading-relaxed">
            {{ features[0]?.description }}
          </p>
        </div>

        <!-- Image/Video Card 2 -->
        <div
          v-if="features[1]?.image || features[1]?.video"
          class="rounded-2xl overflow-hidden border border-secondary-100 dark:border-dark-secondary-100 hover:shadow-xl transition-all duration-300"
        >
          <video
            v-if="features[1]?.video"
            class="w-full h-full object-cover"
            autoplay
            muted
            loop
            playsinline
          >
            <source :src="features[1].video" type="video/mp4" />
          </video>
          <img
            v-else-if="features[1]?.image"
            :src="features[1].image"
            :alt="features[1].alt || 'Feature Image'"
            class="w-full h-full object-cover"
          />
        </div>

        <!-- Feature Card 3 -->
        <div
          class="bg-background-secondary dark:bg-background-secondary-dark rounded-2xl p-8 border border-secondary-100 dark:border-dark-secondary-100 hover:shadow-xl transition-all duration-300"
        >
          <h3
            class="text-xl font-bold text-primary dark:text-primary mb-4 uppercase tracking-wide"
          >
            {{ features[2]?.title }}
          </h3>
          <p class="text-content dark:text-content-dark leading-relaxed">
            {{ features[2]?.description }}
          </p>
        </div>

        <!-- Image/Video Card 4 -->
        <div
          v-if="features[3]?.image || features[3]?.video"
          class="rounded-2xl overflow-hidden border border-secondary-100 dark:border-dark-secondary-100 hover:shadow-xl transition-all duration-300"
        >
          <video
            v-if="features[3]?.video"
            class="w-full h-full object-cover"
            autoplay
            muted
            loop
            playsinline
          >
            <source :src="features[3].video" type="video/mp4" />
          </video>
          <img
            v-else-if="features[3]?.image"
            :src="features[3].image"
            :alt="features[3].alt || 'Feature Image'"
            class="w-full h-full object-cover"
          />
        </div>

        <!-- Feature Card 5 -->
        <div
          class="bg-background-secondary dark:bg-background-secondary-dark rounded-2xl p-8 border border-secondary-100 dark:border-dark-secondary-100 hover:shadow-xl transition-all duration-300"
        >
          <h3
            class="text-xl font-bold text-primary dark:text-primary mb-4 uppercase tracking-wide"
          >
            {{ features[4]?.title }}
          </h3>
          <p class="text-content dark:text-content-dark leading-relaxed">
            {{ features[4]?.description }}
          </p>
        </div>

        <!-- Image/Video Card 6 -->
        <div
          v-if="features[5]?.image || features[5]?.video"
          class="rounded-2xl overflow-hidden border border-secondary-100 dark:border-dark-secondary-100 hover:shadow-xl transition-all duration-300"
        >
          <video
            v-if="features[5]?.video"
            class="w-full h-full object-cover"
            autoplay
            muted
            loop
            playsinline
          >
            <source :src="features[5].video" type="video/mp4" />
          </video>
          <img
            v-else-if="features[5]?.image"
            :src="features[5].image"
            :alt="features[5].alt || 'Feature Image'"
            class="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
interface Feature {
  title?: string;
  description?: string;
  image?: string;
  video?: string;
  alt?: string;
}

defineProps<{
  title: string;
  description?: string;
  features: Feature[];
}>();
</script>

