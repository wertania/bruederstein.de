<template>
  <div>
    <!-- Hero Section -->
    <section class="py-16 sm:py-24">
      <div class="mx-auto max-w-7xl px-6 lg:px-8">
        <div class="mx-auto max-w-3xl text-center">
          <h1 class="text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-5xl">
            Kontakt & Mietanfrage
          </h1>
        </div>
      </div>
    </section>

    <div class="mx-auto max-w-4xl px-6 lg:px-8 py-16">
      <section class="space-y-8 text-gray-700 dark:text-gray-300 leading-relaxed">
        <div class="space-y-6">
          <div>
            <h2 class="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              Informationen zur Mietanfrage:
            </h2>
            <div class="bg-green-50 dark:bg-green-900/20 p-6 rounded-lg border border-green-200 dark:border-green-800 space-y-4">
              <div class="flex items-start gap-3">
                <Icon name="heroicons:check-circle" class="h-6 w-6 text-green-600 dark:text-green-400 flex-shrink-0 mt-0.5" />
                <p>
                  Die Miete kostet pro Tag <strong>25,-€</strong> (100,-€ Kaution)
                </p>
              </div>
              <div class="flex items-start gap-3">
                <Icon name="heroicons:check-circle" class="h-6 w-6 text-green-600 dark:text-green-400 flex-shrink-0 mt-0.5" />
                <p>
                  Es steht ein Aggregat zur optionalen Miete zur Verfügung (<strong>25,-€ / Tag</strong>, ohne Betriebsstoffe)
                </p>
              </div>
              <div class="flex items-start gap-3">
                <Icon name="heroicons:check-circle" class="h-6 w-6 text-green-600 dark:text-green-400 flex-shrink-0 mt-0.5" />
                <p>
                  Die Nutzung des Grillplatzes setzt voraus, dass Sie mit der Nutzungsordnung einverstanden sind und den zugehörigen Nutzungsvertrag unterzeichnen.
                </p>
              </div>
              <div class="flex items-start gap-3">
                <Icon name="heroicons:check-circle" class="h-6 w-6 text-green-600 dark:text-green-400 flex-shrink-0 mt-0.5" />
                <p>
                  Der Grillplatz ist nur für <strong>Bürger der Gemeinde Hohenstein</strong> zu mieten.
                </p>
              </div>
            </div>
          </div>

          <div class="border-t border-gray-200 dark:border-gray-700 pt-6">
            <h2 class="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              Kontakt
            </h2>
            <div class="bg-white dark:bg-gray-800 p-6 rounded-lg border border-gray-200 dark:border-gray-700">
              <p class="mb-4">
                Anfragen bitte per E-Mail an:
              </p>
              <p class="text-lg">
                <a href="mailto:info@bruederstein.de" class="text-green-600 dark:text-green-400 hover:underline font-semibold">
                  info(at)bruederstein.de
                </a>
              </p>
            </div>
          </div>

          <div class="bg-green-50 dark:bg-green-900/20 p-6 rounded-lg border border-green-200 dark:border-green-800">
            <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-2">
              Hinweis
            </h3>
            <p class="text-sm">
              Bitte geben Sie in Ihrer Anfrage folgende Informationen an:
            </p>
            <ul class="list-disc list-inside mt-2 space-y-1 ml-4 text-sm">
              <li>Gewünschtes Datum</li>
              <li>Anzahl der Personen</li>
              <li>Ihre Kontaktdaten</li>
              <li>Ob Sie das Aggregat benötigen</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script setup lang="ts">
usePageSeo({
  title: "Kontakt & Mietanfrage – Auf Brüderstein e.V.",
  description:
    "Kontaktieren Sie uns für eine Mietanfrage des Grillplatzes. Miete: 25€ pro Tag, nur für Bürger der Gemeinde Hohenstein.",
  path: "/kontakt",
});
</script>
