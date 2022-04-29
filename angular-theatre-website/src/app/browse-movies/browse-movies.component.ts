import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-browse-movies',
  templateUrl: './browse-movies.component.html',
  styleUrls: ['./browse-movies.component.css']
})
export class BrowseMoviesComponent implements OnInit {

   movies: {poster: string; title: string, genre: string, year: string, description: string, duration: string; times: string[]}[] = [];
  selectedMovie: any;
  
  constructor(public dataService: DataService) { }

  ngOnInit(): void {
    this.movies = this.dataService.getMovies();
  }

  public selectMovie(movie: any){
    this.selectedMovie = movie;
  }

  public getMovieInfo(Movie: {poster: any, title: any, genre: any, year: any, description: string, duration: string, times: string[]}){
    this.dataService.movieInfo = Movie;
  }

}
