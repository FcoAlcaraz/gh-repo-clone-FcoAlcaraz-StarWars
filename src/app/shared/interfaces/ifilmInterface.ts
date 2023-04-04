import { Character } from './characterInterface';

export interface Film {
  counts: number;
  next: any;
  previous: any;
  results: [
    characters: Character[],
    created: string,
    director: string,
    edited: Date,
    episode_id: number,
    opening_crawl: string,
    planets: [],
    producer: string,
    release_date: Date,
    species: [],
    starships: [],
    title: string, //this is a search filter
    url: string,
    vehicles: []
  ];
}
