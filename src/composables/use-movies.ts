import { inject, reactive } from 'vue';
import { Movie, SearchRequest } from '@/api/movies-api';
import { MoviesInjectionKey } from '@/symbols';
import { MOVIES_IMAGE_BASE_URL } from '@/constants';

// this interface defines our movie state object
// kinda like internal storage where we can cache/persists data
// some info @link https://www.thisdot.co/blog/custom-composable-methods-with-vue-3
export interface MoviesState {
  popularMovies: Movie[];
  searchMovies: Movie[];
  loading: boolean;
  error?: Error;
  imageBasePath?: string;
}

export interface MoviesStore {
  state: Readonly<MoviesState>;
  fetchPopularMovies(): Promise<void>;
  searchMovies(request: SearchRequest): Promise<void>;
  getMovieImage(poster: string, size?: number): string;
}

// this can be exposed and accessed inside our views/components during setup stage
const state = reactive<MoviesState>({
  popularMovies: [],
  searchMovies: [],
  loading: false
});

export const useMovies = (): MoviesStore => {
  const moviesApi = inject(MoviesInjectionKey);

  const fetchPopularMovies = async (): Promise<void> => {
    state.loading = true;
    const result = await moviesApi?.getPopularMovies();
    state.loading = false;
    state.popularMovies = result?.results || [];
  };

  const searchMovies = async (request: SearchRequest): Promise<void> => {
    const result = await moviesApi?.searchMovies(request);
    state.searchMovies = result?.results || [];
  };

  const getMovieImage = (poster: string, size?: number): string => {
    const path = size ? `w${size}` : 'original';
    return `${MOVIES_IMAGE_BASE_URL}/${path}/${poster}`;
  };

  return {
    state,
    fetchPopularMovies,
    searchMovies,
    getMovieImage
  };
};
