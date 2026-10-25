<template>
  <div>
    <PageHeader
      eyebrow="Anfahrt"
      title="Wegbeschreibung"
      lead="Der Grillplatz ist gut zu Fuß oder per Auto zu erreichen. Er befindet sich zwischen Strinz-Margarethä und Breithardt in der Nähe der Windräder. An den Windrädern kann auch das Auto geparkt werden."
    />

    <div class="wrap">
      <div class="prose-page">
        <section class="grid gap-6 sm:grid-cols-2">
          <div class="note">
            <h3>Standort</h3>
            <p class="text-ink">
              Zwischen Strinz-Margarethä und Breithardt<br />
              In der Nähe der Windräder
            </p>
          </div>
          <div class="note">
            <h3>Parken</h3>
            <p class="text-ink">Parkmöglichkeiten: An den Windrädern</p>
          </div>
        </section>

        <section>
          <h2 class="text-center">Karte</h2>
          <figure class="card mt-6 overflow-hidden p-2">
            <img
              src="/images/Karte.png"
              alt="Karte zum Grillplatz"
              class="w-full"
              width="600"
              height="288"
            />
          </figure>
        </section>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
usePageSeo({
  title: "Wegbeschreibung – Auf Brüderstein e.V.",
  description:
    "Wegbeschreibung zum Grillplatz Auf Brüderstein zwischen Strinz-Margarethä und Breithardt.",
  path: "/wegbeschreibung",
});
</script>
