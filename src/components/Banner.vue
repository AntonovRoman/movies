<template>
  <div v-if="moviesStore.state.loading" class="text-4xl">Loading...</div>
  <section
    v-else
    class="hero"
    :style="`background: url(${moviesStore.getMovieImage(
      bannerMovie.poster_path
    )}) no-repeat 50% 25%`"
  >
    {{ bannerMovie.overview }}
    <!-- <span @click="moviesStore.addToWatchlist(bannerMovie)">ADD TO WATCHLIST</span> -->
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useMovies } from '@/composables/use-movies';

export default defineComponent({
  name: 'Banner',
  setup() {
    const moviesStore = useMovies();

    return {
      moviesStore,
      bannerMovie: moviesStore.getBannerMovie()
    };
  }
});
</script>
