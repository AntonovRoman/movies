<template>
  <Header></Header>
  <PopularMoviesList></PopularMoviesList>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import PopularMoviesList from '@/components/PopularMoviesList.vue';
import Header from '@/components/Header.vue';

export default defineComponent({
  name: 'Home',
  components: { PopularMoviesList, Header }
});
</script>
