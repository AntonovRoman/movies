<!-- This file defines the general "template" -->
<template>
  <!-- TODO: navigation/header will be here -->

  <!-- Router view renders specific components based on route definition -->
  <!-- kinda like content section -->
  <!-- src/router/index.ts -->
  <router-view></router-view>

  <!-- TODO: footer will be here -->
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'App'
});
</script>
