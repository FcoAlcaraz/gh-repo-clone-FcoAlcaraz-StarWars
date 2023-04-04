import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { AppComponent } from './app.component';

@NgModule({
  imports: [CommonModule, HomeComponent, AppComponent],
  declarations: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
