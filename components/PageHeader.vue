<script setup lang="ts">
defineProps<{ eyebrow?: string; title: string; lead?: string }>();
</script>

<template>
  <header class="wrap pb-12 pt-16 text-center sm:pb-16 sm:pt-24">
    <p v-if="eyebrow" class="eyebrow mb-4">{{ eyebrow }}</p>
    <h1 class="font-serif text-4xl font-semibold leading-tight text-ink sm:text-5xl">
      {{ title }}
    </h1>
    <div class="ornament mt-6" aria-hidden="true"><span /></div>
    <p v-if="lead" class="mx-auto mt-6 max-w-2xl text-lg italic text-ink-soft sm:text-xl">
      {{ lead }}
    </p>
  </header>
</template>
