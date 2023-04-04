import 'zone.js/dist/zone';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { HeaderComponent } from './app/shared/components/header/header.component';
import { BreadcrumbComponent } from './app/shared/components/breadcrumb/breadcrumb.component';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './app/components/home/home.component';

@Component({
  selector: 'my-app',
  standalone: true,
  imports: [
    CommonModule,
    HomeComponent,
    AppComponent,
    HeaderComponent,
    // BreadcrumbComponent,
    RouterModule,
  ],
  templateUrl: `./app/app.component.html`,
})
export class App {
  name = 'Angular';
}

bootstrapApplication(App);
// import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

// import { AppModule } from './app/app.module';

// platformBrowserDynamic()
//   .bootstrapModule(AppModule)
//   .catch((err) => console.error(err));
