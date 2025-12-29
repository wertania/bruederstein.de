<template>
  <div class="py-24 sm:py-32">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <!-- Team Image -->
      <div v-if="teamImage" class="flex justify-center">
        <img
          :src="teamImage"
          :alt="teamImageAlt || 'Team Photo'"
          class="w-full max-w-[400px] h-auto rounded-lg shadow-xl mx-auto"
        />
      </div>
      
      <!-- Title and Description below the image -->
      <div class="mx-auto max-w-3xl text-center mt-16">
        <h2
          class="text-3xl font-bold tracking-tight text-content dark:text-content-dark sm:text-4xl"
        >
          {{ title }}
        </h2>
        <p class="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300 whitespace-pre-line">
          {{ description }}
        </p>
      </div>
      
      <ul
        role="list"
        class="mx-auto mt-20 grid max-w-none grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3"
      >
        <li v-for="member in team" :key="member.name" class="flex flex-col items-center">
          <img
            v-if="member.image"
            class="aspect-square w-48 h-48 rounded-xl object-cover mx-auto"
            :src="member.image"
            :alt="member.name"
          />
          <h3
            class="mt-4 text-lg font-semibold leading-7 text-content dark:text-content-dark text-center"
          >
            {{ member.name }}
          </h3>
          <p
            class="text-sm leading-6 text-gray-900 dark:text-white text-center"
          >
            {{ member.role }}
          </p>
          <p
            v-if="member.position"
            class="mt-1 text-xs leading-5 text-gray-600 dark:text-gray-300 text-center"
          >
            {{ member.position }}
          </p>
          <p
            v-if="member.slogan"
            class="mt-2 text-xs italic leading-5 text-center px-2"
            style="color: #9F8162"
          >
            "{{ member.slogan }}"
          </p>
          <p
            class="mt-3 text-sm leading-6 text-gray-600 dark:text-gray-300 text-center px-2 whitespace-pre-line"
          >
            {{ member.bio }}
          </p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
interface TeamMember {
  name: string;
  role: string;
  image?: string;
  bio?: string;
  position?: string;
  slogan?: string;
}

defineProps<{
  title: string;
  description: string;
  team: TeamMember[];
  teamImage?: string;
  teamImageAlt?: string;
}>();
</script>
