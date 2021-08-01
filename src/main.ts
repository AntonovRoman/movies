import { createApp } from 'vue';
import App from './App.vue';
import './assets/styles/index.css';
import './assets/styles/main.scss';
import router from '@/router';
import 'swiper/swiper-bundle.css';


const app = createApp(App);

app.use(router).mount('#app');
