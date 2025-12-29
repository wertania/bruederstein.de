<template>
  <section class="max-w-4xl mx-auto py-12 px-4">
    <h1 class="text-4xl font-bold mb-8 text-center">CUCO Steuer Blog</h1>
    <div class="grid gap-8 md:grid-cols-2">
      <div
        v-for="post in posts"
        :key="post.path"
        class="bg-white rounded-lg shadow-md p-6 flex flex-col justify-between hover:shadow-xl transition-shadow"
      >
        <div>
          <h2 class="text-2xl font-semibold mb-2">{{ post.title }}</h2>
          <p class="text-gray-500 text-sm mb-4">
            {{ formatDate(post.date) }} &middot; {{ post.tags.join(", ") }}
          </p>
          <p class="mb-4">{{ post.description }}</p>
        </div>
        <NuxtLink
          :to="post.path"
          class="text-primary-600 font-bold hover:underline mt-auto"
          >Weiterlesen →
        </NuxtLink>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const { data: posts } = await useAsyncData("blog", () =>
  queryCollection("blog").all()
);

interface BlogPost {
  title: string;
  slug: string;
  date: string;
  author: string;
  excerpt: string;
  content: string;
}

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString("de-DE", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}
</script>

<style scoped>
.text-primary-600 {
  color: #2563eb;
}
.bg-white {
  background: #fff;
}
</style>
