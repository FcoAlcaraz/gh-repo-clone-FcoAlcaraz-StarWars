import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { ModalpopupComponent } from '../../../../modalpopup/modalpopup.component';
import { Character } from '../../../../shared/Interfaces/characterInterface';
import { IMovie } from '../../../../shared/Interfaces/imovie';
import { IPlanet } from '../../../../shared/Interfaces/iplanet';
import { ISpecie } from '../../../../shared/Interfaces/ispecie';
import { CharactersService } from '../../../../shared/services/characters.service';
import { MoviesService } from '../../../../shared/services/movies.service';
import { PlanetsService } from '../../../../shared/services/planets.service';
import { SpeciesService } from '../../../../shared/services/species.service';

import { CharactersImage } from '../CharactersImagesData';

@Component({
  selector: 'app-character-details',
  templateUrl: './character-details.component.html',
  styleUrls: ['./character-details.component.scss'],
})
export class CharacterDetailsComponent implements OnInit {
  //Lists for movie details attributes
  character: Character;
  movieSpecies: ISpecie[] = [];
  movies: IMovie[] = [];
  planet: IPlanet;

  //Data for Image movies src
  planetImages = [
    {
      name: 'Tatooine',
      url: 'https://swapi.dev/api/planets/1/',
      src: 'https://cdn.jsdelivr.net/gh/FcoAlcaraz/gh-repo-clone-FcoAlcaraz-StarWars@main/src/app/assets/imgs/planets/Tatooine.jpg',
    },
    {
      name: 'Alderaan',
      url: 'https://swapi.dev/api/planets/2/',
      src: 'https://cdn.jsdelivr.net/gh/FcoAlcaraz/gh-repo-clone-FcoAlcaraz-StarWars@main/src/app/assets/imgs/planets/Alderaan.jpeg',
    },
    {
      name: 'Yavin IV',
      url: 'https://swapi.dev/api/planets/3/',
      src: '/assets/imgs/planets/YavinIV.jpg',
    },
    {
      name: 'Hoth',
      url: 'https://swapi.dev/api/planets/4/',
      src: '/assets/imgs/planets/Hoth.jpg',
    },
    {
      name: 'Dagobah',
      url: 'https://swapi.dev/api/planets/5/',
      src: 'https://cdn.jsdelivr.net/gh/FcoAlcaraz/gh-repo-clone-FcoAlcaraz-StarWars@main/src/app/assets/imgs/planets/Dagobah.jpg',
    },
    {
      name: 'Bespin',
      url: 'https://swapi.dev/api/planets/6/',
      src: 'https://cdn.jsdelivr.net/gh/FcoAlcaraz/gh-repo-clone-FcoAlcaraz-StarWars@main/src/app/assets/imgs/planets/Bespin.jpg',
    },
    {
      name: 'Endor',
      url: 'https://swapi.dev/api/planets/7/',
      src: 'https://cdn.jsdelivr.net/gh/FcoAlcaraz/gh-repo-clone-FcoAlcaraz-StarWars@main/src/app/assets/imgs/planets/Endor.jpg',
    },
    {
      name: 'Naboo',
      url: 'https://swapi.dev/api/planets/8/',
      src: '/assets/imgs/planets/Naboo.jpg',
    },
    {
      name: 'Coruscant',
      url: 'https://swapi.dev/api/planets/9/',
      src: '/assets/imgs/planets/Coruscant.jpg',
    },
    {
      name: 'Kamino',
      url: 'https://swapi.dev/api/planets/10/',
      src: '/assets/imgs/planets/Kamino.jpg',
    },
    {
      name: 'Geonosis',
      url: 'https://swapi.dev/api/planets/11/',
      src: '/assets/imgs/planets/Geonosis.jpg',
    },
    {
      name: 'Utapau',
      url: 'https://swapi.dev/api/planets/12/',
      src: '/assets/imgs/planets/Utapau.jpg',
    },
    {
      name: 'Mustafar',
      url: 'https://swapi.dev/api/planets/13/',
      src: '/assets/imgs/planets/Mustafar.jpg',
    },
    {
      name: 'Polis Massa',
      url: 'https://swapi.dev/api/planets/14/',
      src: '/assets/imgs/planets/PolisMassa.jpg',
    },
    {
      name: 'Mygeeto',
      url: 'https://swapi.dev/api/planets/16/',
      src: '/assets/imgs/planets/Mygeeto.jpg',
    },
    {
      name: 'Felucia',
      url: 'https://swapi.dev/api/planets/17/',
      src: 'https://cdn.jsdelivr.net/gh/FcoAlcaraz/gh-repo-clone-FcoAlcaraz-StarWars@main/src/app/assets/imgs/planets/Felucia.jpg',
    },
    {
      name: 'Cato Neimoidia',
      url: 'https://swapi.dev/api/planets/18/',
      src: 'https://cdn.jsdelivr.net/gh/FcoAlcaraz/gh-repo-clone-FcoAlcaraz-StarWars@main/src/app/assets/imgs/planets/CatoNeimoidia.jpg',
    },
    {
      name: 'Saleucami',
      url: 'https://swapi.dev/api/planets/19/',
      src: '/assets/imgs/planets/Stewjon.jpeg',
    },
    {
      name: 'Stewjon',
      url: 'https://swapi.dev/api/planets/20/',
      src: '/assets/imgs/planets/Stewjon.jpg',
    },
    {
      name: 'Eriadu',
      url: 'https://swapi.dev/api/planets/21/',
      src: 'https://cdn.jsdelivr.net/gh/FcoAlcaraz/gh-repo-clone-FcoAlcaraz-StarWars@main/src/app/assets/imgs/planets/Eriadu.jpg',
    },
    {
      name: 'Corellia',
      url: 'https://swapi.dev/api/planets/22/',
      src: 'https://cdn.jsdelivr.net/gh/FcoAlcaraz/gh-repo-clone-FcoAlcaraz-StarWars@main/src/app/assets/imgs/planets/Corellia.jpg',
    },
    {
      name: 'Rodia',
      url: 'https://swapi.dev/api/planets/23/',
      src: '/assets/imgs/planets/Rodia.jpg',
    },
    {
      name: 'Nal Hutta',
      url: 'https://swapi.dev/api/planets/24/',
      src: '/assets/imgs/planets/NalHutta.jpg',
    },
    {
      name: 'Dantooine',
      url: 'https://swapi.dev/api/planets/25/',
      src: 'https://cdn.jsdelivr.net/gh/FcoAlcaraz/gh-repo-clone-FcoAlcaraz-StarWars@main/src/app/assets/imgs/planets/Dantooine.jpg',
    },
    {
      name: 'Bestine IV',
      url: 'https://swapi.dev/api/planets/26/',
      src: 'https://cdn.jsdelivr.net/gh/FcoAlcaraz/gh-repo-clone-FcoAlcaraz-StarWars@main/src/app/assets/imgs/planets/Coruscant.jpg',
    },
    {
      name: 'Ord Mantell',
      url: 'https://swapi.dev/api/planets/27/',
      src: '/assets/imgs/planets/Kamino.jpg',
    },
    {
      name: 'unknown',
      url: 'https://swapi.dev/api/planets/28/',
      src: '/assets/imgs/planets/Geonosis.jpg',
    },
    {
      name: 'Trandosha',
      url: 'https://swapi.dev/api/planets/29/',
      src: '/assets/imgs/planets/Utapau.jpg',
    },
    {
      name: 'Socorro',
      url: 'https://swapi.dev/api/planets/30/',
      src: '/assets/imgs/planets/Utapau.jpg',
    },
    {
      name: 'Mon Cala',
      url: 'https://swapi.dev/api/planets/31/',
      src: '/assets/imgs/planets/Utapau.jpg',
    },
    {
      name: 'Chandrila',
      url: 'https://swapi.dev/api/planets/32/',
      src: '/assets/imgs/planets/Utapau.jpg',
    },
    {
      name: 'Sullust',
      url: 'https://swapi.dev/api/planets/33/',
      src: '/assets/imgs/planets/Utapau.jpg',
    },
    {
      name: 'Toydaria',
      url: 'https://swapi.dev/api/planets/34/',
      src: '/assets/imgs/planets/Tatooine.jpg',
    },
    {
      name: 'Malastare',
      url: 'https://swapi.dev/api/planets/35/',
      src: '/assets/imgs/planets/Alderaan.jpg',
    },
    {
      name: 'Dathomir',
      url: 'https://swapi.dev/api/planets/36/',
      src: '/assets/imgs/planets/Alderaan.jpg',
    },
    {
      name: 'Ryloth',
      url: 'https://swapi.dev/api/planets/37/',
      src: '/assets/imgs/planets/Ryloth.jpg',
    },
    {
      name: 'Aleen Minor',
      url: 'https://swapi.dev/api/planets/38/',
      src: '/assets/imgs/planets/YavinIV.jpg',
    },
    {
      name: 'Vulpter',
      url: 'https://swapi.dev/api/planets/39/',
      src: '/assets/imgs/planets/Hoth.jpg',
    },
    {
      name: 'Troiken',
      url: 'https://swapi.dev/api/planets/40/',
      src: 'https://cdn.jsdelivr.net/gh/FcoAlcaraz/gh-repo-clone-FcoAlcaraz-StarWars@main/src/app/assets/imgs/planets/Dagobah.jpg',
    },
    {
      name: 'Tund',
      url: 'https://swapi.dev/api/planets/41/',
      src: '/assets/imgs/planets/Bespin.jpg',
    },
    {
      name: 'Haruun Kal',
      url: 'https://swapi.dev/api/planets/42/',
      src: '/assets/imgs/planets/Endor.jpg',
    },
    {
      name: 'Cerea',
      url: 'https://swapi.dev/api/planets/43/',
      src: '/assets/imgs/planets/Naboo.jpg',
    },
    {
      name: 'Glee Anselm',
      url: 'https://swapi.dev/api/planets/44/',
      src: '/assets/imgs/planets/Coruscant.jpg',
    },
    {
      name: 'Iridonia',
      url: 'https://swapi.dev/api/planets/45/',
      src: '/assets/imgs/planets/Kamino.jpg',
    },
    {
      name: 'Tholoth',
      url: 'https://swapi.dev/api/planets/46/',
      src: '/assets/imgs/planets/Geonosis.jpg',
    },
    {
      name: 'Iktotch',
      url: 'https://swapi.dev/api/planets/47/',
      src: '/assets/imgs/planets/Utapau.jpg',
    },
    {
      name: 'Quermia',
      url: 'https://swapi.dev/api/planets/48/',
      src: '/assets/imgs/planets/Utapau.jpg',
    },
    {
      name: 'Dorin',
      url: 'https://swapi.dev/api/planets/49/',
      src: '/assets/imgs/planets/Utapau.jpg',
    },
    {
      name: 'Champala',
      url: 'https://swapi.dev/api/planets/50/',
      src: '/assets/imgs/planets/Utapau.jpg',
    },
    {
      name: 'Mirial',
      url: 'https://swapi.dev/api/planets/51/',
      src: '/assets/imgs/planets/Utapau.jpg',
    },
    {
      name: 'Serenno',
      url: 'https://swapi.dev/api/planets/52/',
      src: '/assets/imgs/planets/Tatooine.jpg',
    },
    {
      name: 'Concord Daw',
      url: 'https://swapi.dev/api/planets/53/',
      src: '/assets/imgs/planets/Alderaan.jpg',
    },
    {
      name: 'Zolan',
      url: 'https://swapi.dev/api/planets/54/',
      src: '/assets/imgs/planets/YavinIV.jpg',
    },
    {
      name: 'Ojom',
      url: 'https://swapi.dev/api/planets/55/',
      src: '/assets/imgs/planets/Hoth.jpg',
    },
    {
      name: 'Skako',
      url: 'https://swapi.dev/api/planets/56/',
      src: '/assets/imgs/planets/Dagobah.jpg',
    },
    {
      name: 'Muunilinst',
      url: 'https://swapi.dev/api/planets/57/',
      src: '/assets/imgs/planets/Bespin.jpg',
    },
    {
      name: 'Shili',
      url: 'https://swapi.dev/api/planets/58/',
      src: '/assets/imgs/planets/Endor.jpg',
    },
    {
      name: 'Kalee',
      url: 'https://swapi.dev/api/planets/59/',
      src: '/assets/imgs/planets/Naboo.jpg',
    },
    {
      name: 'Umbara',
      url: 'https://swapi.dev/api/planets/60/',
      src: '/assets/imgs/planets/Coruscant.jpg',
    },
  ];

  //state from accordion menus
  panelSpeciesOpenState = false;
  panelBodySpecsOpenState = false;
  panelFilmsOpenState = false;

  constructor(
    private charactersService: CharactersService,
    private route: ActivatedRoute,
    private speciesServices: SpeciesService,
    private moviesService: MoviesService,
    private planetService: PlanetsService,
    private matDialog: MatDialog
  ) {}

  ngOnInit() {
    this.route.params.subscribe((params) =>
      this.getCharacterById(params['id'])
    );
  }

  //Implement in case Character Component exist
  getAllCharacters() {}

  //GET: Character by id:
  getCharacterById(id: number) {
    //Request to Character Service retrieve Character type object
    this.charactersService.getCharacter(id).subscribe((data: Character) => {
      this.character = this.addcharacterImgsSrc(data);

      //Additional movie information
      //GET: Species, Movies, Planets
      this.getSpeciesByUrl(data.species);
      this.getMoviesByUrl(data.films);
      this.getPlanetsByUrl(data.homeworld);
    });
  }

  getCharacterByUrl(Url: string) {
    this.charactersService
      .getCharacterByUrl(Url)
      .subscribe((data: Character) => {
        this.character = data;

        this.getSpeciesByUrl(data.species);
        this.getMoviesByUrl(data.films);
        this.getPlanetsByUrl(data.homeworld);
      });
  }

  //GET: Species
  getSpeciesByUrl(species: string[]) {
    species.forEach((x) =>
      this.speciesServices.getSpecieByUrl(x).subscribe((data: any) => {
        this.movieSpecies.push(data);
      })
    );
  }

  getMoviesByUrl(movies: string[]) {
    movies.forEach((x) =>
      this.moviesService.getMovieByUrl(x).subscribe((data: any) => {
        this.movies.push(data);
      })
    );
  }

  getPlanetsByUrl(planet: string) {
    this.planetService.getPlanetsByUrl(planet).subscribe((data: any) => {
      this.planet = data;
    });
  }

  //Call to Dialog Planet Info
  openDialog(planet: IPlanet) {
    this.matDialog.open(ModalpopupComponent, {
      enterAnimationDuration: `700ms`,
      exitAnimationDuration: `300ms`,
      hasBackdrop: true,
      data: {
        data: planet,
        modalmg: this.getPlanetImg(planet),
      },
    });
  }
  //GEt: Planet Image Src string from Const List planetImages
  getPlanetImg(planet: any) {
    let planetSrcImg = this.planetImages.find(
      (planets) => planets.url === planet.url
    )?.src;
    return planetSrcImg;
  }

  addcharacterImgsSrc(character: any) {
    let imgcharacterSrc = this.getMovieImg(character);
    character.src = imgcharacterSrc;
    //console.log("addcharacterImgsSrc",character)
    return character;
  }

  getMovieImg(character: any) {
    let characterSrcImg = CharactersImage.find(
      (characters) => characters.url === character.url
    )?.src;
    return characterSrcImg;
  }
}
