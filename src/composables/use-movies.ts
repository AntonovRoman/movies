import { computed, ComputedRef, reactive } from 'vue';
import { Movie, SearchRequest } from '@/api/movies-api';
import { MOVIES_IMAGE_BASE_URL } from '@/constants';
import { moviesApi } from '@/api/movies-api-impl';

// this interface defines our movie state object
// kinda like internal storage where we can cache/persist data
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

  getBannerMovie(): ComputedRef<Movie>;

  clearSearchMovies(): void;
}

// this can be exposed and accessed inside our views/components during setup stage
const state = reactive<MoviesState>({
  popularMovies: [],
  searchMovies: [],
  loading: false
});

export const useMovies = (): MoviesStore => {
  /**
   * Performs an API call to fetch popular movies and updates state
   * @return {Promise<void>}
   */
  const fetchPopularMovies = async (): Promise<void> => {
    state.loading = true;
    const result = await moviesApi.getPopularMovies();
    state.loading = false;
    state.popularMovies = result?.results || [];
  };

  /**
   * Performs a search API call and updates state
   *
   * @param {SearchRequest} request
   * @return {Promise<void>}
   */
  const searchMovies = async (request: SearchRequest): Promise<void> => {
    const result = await moviesApi.searchMovies(request);
    state.searchMovies = result?.results || [];
  };

  /**
   * Computes an image url based on movie poster property
   * and base path @link https://image.tmdb.org/t/p
   *
   * @param {string} poster - image path
   * @param {number} size - image size
   * @return {string}
   */
  const getMovieImage = (poster: string, size?: number): string => {
    const path = size ? `w${size}` : 'original';
    return `${MOVIES_IMAGE_BASE_URL}/${path}${poster}`;
  };

  const clearSearchMovies = (): void => {
    state.searchMovies = [];
  };

  const getBannerMovie = (): ComputedRef<Movie> => {
    return computed(
      () =>
        state.popularMovies[
          Math.floor(Math.random() * state.popularMovies.length)
        ]
    );
  };

  return {
    state,
    fetchPopularMovies,
    searchMovies,
    getMovieImage,
    getBannerMovie,
    clearSearchMovies
  };
};
