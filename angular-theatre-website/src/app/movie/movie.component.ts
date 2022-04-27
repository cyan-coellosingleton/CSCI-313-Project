import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {

  movie : {poster: string, title: string, genre: string, year: string, description: string} = {poster: "", title: "", genre: "", year: "", description: ""};

  constructor(public dataService: DataService) { }

  ngOnInit(): void {
    this.movie= this.dataService.movieInfo;
  }

  

}
