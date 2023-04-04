import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MovieDetailsComponent } from '../movie-details/movie-details.component';
import { Movie } from '../movies';
import { MoviesListComponent } from '../movies-list/movies-list.component';

@NgModule({
  declarations: [MovieDetailsComponent, MoviesListComponent],
  imports: [CommonModule, RouterModule, Movie],
  exports: [MovieDetailsComponent, MoviesListComponent],
})
export class MoviesModule {}
