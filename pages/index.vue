<template>
  <div>
    <!-- Hero Section -->
    <section class="relative py-20 sm:py-28">
      <div class="mx-auto max-w-7xl px-6 lg:px-8">
        <div class="mx-auto max-w-3xl text-center">
          <h1
            class="text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-5xl md:text-6xl"
          >
            Auf Brüderstein e.V.
          </h1>
          <p
            class="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300 sm:text-xl"
          >
            Der Grillplatz für die Gemeinde Hohenstein
          </p>
          <div
            class="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <NuxtLink
              to="/kontakt"
              class="rounded-lg bg-green-600 px-6 py-3 text-base font-semibold text-white shadow-sm hover:bg-green-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600 transition-colors"
            >
              Mietanfrage stellen
            </NuxtLink>
            <NuxtLink
              to="/der-verein"
              class="rounded-lg bg-white dark:bg-gray-800 px-6 py-3 text-base font-semibold text-gray-900 dark:text-white shadow-sm ring-1 ring-inset ring-gray-300 dark:ring-gray-600 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
            >
              Mehr erfahren
            </NuxtLink>
          </div>
        </div>
      </div>
    </section>

    <!-- Hero Image Full Width -->
    <section class="w-full">
      <img
        src="/images/grillplatz_fruehjahr3.jpg"
        alt="Grillplatz Auf Brüderstein"
        class="w-full h-auto object-cover max-h-[400px] sm:max-h-[500px]"
      />
    </section>

    <!-- About Section -->
    <section class="py-16 sm:py-24">
      <div class="mx-auto max-w-7xl px-6 lg:px-8">
        <div class="mx-auto max-w-2xl text-center">
          <h2 class="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
            Willkommen auf dem Grillplatz<br />"Auf Brüderstein"
          </h2>
          <p class="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
            Der Verein „Auf Brüderstein e.V." wurde am 05.02.2012 von 16 Mitgliedern mit dem gemeinsamen Interesse gegründet, den Grillplatz zu erhalten und für den Jugendclub Strinz-Margarethä auch dauerhaft zugänglich zu machen.
          </p>
        </div>
      </div>
    </section>

    <!-- Features Section -->
    <section class="py-16 sm:py-24 bg-gray-50 dark:bg-gray-900">
      <div class="mx-auto max-w-7xl px-6 lg:px-8">
        <div class="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-2">
          <!-- Feature 1: Grillplatz -->
          <div
            class="rounded-2xl p-8 border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-shadow bg-white dark:bg-gray-800"
          >
            <div class="mb-4">
              <div
                class="flex h-12 w-12 items-center justify-center rounded-lg bg-green-600"
              >
                <Icon
                  name="heroicons:fire"
                  class="h-6 w-6 text-white"
                />
              </div>
            </div>
            <h3
              class="text-xl font-semibold text-gray-900 dark:text-white mb-3"
            >
              Grillplatz mieten
            </h3>
            <p class="text-gray-600 dark:text-gray-300">
              Der Grillplatz kann für Veranstaltungen gemietet werden. Ideal für Feiern und gesellige Zusammenkünfte.
            </p>
          </div>

          <!-- Feature 2: Gemeinde -->
          <div
            class="rounded-2xl p-8 border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-shadow bg-white dark:bg-gray-800"
          >
            <div class="mb-4">
              <div
                class="flex h-12 w-12 items-center justify-center rounded-lg bg-green-600"
              >
                <Icon
                  name="heroicons:map-pin"
                  class="h-6 w-6 text-white"
                />
              </div>
            </div>
            <h3
              class="text-xl font-semibold text-gray-900 dark:text-white mb-3"
            >
              In Hohenstein
            </h3>
            <p class="text-gray-600 dark:text-gray-300">
              Der Grillplatz befindet sich zwischen Strinz-Margarethä und Breithardt in der Nähe der Windräder.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Image Gallery -->
    <section class="py-16 sm:py-24">
      <div class="mx-auto max-w-7xl px-6 lg:px-8">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <img
            src="/images/DSC_0750-1024x576.jpg"
            alt="Grillplatz"
            class="rounded-lg shadow-lg w-full h-auto object-cover"
          />
          <img
            src="/images/grillplatz_fruehjahr4.jpg"
            alt="Grillplatz"
            class="rounded-lg shadow-lg w-full h-auto object-cover"
          />
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  title: "Auf Brüderstein e.V. – Grillplatz für die Gemeinde Hohenstein",
  meta: [
    {
      name: "description",
      content: "Der Verein Auf Brüderstein e.V. verwaltet den Grillplatz für die Gemeinde Hohenstein. Mieten Sie den Grillplatz für Ihre Veranstaltung.",
    },
    {
      property: "og:title",
      content: "Auf Brüderstein e.V. – Grillplatz für die Gemeinde Hohenstein",
    },
    {
      property: "og:description",
      content: "Der Verein Auf Brüderstein e.V. verwaltet den Grillplatz für die Gemeinde Hohenstein.",
    },
    {
      property: "og:type",
      content: "website",
    },
  ],
  link: [{ rel: "canonical", href: "https://bruederstein.de/" }],
});
</script>
