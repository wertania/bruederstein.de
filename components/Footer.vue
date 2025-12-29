<script setup>
import footerConfig from "~/content/_footer.json";
</script>

<template>
  <footer
    class="w-full bg-background dark:bg-background-dark border-t border-gray-200 dark:border-gray-700"
  >
    <div class="max-w-7xl mx-auto px-4 sm:px-6 py-12">
      <!-- Main Footer Content -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
        <!-- Company Info -->
        <div class="text-center md:text-left">
          <h3
            class="text-lg font-semibold text-primary dark:text-dark-primary mb-4"
          >
            {{ footerConfig?.company.name }}
          </h3>
          <p class="text-sm text-content dark:text-content-dark mb-2">
            Der Grillplatz von und für Strinz-Margarethä
          </p>
          <p class="text-xs text-content dark:text-content-dark">
            {{ footerConfig?.company.address }}
          </p>
          <p class="text-xs text-content dark:text-content-dark">
            E-Mail:
            <a
              :href="`mailto:${footerConfig?.company.email}`"
              class="hover:underline"
              >{{ footerConfig?.company.email }}</a
            >
          </p>
        </div>

        <!-- Navigation Links -->
        <div class="text-center">
          <h3
            class="text-lg font-semibold text-primary dark:text-dark-primary mb-4"
          >
            Navigation
          </h3>
          <div class="flex flex-col space-y-2">
            <template
              v-for="item in footerConfig?.navigation.filter(
                (nav) => nav.title !== 'LinkedIn'
              )"
              :key="item.url"
            >
              <a
                :href="item.url"
                class="text-secondary dark:text-dark-secondary hover:text-primary dark:hover:text-dark-primary text-sm transition-colors duration-200"
              >
                {{ item.title }}
              </a>
            </template>
          </div>
        </div>
      </div>

      <!-- Memberships Section -->
      <div
        v-if="footerConfig?.memberships && footerConfig.memberships.length > 0"
        class="border-t border-gray-200 dark:border-gray-700 pt-8 mb-8"
      >
        <div class="text-center">
          <h3
            class="text-lg font-semibold text-primary dark:text-dark-primary mb-6"
          >
            Partnerschaften
          </h3>
          <div class="flex flex-wrap justify-center items-center gap-8">
            <template
              v-for="membership in footerConfig.memberships"
              :key="membership.name"
            >
              <a
                :href="membership.url"
                target="_blank"
                rel="noopener noreferrer"
                class="block transition-transform duration-200 hover:scale-105 hover:opacity-80"
                :title="membership.name"
              >
                <img
                  :src="membership.logo"
                  :alt="membership.name"
                  class="h-12 w-auto max-w-[120px] object-contain filter grayscale hover:grayscale-0 transition-all duration-300 dark:bg-white dark:rounded-md dark:p-2"
                />
              </a>
            </template>
          </div>
        </div>
      </div>

      <!-- Copyright Section -->
      <div
        class="border-t border-gray-200 dark:border-gray-700 pt-6 text-center"
      >
        <p class="text-sm text-content dark:text-content-dark">
          &copy; {{ new Date().getFullYear() }}
          <a
            :href="footerConfig?.company.url"
            target="_blank"
            rel="noopener noreferrer"
            class="text-highlight dark:text-highlight-dark hover:text-highlight-secondary dark:hover:text-highlight-secondary-dark font-medium transition-colors duration-200 ml-1"
          >
            {{ footerConfig?.company.name }}
          </a>
          - Alle Rechte vorbehalten
        </p>
      </div>
    </div>
  </footer>
</template>
