<template>
  <div>
    <PageHeader eyebrow="Grillplatz mieten" title="Kontakt & Mietanfrage" />

    <div class="wrap">
      <div class="prose-page">
        <section class="note">
          <h2>Informationen zur Mietanfrage</h2>
          <ul class="!list-none !pl-0 !space-y-4">
            <li v-for="(item, i) in terms" :key="i" class="flex items-start gap-3">
              <Icon name="heroicons:check-circle" class="mt-1 h-5 w-5 flex-shrink-0 text-gold" />
              <span v-html="item" />
            </li>
          </ul>
        </section>

        <section class="text-center">
          <h2>Kontakt</h2>
          <p>Anfragen bitte per E-Mail an:</p>
          <p class="mt-4">
            <a href="mailto:info@bruederstein.de" class="btn-primary !font-serif !text-lg !normal-case !tracking-normal !text-on-forest !no-underline">
              <Icon name="heroicons:envelope" class="h-4 w-4" />
              info(at)bruederstein.de
            </a>
          </p>
        </section>

        <section class="border-l-2 border-gold-soft pl-6">
          <h3 class="!mt-0">Hinweis</h3>
          <p>Bitte geben Sie in Ihrer Anfrage folgende Informationen an:</p>
          <ul>
            <li>Gewünschtes Datum</li>
            <li>Anzahl der Personen</li>
            <li>Ihre Kontaktdaten</li>
            <li>Ob Sie das Aggregat benötigen</li>
          </ul>
        </section>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const terms = [
  "Die Miete kostet pro Tag <strong>25,-€</strong> (100,-€ Kaution)",
  "Es steht ein Aggregat zur optionalen Miete zur Verfügung (<strong>25,-€ / Tag</strong>, ohne Betriebsstoffe)",
  "Die Nutzung des Grillplatzes setzt voraus, dass Sie mit der Nutzungsordnung einverstanden sind und den zugehörigen Nutzungsvertrag unterzeichnen.",
  "Der Grillplatz ist nur für <strong>Bürger der Gemeinde Hohenstein</strong> zu mieten.",
];

usePageSeo({
  title: "Kontakt & Mietanfrage – Auf Brüderstein e.V.",
  description:
    "Kontaktieren Sie uns für eine Mietanfrage des Grillplatzes. Miete: 25€ pro Tag, nur für Bürger der Gemeinde Hohenstein.",
  path: "/kontakt",
});
</script>
