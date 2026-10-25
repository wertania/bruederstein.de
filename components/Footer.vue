<script setup>
import footerConfig from "~/content/_footer.json";
</script>

<template>
  <footer class="mt-24 border-t border-rule bg-paper-deep">
    <div class="wrap grid gap-10 py-14 md:grid-cols-3">
      <div>
        <p class="font-script text-4xl leading-none text-forest">Auf Brüderstein</p>
        <p class="mt-3 text-ink-soft">Der Grillplatz von und für Strinz-Margarethä</p>
      </div>

      <div>
        <h2 class="eyebrow mb-4">Navigation</h2>
        <ul class="space-y-1.5">
          <li v-for="item in footerConfig.navigation" :key="item.url">
            <NuxtLink :to="item.url" class="text-ink-soft transition-colors hover:text-forest">
              {{ item.title }}
            </NuxtLink>
          </li>
        </ul>
      </div>

      <div>
        <h2 class="eyebrow mb-4">Kontakt</h2>
        <p class="text-ink-soft">{{ footerConfig.company.name }}</p>
        <a
          :href="`mailto:${footerConfig.company.email}`"
          class="text-forest underline decoration-gold-soft underline-offset-4 hover:decoration-gold"
        >
          {{ footerConfig.company.email }}
        </a>
      </div>
    </div>

    <div class="border-t border-rule">
      <p class="wrap py-5 font-sans text-xs tracking-wide text-ink-faint">
        &copy; {{ new Date().getFullYear() }} {{ footerConfig.company.name }} · Alle Rechte vorbehalten
      </p>
    </div>
  </footer>
</template>
