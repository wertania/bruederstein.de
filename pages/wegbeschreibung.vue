<template>
  <div>
    <!-- Hero Section -->
    <section class="py-16 sm:py-24">
      <div class="mx-auto max-w-7xl px-6 lg:px-8">
        <div class="mx-auto max-w-3xl text-center">
          <h1 class="text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-5xl">
            Wegbeschreibung
          </h1>
        </div>
      </div>
    </section>

    <main class="mx-auto max-w-4xl px-6 lg:px-8 py-16">
      <section class="space-y-8 text-gray-700 dark:text-gray-300 leading-relaxed">
        <div class="space-y-4">
          <p class="text-lg">
            Der Grillplatz ist gut zu Fuß oder per Auto zu erreichen. Er befindet sich zwischen Strinz-Margarethä und Breithardt in der Nähe der Windräder. An den Windrädern kann auch das Auto geparkt werden.
          </p>
        </div>

        <div class="bg-green-50 dark:bg-green-900/20 p-6 rounded-lg border border-green-200 dark:border-green-800">
          <h2 class="text-xl font-semibold text-gray-900 dark:text-white mb-4">
            Standort
          </h2>
          <p class="mb-4">
            Zwischen Strinz-Margarethä und Breithardt<br />
            In der Nähe der Windräder
          </p>
          <p class="text-sm text-gray-600 dark:text-gray-400">
            Parkmöglichkeiten: An den Windrädern
          </p>
        </div>

        <div class="space-y-4">
          <h2 class="text-2xl font-semibold text-gray-900 dark:text-white">
            Karte
          </h2>
          <div class="flex justify-center">
            <img
              src="/images/Karte.png"
              alt="Karte zum Grillplatz"
              class="max-w-full h-auto rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>
    </main>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  title: "Wegbeschreibung – Auf Brüderstein e.V.",
  meta: [
    {
      name: "description",
      content: "Wegbeschreibung zum Grillplatz Auf Brüderstein zwischen Strinz-Margarethä und Breithardt.",
    },
  ],
  link: [{ rel: "canonical", href: "https://bruederstein.de/wegbeschreibung" }],
});
</script>
