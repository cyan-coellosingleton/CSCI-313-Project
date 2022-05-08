import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrowseMoviesComponent } from './browse-movies/browse-movies.component';
import { HomeComponent } from './home/home.component';
import { MovieComponent } from './movie/movie.component';
import { ReserveTicketComponent } from './reserve-ticket/reserve-ticket.component';
import { ConfirmationPageComponent } from './confirmation-page/confirmation-page.component';
import { ComingSoonComponent } from './coming-soon/coming-soon.component';

const routes: Routes = [
  {path: "",pathMatch: "full",redirectTo: "home"},
  {path: "home",component:HomeComponent},
  {path: "browse-movies",component: BrowseMoviesComponent},
  {path: "movie",component: MovieComponent},
  {path: "reserve-ticket",component: ReserveTicketComponent},
  {path: "confirmation", component: ConfirmationPageComponent},
  {path: "coming-soon", component: ComingSoonComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
