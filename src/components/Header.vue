<template>
  <div class="header-wrap"> 
    <section class="search-wrap">
      <div class="wrap">
        <input
          placeholder="Search"
          v-model="searchInput"
          @keyup.enter="onSubmit"
          type="text"
          class="
            appearance-none
            min-w-0
            w-full
            bg-white
            border border-gray-300
            rounded-md
            shadow-sm
            text-base text-gray-900
            placeholder-gray-500
            focus:outline-none
            focus:ring-indigo-500
            focus:border-indigo-500
            focus:placeholder-gray-400
          "
        />
        <p>{{ searchInput }}</p>
      </div>
    </section>
    <header
      :class="{ 'headroom--unpinned': scrolled }"
      v-on="handleScroll"
      class="headroom header">
      <div class="wrap">
        
        <ul class="site-nav site-nav-first">
          <li><a href="">POPULAR</a></li>
          <li><a href="">NOW PLAYING</a></li>
          <li><a href="">UPCOMING</a></li>

          <li class="header-banner">
            <a href="#" class="header-logo">
              <img src="@/assets/images/logo.png" alt="logo" >
            </a>
          </li>
          
          <li><a href="">WATCHLIST</a></li>
          <li><a href="">TV</a></li>
          <li><a href="">MOVIES</a></li>
        </ul>
        
      </div>
      
    </header>

    
    
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { moviesApi } from '@/api/movies-api-impl';

export default defineComponent({
  name: 'Header',
  methods: {
    async onSubmit() {
      console.log(this.searchInput);
      const result = await moviesApi.searchMovies({ query: this.searchInput });

      console.log(result);
    }
  },
  setup() {
    const searchInput = ref<string>('');

    return {
      searchInput
    };
  }
});
</script>
