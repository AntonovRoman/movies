<template>
  <header
    :class="{ 'headroom--unpinned': scrolled }"
    v-on="handleScroll"
    class="headroom header"
  >
    <div class="header-banner">
      <h1>Visit Finland</h1>
    </div>
    <div class="clear"></div>
    <nav>
      <div class="site-title">Finland</div>
      <ul>
        <li><a href="">Archive</a></li>
        <li><a href="">Events</a></li>
        <li><a href="">Contact</a></li>
      </ul>
    </nav>
    <input
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
        py-2
        px-4
        text-base text-gray-900
        placeholder-gray-500
        focus:outline-none
        focus:ring-indigo-500
        focus:border-indigo-500
        focus:placeholder-gray-400
      "
    />
    <p>{{ searchInput }}</p>
  </header>
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
