import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import queryString from 'query-string';
import Home from '@/views/Home.vue';
import Movie from '@/components/Movie.vue';

// @link https://router.vuejs.org/
const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/movies/:id',
    name: 'movie',
    component: Movie
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  parseQuery: queryString.parse,
  stringifyQuery: queryString.stringify
});

export default router;
