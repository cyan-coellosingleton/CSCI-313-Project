import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-coming-soon',
  templateUrl: './coming-soon.component.html',
  styleUrls: ['./coming-soon.component.css']
})
export class ComingSoonComponent implements OnInit {

 
  newmovies: {poster: string; title: string, genre: string, year: string}[] = [];
  selectedMovie: any;
  
  constructor(public dataService: DataService) { }

  ngOnInit(): void {
    this.newmovies = this.dataService.getNewMovies();
  }

  public selectNewMovie(newmovie: any){
    this.selectedMovie = newmovie;
  }

  public getNewMovieInfo(newmovie: {poster: any, title: any, genre: any, year: any}){
    this.dataService.movieInfo = newmovie;
  }

}
