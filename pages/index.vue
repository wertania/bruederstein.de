<template>
  <div>
    <!-- Hero -->
    <section class="wrap pb-14 pt-16 text-center sm:pb-20 sm:pt-24">
      <p class="eyebrow">Der Grillplatz für die Gemeinde Hohenstein</p>
      <h1 class="mt-6 font-script text-[4rem] leading-[1.05] text-forest sm:text-8xl md:text-[7.5rem]">
        Auf Brüderstein
      </h1>
      <p class="mt-2 font-serif text-xl italic tracking-[0.3em] text-ink-faint">e.V.</p>
      <div class="ornament mt-8" aria-hidden="true"><span /></div>
      <div class="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
        <NuxtLink to="/kontakt" class="btn-primary w-full sm:w-auto">
          Mietanfrage stellen
        </NuxtLink>
        <NuxtLink to="/der-verein" class="btn-ghost w-full sm:w-auto">Mehr erfahren</NuxtLink>
      </div>
    </section>

    <!-- Hero image -->
    <section class="wrap max-w-5xl">
      <figure class="card overflow-hidden p-2 sm:p-3">
        <img
          src="/images/grillplatz_fruehjahr3.jpg"
          alt="Grillplatz Auf Brüderstein mit Hütte, Feuerstelle und Sitzbänken"
          class="aspect-[16/9] w-full object-cover object-[50%_60%] sm:aspect-[2/1]"
          width="600"
          height="450"
        />
      </figure>
    </section>

    <!-- Welcome -->
    <section class="wrap py-20 sm:py-28">
      <div class="mx-auto max-w-2xl text-center">
        <p class="eyebrow">Willkommen</p>
        <h2 class="mt-4 font-serif text-3xl font-semibold leading-snug text-ink sm:text-4xl">
          Willkommen auf dem Grillplatz<br />
          <span class="italic">„Auf Brüderstein“</span>
        </h2>
        <p class="mt-6 text-lg text-ink-soft sm:text-xl">
          Der Verein „Auf Brüderstein e.V." wurde am 05.02.2012 von 16 Mitgliedern mit dem gemeinsamen Interesse gegründet, den Grillplatz zu erhalten und für den Jugendclub Strinz-Margarethä auch dauerhaft zugänglich zu machen.
        </p>
      </div>
    </section>

    <!-- Features -->
    <section class="border-y border-rule bg-paper-deep py-16 sm:py-24">
      <div class="wrap grid gap-6 md:grid-cols-2 md:gap-8">
        <NuxtLink
          v-for="feature in features"
          :key="feature.title"
          :to="feature.to"
          class="card group p-8 transition-transform hover:-translate-y-0.5 sm:p-10"
        >
          <span
            class="flex h-12 w-12 items-center justify-center rounded-full border border-gold-soft text-gold"
          >
            <Icon :name="feature.icon" class="h-6 w-6" />
          </span>
          <h3 class="mt-6 font-serif text-2xl font-semibold text-ink group-hover:text-forest">
            {{ feature.title }}
          </h3>
          <p class="mt-3 text-ink-soft">{{ feature.text }}</p>
          <p class="mt-6 font-sans text-xs font-semibold uppercase tracking-[0.16em] text-forest">
            {{ feature.link }} →
          </p>
        </NuxtLink>
      </div>
    </section>

    <!-- Gallery -->
    <section class="wrap pt-20 sm:pt-28">
      <div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <figure v-for="image in gallery" :key="image.src" class="card overflow-hidden p-2">
          <img
            :src="image.src"
            :alt="image.alt"
            class="aspect-[4/3] w-full object-cover"
            loading="lazy"
            :width="image.width"
            :height="image.height"
          />
        </figure>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
const features = [
  {
    icon: "heroicons:fire",
    title: "Grillplatz mieten",
    text: "Der Grillplatz kann für Veranstaltungen gemietet werden. Ideal für Feiern und gesellige Zusammenkünfte.",
    to: "/kontakt",
    link: "Zur Mietanfrage",
  },
  {
    icon: "heroicons:map-pin",
    title: "In Hohenstein",
    text: "Der Grillplatz befindet sich zwischen Strinz-Margarethä und Breithardt in der Nähe der Windräder.",
    to: "/wegbeschreibung",
    link: "Zur Wegbeschreibung",
  },
];

const gallery = [
  {
    src: "/images/DSC_0750-1024x576.jpg",
    alt: "Feuerstelle mit Sitzbänken aus Baumstämmen",
    width: 1024,
    height: 576,
  },
  {
    src: "/images/DSC00006-1024x597.jpg",
    alt: "Tische und Bänke unter den Bäumen",
    width: 1024,
    height: 597,
  },
  {
    src: "/images/grillplatz_fruehjahr4.jpg",
    alt: "Blick vom Grillplatz in die Landschaft",
    width: 600,
    height: 450,
  },
];

usePageSeo({
  title: "Auf Brüderstein e.V. – Grillplatz für die Gemeinde Hohenstein",
  description:
    "Der Verein Auf Brüderstein e.V. verwaltet den Grillplatz für die Gemeinde Hohenstein. Mieten Sie den Grillplatz für Ihre Veranstaltung.",
  path: "/",
});
</script>
