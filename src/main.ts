import 'zone.js/dist/zone';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { bootstrapApplication } from '@angular/platform-browser';
import { HomeComponent } from './app/home/home.component';
import { AppComponent } from './app/app.component';

@Component({
  selector: 'my-app',
  standalone: true,
  imports: [CommonModule, HomeComponent, AppComponent],
  templateUrl: `./app/app.component.html`,
})
export class App {
  name = 'Angular';
}

bootstrapApplication(App);
