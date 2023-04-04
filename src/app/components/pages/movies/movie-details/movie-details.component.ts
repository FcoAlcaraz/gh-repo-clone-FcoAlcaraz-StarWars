import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Character } from '../../../../shared/interfaces/characterInterface';
import { IMovie } from '../../../../shared/interfaces/imovie';
import { IPlanet } from '../../../../shared/interfaces/iplanet';
import { ISpecie } from '../../../../shared/interfaces/ispecie';
import { IStarship } from '../../../../shared/interfaces/istarship';
import { CharactersService } from '../../../../shared/services/characters.service';
import { MoviesService } from '../../../../shared/services/movies.service';
import { PlanetsService } from '../../../../shared/services/planets.service';
import { SpeciesService } from '../../../../shared/services/species.service';
import { StarshipsService } from '../../../../shared/services/starships.service';
import { VehiclesService } from '../../../../shared/services/vehicles.service';
import { MovieImages } from '../MoviesImagesData';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.scss'],
})
export class MovieDetailsComponent {
  //Lists for movie details attributes
  movieDetails: IMovie;
  movieCharacters: Character[] = [];
  movieSpecies: ISpecie[] = [];
  movieStarships: IStarship[] = [];
  moviePlanets: IPlanet[] = [];
  movieVehicles: IPlanet[] = [];

  //States for accordion panel togglers
  panelCharactersOpenState = false;
  panelSpeciesOpenState = false;
  panelStarshipsOpenState = false;
  panelVehiclesOpenState = false;
  panelPlanetsOpenState = false;

  constructor(
    private moviesService: MoviesService,
    private route: ActivatedRoute,
    private charactersService: CharactersService,
    private speciesServices: SpeciesService,
    private starShipsService: StarshipsService,
    private planetService: PlanetsService,
    private vehiclesService: VehiclesService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => this.getMovie(params[`id`]));
  }

  //GET: Movie by id:
  getMovie(id: number) {
    this.moviesService.getMovie(id).subscribe((data: any) => {
      //console.log(data)
      this.movieDetails = this.addMoviesImgsSrc(data);

      //Additional movie information
      //GET: Characters, Species, Starships, Planets, Vehivles
      this.getMovieCharacters(data.characters);
      this.getMovieSpecies(data.species);
      this.getMovieStarships(data.starships);
      this.getMoviePlanets(data.planets);
      this.getMovieVehicles(data.vehicles);
    });
  }

  //GET: Characters
  getMovieCharacters(characters: string[]) {
    characters.forEach((x) =>
      this.charactersService.getCharacterByUrl(x).subscribe((data: any) => {
        this.movieCharacters.push(data);
        this.addId(this.movieCharacters);
      })
    );
  }

  addId(characters: any[]) {
    for (var i = 0; i < characters.length; i++) {
      let splitedUrl = characters[i].url.split('/');
      let characterAssignedId = splitedUrl[5]; //Value of the on API service
      characters[i].id = characterAssignedId;
    }
    this.movieCharacters = characters;
  }

  //GET: Species
  getMovieSpecies(species: string[]) {
    species.forEach((x) =>
      this.speciesServices.getSpecieByUrl(x).subscribe((data: any) => {
        this.movieSpecies.push(data);
      })
    );
  }
  //GET: Starships
  getMovieStarships(starships: string[]) {
    starships.forEach((x) =>
      this.starShipsService.getStarshipByUrl(x).subscribe((data: any) => {
        this.movieStarships.push(data);
      })
    );
  }
  //GET: Planets
  getMoviePlanets(planets: string[]) {
    planets.forEach((x) =>
      this.planetService.getPlanetsByUrl(x).subscribe((data: any) => {
        this.moviePlanets.push(data);
      })
    );
  }
  //GET: Vehivles
  getMovieVehicles(vehicles: string[]) {
    vehicles.forEach((x) =>
      this.vehiclesService.getVechicleByUrl(x).subscribe((data: any) => {
        this.movieVehicles.push(data);
      })
    );
  }

  //GET
  getCharacterByUrl(Url: string) {
    this.router.navigateByUrl(Url);
  }

  addMoviesImgsSrc(films: any) {
    let imgMovieSrc = this.getMovieImg(films);
    films.src = imgMovieSrc;
    return films;
  }

  getMovieImg(movie: any) {
    let planetSrcImg = MovieImages.find(
      (movies) => movies.url === movie.url
    )?.src;
    return planetSrcImg;
  }
}
