<template>
  <div class="header-wrap">
    <SearchMovie></SearchMovie>
    <header :class="{ 'headroom--unpinned': scrolled }" class="headroom header">
      <div class="wrap">
        <ul class="site-nav site-nav-first">
          <li><a href="">POPULAR</a></li>
          <li><a href="">NOW PLAYING</a></li>
          <li><a href="">UPCOMING</a></li>

          <li class="header-banner">
            <a href="#" class="header-logo">
              <img src="@/assets/images/logo.png" alt="logo" />
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
import SearchMovie from '@/components/SearchMovie.vue';

export default defineComponent({
  name: 'Header',
  components: { SearchMovie },
  setup() {
    const scrolled = ref<boolean>(false);

    return {
      scrolled
    };
  }
});
</script>
