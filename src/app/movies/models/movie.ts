import { Actor } from '@app/movies/models';

export interface Movie {
  _id: string;
  imdbId: string;
  title: string;
  director: string;
  year: number;
  metascore: number;
  actors: Actor[];
  posterUrl: string;
}
