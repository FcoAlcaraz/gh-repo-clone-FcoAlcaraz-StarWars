import { Component, Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ModalpopupComponent } from '../../../../modalpopup/modalpopup.component';
import { IMovie } from '../../../../shared/Interfaces/imovie';

import { MoviesService } from '../../../../shared/services/movies.service';
import { MovieImages } from '../MoviesImagesData';

@Component({
  // standalone: true,
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.scss'],
  providers: [MoviesService],
})
export class MoviesListComponent {
  films: IMovie[] = [];

  constructor(
    private moviesService: MoviesService,
    private matDialog: MatDialog
  ) {}

  //Load data on component charge
  ngOnInit(): void {
    this.moviesService.getMovies().subscribe((data: any) => {
      this.films = data.results;
      this.addMoviesImgsSrc(this.films);
    });
  }

  addMoviesImgsSrc(films: any) {
    for (var i = 0; i < films.length; i++) {
      let imgMovieSrc = this.getMovieImg(films[i]);
      films[i].src = imgMovieSrc;
      /*          console.log(this.films)*/
    }
    return films;
  }

  // Ordering methods by episode_id attribute
  // Ascendent episodes order
  sortOrderAsc() {
    this.moviesService.getMovies().subscribe((data: any) => {
      //Raw data
      this.films = data.results;
      //adding Img resource
      this.films = this.addMoviesImgsSrc(this.films);
      //sortOrderAsc
      this.films.sort(function (a: any, b: any) {
        return a.episode_id - b.episode_id;
      });
    });
  }

  // Default order
  defaultOrder() {
    this.moviesService.getMovies().subscribe((data: any) => {
      //Raw data
      this.films = data.results;
      //adding Img resource
      this.films = this.addMoviesImgsSrc(this.films);
      // Default order
      this.films.sort(function (a: any, b: any) {
        return a.episode_id + b.episode_id;
      });
    });
  }

  // Descendent order
  sortOrderDesc() {
    this.moviesService.getMovies().subscribe((data: any) => {
      //Raw data
      this.films = data.results;
      //adding Img resource
      this.films = this.addMoviesImgsSrc(this.films);
      // Sort Descendent
      this.films.sort(function (a: any, b: any) {
        return b.episode_id - a.episode_id;
      });
    });
  }

  //For open a More.. Dialog, use this method
  openDialog(movie: IMovie) {
    this.matDialog.open(ModalpopupComponent, {
      enterAnimationDuration: `700ms`,
      exitAnimationDuration: `300ms`,
      hasBackdrop: true,
      data: {
        data: movie,
        modalmg: this.getMovieImg(movie),
      },
    });
  }

  getMovieImg(movie: any) {
    let planetSrcImg = MovieImages.find(
      (movies) => movies.url === movie.url
    )?.src;
    return planetSrcImg;
  }
}
