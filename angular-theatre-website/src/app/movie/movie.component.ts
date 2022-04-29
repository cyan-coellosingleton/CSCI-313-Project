import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {

  movie : {poster: string, title: string, genre: string, year: string, description: string, duration: string, times: string[]} = {poster: "", title: "", genre: "", year: "", description: "", duration: "", times: []};

  constructor(public dataService: DataService) { }

  ngOnInit(): void {
    this.movie= this.dataService.movieInfo;
  }

  public getMovieInfo(Movie: {poster: any, title: any, genre: any, year: any, description: string, duration: string, times: string[]}){
    this.dataService.movieInfo = Movie;
  }

  

}
