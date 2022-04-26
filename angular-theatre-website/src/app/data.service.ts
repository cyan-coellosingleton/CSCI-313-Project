import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  movies = [
    {poster: '/assets/images/blank.jpg' ,title: 'Carrot Tales', genre: 'Childrens', year: '2022'},
    {poster:  '/assets/images/blank.jpg' ,title: 'Attack of the Snakes', genre: 'Horror', year: '2022'},
    {poster: '/assets/images/blank.jpg' ,title: 'Computer Fake', genre: 'Sci-Fi', year: '2022'  },
    {poster: '/assets/images/blank.jpg' ,title: 'Jomep and Ruliet', genre: 'Romace', year: '2022'  }
  ]

  constructor() { }

public getMovies():Array<{poster: string, title: string, genre: string, year: string}>{
  return this.movies;
}

}
