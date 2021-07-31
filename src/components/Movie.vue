<template>
  <div v-if="loading">Loading...</div>
  <div v-else>
    <pre>
      {{ movie }}
    </pre>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { Movie } from '@/api/movies-api';
import { useRoute } from 'vue-router';
import { moviesApi } from '@/api/movies-api-impl';

export default defineComponent({
  name: 'Movie',
  setup() {
    const movie = ref<Movie>();
    const loading = ref<boolean>(false);
    const route = useRoute();

    return {
      route,
      loading,
      movie
    };
  },
  async created(): Promise<void> {
    this.loading = true;
    const movieId = this.route.params.id as string;
    this.movie = await moviesApi.getMovie(movieId);
    this.loading = false;
  }
});
</script>
