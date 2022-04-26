import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrowseMoviesComponent } from './browse-movies/browse-movies.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path: "",pathMatch: "full",redirectTo: "home"},
  {path: "home",component:HomeComponent},
  {path: "browse-movies",component: BrowseMoviesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
