<template>
  <div v-if="moviesStore.state.loading">Loading...</div>
  <swiper
    :style="{
      '--swiper-navigation-color': '#fff',
      '--swiper-pagination-color': '#fff'
    }"
    :spaceBetween="0"
    :navigation="true"
    :thumbs="{ swiper: thumbsSwiper }"
    data-test="popular-movies-list"
    v-else
    role="list"
    class="
      mySwiper2
      
    "
  >
    <swiper-slide
      data-test="popular-movie-item"
      v-for="movie in moviesStore.state.popularMovies"
      :key="movie.id"
      class="relative"
    >
      <div class="bg-wrap">
        <img
          :src="moviesStore.getMovieImage(movie.poster_path, 342)"
          alt=""
          class="object-cover pointer-events-none group-hover:opacity-75"
        />

        <router-link
          :to="`/movies/${movie.id}`"
          type="button"
          class="absolute inset-0 focus:outline-none"
        >
          <span class="sr-only">View details for {{ movie.title }}</span>
        </router-link>
      </div>
    </swiper-slide>
  </swiper>
  <div v-if="moviesStore.state.loading">Loading...</div>
  <swiper
    @swiper="setThumbsSwiper"
    :spaceBetween="10"
    :slidesPerView="4"
    :freeMode="true"
    :watchSlidesVisibility="true"
    :watchSlidesProgress="true"
    data-test="popular-movies-list"
    v-else
    role="list"
    class="
      mySwiper
      trolling
      grid grid-cols-2
      gap-x-4 gap-y-8
      sm:grid-cols-3 sm:gap-x-6
      lg:grid-cols-4
      xl:gap-x-8
    "
  >
    <swiper-slide
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
      </div>
      <p class="mt-2 block text-sm font-medium truncate pointer-events-none">
        {{ movie.title }}
      </p>
      <p class="block text-sm font-medium pointer-events-none">
        {{ movie.release_date }}
      </p>
    </swiper-slide>
  </swiper>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useMovies } from '@/composables/use-movies';

// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue';

// Import Swiper styles
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.min.css';
import 'swiper/components/thumbs/thumbs.min.css';

// import Swiper core and required modules
import SwiperCore, { Navigation, Thumbs } from 'swiper/core';

// install Swiper modules
SwiperCore.use([Navigation, Thumbs]);

export default defineComponent({
  name: 'PopularMoviesList',
  components: {
    Swiper,
    SwiperSlide
  },
  data() {
    return {
      thumbsSwiper: null
    };
  },
  methods: {
    setThumbsSwiper(swiper: null) {
      this.thumbsSwiper = swiper;
    }
  },
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
