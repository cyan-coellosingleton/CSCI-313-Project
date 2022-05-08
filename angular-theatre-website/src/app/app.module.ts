import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowseMoviesComponent } from './browse-movies/browse-movies.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MovieComponent } from './movie/movie.component';
import { ReserveTicketComponent } from './reserve-ticket/reserve-ticket.component';
import { ConfirmationPageComponent } from './confirmation-page/confirmation-page.component';
import { ComingSoonComponent } from './coming-soon/coming-soon.component';
import { NewMoviesComponent } from './new-movies/new-movies.component';

@NgModule({
  declarations: [
    AppComponent,
    BrowseMoviesComponent,
    HeaderComponent,
    HomeComponent,
    MovieComponent,
    ReserveTicketComponent,
    ConfirmationPageComponent,
    ComingSoonComponent,
    NewMoviesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
