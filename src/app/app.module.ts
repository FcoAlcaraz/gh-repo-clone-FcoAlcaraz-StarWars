import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { AppComponent } from './app.component';

@NgModule({
  imports: [CommonModule, HomeComponent, MatToolbarModule, AppComponent],
  declarations: [],
  exports: [],
  bootstrap: [],
})
export class AppModule {}
