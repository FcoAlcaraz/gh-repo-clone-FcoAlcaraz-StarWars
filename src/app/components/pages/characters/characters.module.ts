import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CharactersComponent } from './characters.component';

@NgModule({
  declarations: [CharactersComponent],
  imports: [CommonModule, RouterModule],
  exports: [CharactersComponent],
})
export class CharactersModule {}
