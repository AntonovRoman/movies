<template>
  <PopularMoviesList></PopularMoviesList>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import PopularMoviesList from '@/components/PopularMoviesList.vue';

export default defineComponent({
  name: 'Home',
  components: { PopularMoviesList }
});
</script>
