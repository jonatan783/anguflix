import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ListNavbarComponent } from './components/navbar/list-navbar/list-navbar.component';
import { OpeningMovieComponent } from './components/opening-movie/opening-movie.component';
import { MovieGridComponent } from './components/movie-grid/movie-grid.component';
import { SingleMovieComponent } from './components/single-movie/single-movie.component';
import { PlayMovieComponent } from './components/play-movie/play-movie.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    OpeningMovieComponent,
    MovieGridComponent,
    SingleMovieComponent,
    PlayMovieComponent,
    ListNavbarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
