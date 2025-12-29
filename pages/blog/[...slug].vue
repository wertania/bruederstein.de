<script setup lang="ts">
import { useRoute } from "vue-router";
import { computed } from "vue";

const route = useRoute();
const slugParam = route.params.slug;
const slug = Array.isArray(slugParam) ? slugParam.join("/") : slugParam;

const { data } = await useAsyncData("page-data", () =>
  queryCollection("blog").where("name", "=", slug).first()
);
</script>

<template>
  <section class="max-w-4xl mx-auto py-12 px-4">
    <div class="bg-white rounded-lg shadow-md p-6 markdown-content">
      <!-- Info bar with author and date -->
      <div
        class="flex items-center justify-between mb-6 text-sm text-gray-500 border-b pb-2"
      >
        <span>Autor: {{ data?.author }}</span>
        <span>{{
          new Date(data?.date || "").toLocaleDateString("de-DE", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })
        }}</span>
      </div>
      <ContentRenderer v-if="data" :value="data" />
    </div>
  </section>
</template>

<style>
.markdown-content {
  /* Add your markdown styling here */
  line-height: 1.6;
}

.markdown-content h1 {
  font-size: 2em;
  margin-bottom: 0.5em;
}

.markdown-content h2 {
  font-size: 1.5em;
  margin-bottom: 0.5em;
}

.markdown-content p {
  margin-bottom: 1em;
}

.markdown-content ul,
.markdown-content ol {
  margin-bottom: 1em;
  padding-left: 2em;
}

.markdown-content code {
  background-color: #f3f4f6;
  padding: 0.2em 0.4em;
  border-radius: 3px;
}

.markdown-content pre {
  background-color: #f3f4f6;
  padding: 1em;
  border-radius: 5px;
  overflow-x: auto;
  margin-bottom: 1em;
}

.markdown-content blockquote {
  border-left: 4px solid #e5e7eb;
  padding-left: 1em;
  margin-left: 0;
  color: #6b7280;
}
</style>
