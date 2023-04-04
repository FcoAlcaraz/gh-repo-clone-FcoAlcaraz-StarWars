import { Movie } from '../../components/pages/movies/movies';

export interface IMovie extends Movie {
  src: any;
  characters: string[];
  created: string;
  director: string;
  edited: string;
  episode_id: number;
  opening_crawl: string;
  planets: string[];
  producer: string;
  release_date: string;
  species: string[];
  starships: [];
  title: string; //this is a search filter
  url: string;
  vehicles: [];
}
