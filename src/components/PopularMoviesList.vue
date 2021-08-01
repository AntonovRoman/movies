<template>
  <h1 class="text-3xl font-semi mb-4">Popular movies</h1>
  <!-- Pre-loader to prevent undefined errors while data is being fetched -->
  <div v-if="moviesStore.state.loading">Loading...</div>
  <ul
    data-test="popular-movies-list"
    v-else
    role="list"
    class="
      trolling
      grid grid-cols-2
      gap-x-4 gap-y-8
      sm:grid-cols-3 sm:gap-x-6
      lg:grid-cols-4
      xl:gap-x-8
    "
  >
    <!-- For loop to render popular movies -->
    <li
      data-test="popular-movie-item"
      v-for="movie in moviesStore.state.popularMovies"
      :key="movie.id"
      class="relative"
    >
      <div
        class="
          group
          block
          w-full
          aspect-w-10 aspect-h-7
          rounded-lg
          focus-within:ring-2
          focus-within:ring-offset-2
          focus-within:ring-offset-gray-100
          focus-within:ring-indigo-500
          overflow-hidden
        "
      >
        <img
          :src="moviesStore.getMovieImage(movie.poster_path, 342)"
          alt=""
          class="object-cover pointer-events-none group-hover:opacity-75"
        />
        <!-- Link to the single movie route /movies/:id -->
        <!-- check src/router/index.ts -->
        <router-link
          :to="`/movies/${movie.id}`"
          type="button"
          class="absolute inset-0 focus:outline-none"
        >
          <span class="sr-only">View details for {{ movie.title }}</span>
        </router-link>
      </div>
      <p
        class="
          mt-2
          block
          text-sm
          font-medium
          truncate
          pointer-events-none
        "
      >
        {{ movie.title }}
      </p>
      <p class="block text-sm font-medium pointer-events-none">
        {{ movie.release_date }}
      </p>
    </li>
  </ul>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useMovies } from '@/composables/use-movies';

export default defineComponent({
  name: 'PopularMoviesList',
  setup() {
    // This is composable function where state(data) gets stored and accessed
    const moviesStore = useMovies();

    // this return gives us an access to our data inside <template></template>
    // for example {{ moviesStore.state.popularMovies }}
    return {
      moviesStore
    };
  },
  async created(): Promise<void> {
    // @link https://v3.vuejs.org/guide/composition-api-lifecycle-hooks.html
    // When component gets created we want to fetch popular movies right away
    // to display them on the page
    await this.moviesStore.fetchPopularMovies();
  }
});
</script>
