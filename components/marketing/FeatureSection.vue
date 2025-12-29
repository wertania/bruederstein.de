<template>
  <div class="py-24 sm:py-32">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <div class="mx-auto max-w-2xl sm:text-center">
        <h2
          class="text-base/7 font-semibold text-content dark:text-content-dark"
        >
          {{ tagline }}
        </h2>
        <p
          class="mt-2 text-pretty text-4xl font-semibold tracking-tight text-content dark:text-content-dark sm:text-balance sm:text-5xl"
        >
          {{ heading }}
        </p>
        <p
          class="mt-6 text-lg/8 text-content dark:text-content-dark"
        >
          {{ description }}
        </p>
      </div>
    </div>

    <div v-if="image" class="relative overflow-hidden pt-16">
      <div class="mx-auto max-w-7xl px-6 lg:px-8">
        <img
          :src="image.src"
          :alt="image.alt"
          class="mb-[-12%] rounded-xl shadow-2xl ring-1 ring-gray-900/10"
          :width="image.width"
          :height="image.height"
        />
        <div class="relative" aria-hidden="true">
          <div
            class="absolute -inset-x-20 bottom-0 bg-gradient-to-t from-background-secondary dark:from-background-secondary-dark pt-[7%]"
          ></div>
        </div>
      </div>
    </div>

    <div
      v-if="features"
      class="mx-auto mt-16 max-w-7xl px-6 sm:mt-20 md:mt-24 lg:px-8"
    >
      <dl
        class="mx-auto grid max-w-2xl grid-cols-1 gap-x-6 gap-y-10 text-base/7 text-content dark:text-content-dark sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:gap-x-8 lg:gap-y-16"
      >
        <div
          v-for="feature in features"
          :key="feature.title"
          class="relative pl-9"
        >
          <dt class="font-semibold text-content dark:text-content-dark">
            <span class="inline-flex items-center">
              <div
                class="flex size-6 items-center justify-center text-highlight dark:text-highlight-dark"
              >
                <Icon :name="feature.icon" class="size-6" />
              </div>
              <span class="ml-2 text-content dark:text-content-dark">{{
                feature.title
              }}</span>
            </span>
          </dt>
          <dd
            class="block mt-2 text-content dark:text-content-dark"
          >
            {{ feature.description }}
          </dd>
        </div>
      </dl>
    </div>
  </div>
</template>

<script setup lang="ts">
interface Feature {
  icon: string;
  title: string;
  description: string;
}

interface Image {
  src: string;
  alt: string;
  width?: number;
  height?: number;
}

defineProps<{
  tagline: string;
  heading: string;
  description: string;
  image?: Image;
  features?: Feature[];
}>();
</script>
