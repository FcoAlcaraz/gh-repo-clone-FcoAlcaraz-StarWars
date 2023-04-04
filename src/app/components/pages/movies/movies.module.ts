import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { RouterModule } from '@angular/router';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { MoviesListComponent } from './movies-list/movies-list.component';
import { MatExpansionModule } from '@angular/material/expansion';

@NgModule({
  declarations: [MovieDetailsComponent, MoviesListComponent],
  imports: [
    CommonModule,
    RouterModule,
    MatCardModule,
    MatListModule,
    MatExpansionModule,
  ],
  exports: [
    MovieDetailsComponent,
    MoviesListComponent,
    MatCardModule,
    MatListModule,
    MatExpansionModule,
  ],
})
export class MoviesModule {}
