<template>
  <Header></Header>
  <main id="bg">
    <!-- <SwiperSlider></SwiperSlider> -->
    <PopularMoviesList></PopularMoviesList>
  </main>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import PopularMoviesList from '@/components/PopularMoviesList.vue';
import Header from '@/components/Header.vue';
import Swiper from 'swiper/bundle';
import SwiperSlider from '@/components/SwiperSlider.vue';
// core version + navigation, pagination modules:
// import SwiperCore, { Navigation, Pagination, Swiper } from 'swiper/core';

// configure Swiper to use modules
// SwiperCore.use([Navigation, Pagination]);


// init Swiper:
export default defineComponent({
  name: 'Home',
  components: { PopularMoviesList, Header }
});
</script>