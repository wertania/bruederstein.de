<template>
  <div>
    <!-- Hero Section -->
    <section class="py-16 sm:py-24">
      <div class="mx-auto max-w-7xl px-6 lg:px-8">
        <div class="mx-auto max-w-3xl text-center">
          <h1 class="text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-5xl">
            Der Verein
          </h1>
        </div>
      </div>
    </section>

    <main class="mx-auto max-w-4xl px-6 lg:px-8 py-16">
      <section class="space-y-8 text-gray-700 dark:text-gray-300 leading-relaxed">
        <div class="space-y-4">
          <p>
            Der Verein „Auf Brüderstein e.V." wurde am 05.02.2012 von 16 Mitgliedern mit dem gemeinsamen Interesse gegründet, den Grillplatz zu erhalten und für den Jugendclub Strinz-Margarethä auch dauerhaft zugänglich zu machen.
          </p>
          <p>
            Der Verein wurde offiziell am 10.04.2012 vom Amtsgericht Wiesbaden anerkannt und eingetragen.
          </p>
        </div>

        <div class="bg-green-50 dark:bg-green-900/20 p-6 rounded-lg border border-green-200 dark:border-green-800">
          <h2 class="text-xl font-semibold text-gray-900 dark:text-white mb-4">
            Interesse am Verein?
          </h2>
          <p>
            Sie können sich gerne mit uns in Verbindung setzen, oder uns auch am Grillfest ansprechen.
          </p>
        </div>

        <div class="space-y-4">
          <h2 class="text-2xl font-semibold text-gray-900 dark:text-white">
            Logo
          </h2>
          <div class="flex justify-center">
            <img
              src="/images/Logo-Bruederstein.png"
              alt="Logo Auf Brüderstein e.V."
              class="max-w-xs h-auto"
            />
          </div>
        </div>

        <div class="space-y-4">
          <h2 class="text-2xl font-semibold text-gray-900 dark:text-white">
            Auszug der Satzung
          </h2>
          <p class="text-sm text-gray-600 dark:text-gray-400 italic">
            (Aktueller Stand: 05.02.2012) zur Verdeutlichung der Vereinszwecke:
          </p>

          <div class="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg border border-gray-200 dark:border-gray-700">
            <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-3">
              § 2 Zweck und Aufgaben des Vereins
            </h3>
            <p class="mb-2">
              1) Zweck des Vereins ist:
            </p>
            <ul class="list-disc list-inside ml-4 space-y-1 mb-4">
              <li>die Verwaltung des Grillplatzes.</li>
              <li>die Pflege und Instandhaltung des Grillplatzes</li>
              <li>Verwaltung der Anlage und des Inventars</li>
              <li>Vermietung, bzw. Bereitstellung der Anlage</li>
              <li>Bereitstellung der Anlage und des Inventars an den ortansässigen Jugendclub Strinz-Margarethä.</li>
            </ul>
            <p class="mb-2">
              2) Der Satzungszweck wird insbesondere verwirklicht durch:
            </p>
            <ul class="list-disc list-inside ml-4 space-y-1 mb-4">
              <li>die Verwaltung und Pflege des Grillplatzes.</li>
            </ul>
            <p>
              3) Parteipolitische, gewerkschaftliche, konfessionelle und rassistische Bestrebungen sind ausgeschlossen. […]
            </p>
          </div>

          <div class="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg border border-gray-200 dark:border-gray-700">
            <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-3">
              § 4 Mitgliedschaft
            </h3>
            <p class="mb-2">
              1) Mitglied im Verein kann jede natürliche Person werden, die Interesse an der Verwirklichung der Vereinszwecke hat. Über die Aufnahme entscheidet nach schriftlichem Antrag der Gesamtvorstand. Die Vereinssatzung ist bindend für jedes Mitglied. […]
            </p>
            <p>
              6) Die Mitgliedschaft berechtigt nicht zur vergünstigten oder bevorzugten Nutzung der Anlagen und des Inventars. […]
            </p>
          </div>

          <div class="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg border border-gray-200 dark:border-gray-700">
            <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-3">
              § 5 Mitgliedsbeiträge
            </h3>
            <p>
              1) Von den Mitgliedern werden Beiträge erhoben. […]
            </p>
          </div>
        </div>
      </section>
    </main>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  title: "Der Verein – Auf Brüderstein e.V.",
  meta: [
    {
      name: "description",
      content: "Informationen über den Verein Auf Brüderstein e.V. und seine Satzung.",
    },
  ],
  link: [{ rel: "canonical", href: "https://bruederstein.de/der-verein" }],
});
</script>
