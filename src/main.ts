import { createApp } from 'vue';
import App from './App.vue';
import './assets/styles/index.css';
import router from '@/router';
import { MoviesApiImpl } from '@/api/movies-api-impl';
import { MoviesInjectionKey } from '@/symbols';

const app = createApp(App);

// we want to provide an instance of the class that has our API methods only once
// @link https://v3.vuejs.org/guide/composition-api-provide-inject.html
app.provide(MoviesInjectionKey, new MoviesApiImpl());

app.use(router).mount('#app');
