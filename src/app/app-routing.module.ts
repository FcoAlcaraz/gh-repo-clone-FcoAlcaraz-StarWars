import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { CharacterDetailsComponent } from './components/pages/characters/character-details/character-details.component';
import { CharactersComponent } from './components/pages/characters/characters.component';
import { MovieDetailsComponent } from './components/pages/movies/movie-details/movie-details.component';
import { MoviesListComponent } from './components/pages/movies/movies-list/movies-list.component';
import { CharacterResolverService } from './shared/services/character-resolver.service';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    component: HomeComponent,
    data: { breadcrumb: 'Home' },
  },
  {
    path: 'characters',
    component: CharactersComponent,
    data: { breadcrumb: 'characters' }, // hardcoded string
    // children: [
    //   {
    //     path: 'character-details/:id',
    //     component: CharacterDetailsComponent,
    //     data: { breadcrumb: (data: any) => `${data.character.name}` }, // dymanic
    //     resolve: { character: CharacterResolverService },
    //   },
    // ],
  },
  {
    path: 'character-details/:id',
    component: CharacterDetailsComponent,
  },
  {
    path: 'films',
    component: MoviesListComponent,
    data: { breadcrumb: 'Films' },
    // children: [
    //   {
    //     path: 'character-details/:id',
    //     component: CharacterDetailsComponent,
    //     data: { breadcrumb: (data: any) => `${data.character.name}` }, // dymanic
    //     resolve: { character: CharacterResolverService },
    //   },
    // ],
    //children: [
    //],
  },
  {
    path: 'movie-details/:id',
    component: MovieDetailsComponent,
    data: { breadcrumb: 'Film Details' },
  },
];

// const routes: Routes = [
//   {
//     path: '',
//     redirectTo: '/home',
//     pathMatch: 'full',
//   },
//   {
//     path: 'home',
//     component: HomeComponent,
//     data: { breadcrumb: 'Home' },
//   },
//   {
//     path: 'characters',
//     component: CharactersComponent,
//     data: { breadcrumb: 'characters' }, // hardcoded string
//     children: [
//       {
//         path: 'character-details/:id',
//         component: CharacterDetailsComponent,
//         data: { breadcrumb: (data: any) => `${data.character.name}` }, // dymanic
//         resolve: { character: CharacterResolverService },
//       },
//     ],
//   },
//   {
//     path: 'character-details/:id',
//     component: CharacterDetailsComponent,
//   },
//   {
//     path: 'films',
//     component: MoviesListComponent,
//     data: { breadcrumb: 'Films' },
//     children: [
//       {
//         path: 'character-details/:id',
//         component: CharacterDetailsComponent,
//         data: { breadcrumb: (data: any) => `${data.character.name}` }, // dymanic
//         resolve: { character: CharacterResolverService },
//       },
//     ],
//     //children: [
//     //],
//   },
//   {
//     path: 'movie-details/:id',
//     component: MovieDetailsComponent,
//     data: { breadcrumb: 'Film Details' },
//   },
// ];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes, { enableTracing: false }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
export const routingComponents = [
  HomeComponent,
  MoviesListComponent,
  MovieDetailsComponent,
  CharacterDetailsComponent,
  CharactersComponent,
];
