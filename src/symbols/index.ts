import { InjectionKey } from 'vue';
import { MoviesApi } from '@/api/movies-api';

export const MoviesInjectionKey: InjectionKey<MoviesApi> = Symbol('MoviesApi');
