<template>
  <div class="min-h-screen flex items-center justify-center px-6 py-16">
    <div class="max-w-2xl w-full">
      <!-- Result Card -->
      <div
        class="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl p-8 md:p-12 border border-gray-100 dark:border-gray-700"
      >
        <!-- Icon -->
        <div class="text-center mb-8">
          <div
            class="inline-flex items-center justify-center w-20 h-20 rounded-full mb-6 animate-pulse"
            :class="
              type === 'qualified'
                ? 'bg-green-100 dark:bg-green-900/30'
                : 'bg-red-100 dark:bg-red-900/30'
            "
          >
            <svg
              v-if="type === 'qualified'"
              class="w-10 h-10 text-green-600 dark:text-green-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <svg
              v-else
              class="w-10 h-10 text-red-600 dark:text-red-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>

          <!-- Title -->
          <h1
            class="text-3xl md:text-4xl font-bold mb-4"
            :class="
              type === 'qualified'
                ? 'text-green-600 dark:text-green-400'
                : 'text-red-600 dark:text-red-400'
            "
          >
            {{ type === 'qualified' ? 'Beratungsbefugnis besteht' : 'Keine Beratungsbefugnis' }}
          </h1>

          <!-- Result Description -->
          <div
            class="p-6 bg-gray-50 dark:bg-gray-900/50 rounded-xl border border-gray-200 dark:border-gray-700 mb-8"
          >
            <p class="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              {{ result }}
            </p>
          </div>

          <!-- Additional Information -->
          <div
            v-if="type === 'qualified'"
            class="text-left p-6 bg-gray-50 dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 rounded-xl mb-8"
          >
            <h3 class="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-4">
              Beratungsumfang umfasst:
            </h3>
            <ul class="space-y-2 text-gray-700 dark:text-gray-300">
              <li class="flex items-start gap-2">
                <svg
                  class="w-5 h-5 text-[#00479E] dark:text-[#00479E] flex-shrink-0 mt-0.5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span>Einkommensteuer</span>
              </li>
              <li class="flex items-start gap-2">
                <svg
                  class="w-5 h-5 text-[#00479E] dark:text-[#00479E] flex-shrink-0 mt-0.5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span>Zuschlagsteuern</span>
              </li>
              <li class="flex items-start gap-2">
                <svg
                  class="w-5 h-5 text-[#00479E] dark:text-[#00479E] flex-shrink-0 mt-0.5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span>Kindergeld nach dem ESIG</span>
              </li>
              <li class="flex items-start gap-2">
                <svg
                  class="w-5 h-5 text-[#00479E] dark:text-[#00479E] flex-shrink-0 mt-0.5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span>Haushaltsnahe Dienstleistungen und Kinderbetreuungskosten</span>
              </li>
            </ul>
          </div>

          <!-- Action Buttons -->
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <NuxtLink
              to="/"
              class="group relative inline-flex items-center justify-center overflow-hidden rounded-lg bg-gradient-to-r from-[#00479E] via-[#1a3275] to-[#142658] p-[2px] shadow-lg hover:shadow-xl transition-shadow focus:outline-none focus:ring-2 focus:ring-[#00479E] focus:ring-offset-2"
            >
              <span
                class="relative inline-flex items-center gap-2 rounded-md bg-gray-900 px-6 py-3 text-base font-medium text-white dark:bg-gray-100 dark:text-gray-900"
              >
                <svg
                  class="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                  />
                </svg>
                Zur Startseite
              </span>
            </NuxtLink>

            <button
              @click="goBack"
              class="px-6 py-3 text-base font-medium text-gray-700 dark:text-gray-300 hover:text-[#00479E] dark:hover:text-[#00479E] transition-colors border-2 border-gray-300 dark:border-gray-600 rounded-lg hover:border-[#00479E] dark:hover:border-[#00479E]"
            >
              Erneut prüfen
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useRoute, useRouter } from 'vue-router';

const route = useRoute();
const router = useRouter();

// Get query parameters
const type = computed(() => route.query.type as string || 'not-qualified');
const result = computed(() => route.query.result as string || 'Kein Ergebnis verfügbar');

// Navigate back to home
const goBack = () => {
  router.push('/');
};

// Set page meta
definePageMeta({
  title: "CUCO - Ergebnis",
  meta: [
    {
      name: "description",
      content: "Ihr Beratungsbefugnis-Ergebnis",
    },
  ],
});
</script>

<style scoped>
@keyframes pulse {
  0%, 100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.05);
  }
}

.animate-pulse {
  animation: pulse 2s ease-in-out infinite;
}
</style>

