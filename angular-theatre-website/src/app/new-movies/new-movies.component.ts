import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-new-movies',
  templateUrl: './new-movies.component.html',
  styleUrls: ['./new-movies.component.css']
})
export class NewMoviesComponent implements OnInit {
  newmovie : {poster: string, title: string, genre: string, year: string, description: string, duration: string} = {poster: "", title: "", genre: "", year: "", description: "", duration: ""};

  constructor(public dataService: DataService) { }

  ngOnInit(): void {
    this.newmovie= this.dataService.movieInfo;
  }

  public getNewMovieInfo(newmovie: {poster: any, title: any, genre: any, year: any, description: string, duration: string}){
    this.dataService.movieInfo = newmovie;
  }

  


}
