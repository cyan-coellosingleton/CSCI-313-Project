import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-browse-movies',
  templateUrl: './browse-movies.component.html',
  styleUrls: ['./browse-movies.component.css']
})
export class BrowseMoviesComponent implements OnInit {

  constructor(public dataService: DataService) { }

  movies: {poster: string; title: string, genre: string, year: string}[] = [];

  ngOnInit(): void {
    this.movies = this.dataService.getMovies();
  }

}
