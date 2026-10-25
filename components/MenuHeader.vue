<script setup>
import menuConfig from "~/content/_menu.json";

const menuOpen = ref(false);
const isDarkMode = ref(false);
const route = useRoute();

// Close the mobile menu after navigating.
watch(() => route.path, () => (menuOpen.value = false));

function toggleDarkMode() {
  const root = document.documentElement;
  root.classList.toggle("dark");
  isDarkMode.value = root.classList.contains("dark");
  try {
    localStorage.setItem("darkMode", String(isDarkMode.value));
  } catch {}
}

onMounted(() => {
  isDarkMode.value = document.documentElement.classList.contains("dark");
});
</script>

<template>
  <header
    class="sticky top-0 z-40 border-b border-rule bg-paper/90 backdrop-blur supports-[backdrop-filter]:bg-paper/80"
  >
    <nav class="wrap flex items-center justify-between gap-6 py-3" aria-label="Hauptnavigation">
      <NuxtLink :to="menuConfig.logoUrl || '/'" class="group flex items-center gap-3">
        <img
          :src="menuConfig.logoPathLight || '/logo.png'"
          :alt="menuConfig.logoAlt || 'Logo'"
          class="h-12 w-auto sm:h-14 dark:rounded-lg dark:bg-[#ece7db] dark:p-1"
          width="64"
          height="56"
        />
        <span class="leading-tight">
          <span class="block font-serif text-lg font-semibold text-ink group-hover:text-forest sm:text-xl">
            Auf Brüderstein
          </span>
          <span class="eyebrow block text-[0.62rem]">Grillplatz · e.V.</span>
        </span>
      </NuxtLink>

      <div class="hidden items-center gap-8 md:flex">
        <NuxtLink
          v-for="item in menuConfig.menuItems"
          :key="item.url"
          :to="item.url"
          class="border-b border-transparent py-1 font-sans text-[0.8rem] font-medium uppercase tracking-[0.14em] text-ink-soft transition-colors hover:text-forest"
          exact-active-class="!border-gold !text-ink"
        >
          {{ item.text }}
        </NuxtLink>
        <NuxtLink
          v-if="menuConfig.highlight"
          :to="menuConfig.highlight.url"
          class="btn-primary !px-4 !py-2 !text-xs"
        >
          {{ menuConfig.highlight.text }}
        </NuxtLink>
        <button
          id="darkModeToggle"
          type="button"
          class="text-ink-faint transition-colors hover:text-gold"
          :aria-label="isDarkMode ? 'Helles Farbschema' : 'Dunkles Farbschema'"
          @click="toggleDarkMode"
        >
          <Icon :name="isDarkMode ? 'heroicons:sun' : 'heroicons:moon'" class="h-5 w-5" />
        </button>
      </div>

      <div class="flex items-center gap-4 md:hidden">
        <button
          type="button"
          class="text-ink-faint hover:text-gold"
          :aria-label="isDarkMode ? 'Helles Farbschema' : 'Dunkles Farbschema'"
          @click="toggleDarkMode"
        >
          <Icon :name="isDarkMode ? 'heroicons:sun' : 'heroicons:moon'" class="h-5 w-5" />
        </button>
        <button
          id="menuBtn"
          type="button"
          class="text-ink"
          :aria-expanded="menuOpen"
          :aria-label="menuOpen ? 'Menü schließen' : 'Menü öffnen'"
          @click="menuOpen = !menuOpen"
        >
          <Icon :name="menuOpen ? 'heroicons:x-mark' : 'heroicons:bars-3'" class="h-7 w-7" />
        </button>
      </div>
    </nav>

    <div v-show="menuOpen" class="border-t border-rule bg-paper md:hidden">
      <div class="wrap flex flex-col py-4">
        <NuxtLink
          v-for="item in menuConfig.menuItems"
          :key="item.url"
          :to="item.url"
          class="border-b border-rule py-3 font-sans text-sm font-medium uppercase tracking-[0.14em] text-ink-soft"
          exact-active-class="!text-forest"
        >
          {{ item.text }}
        </NuxtLink>
        <NuxtLink
          v-if="menuConfig.highlight"
          :to="menuConfig.highlight.url"
          class="btn-primary mt-5"
        >
          {{ menuConfig.highlight.text }}
        </NuxtLink>
      </div>
    </div>
  </header>
</template>
