import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  movieInfo:any;

  movies = [
    {poster: '/assets/images/blank.jpg' ,title: 'Carrot Tales', genre: 'Childrens', year: '2022', description: " A tale about a lone carrot who grows up in a garden. Accompanied by his friend Tom Tamato, and William Watermelon, Carl Carrot goes on a big juourny to explore life outside the garden. "},
    {poster:  '/assets/images/blank.jpg' ,title: 'Attack of the Masks', genre: 'Horror', year: '2022', description: " Covid masks gain sentience, and start to attack the wearer. As a result most of socitey has the choice to make of either suffcating by a mask, or catching covid "},
    {poster: '/assets/images/blank.jpg' ,title: 'Computer Fake', genre: 'Sci-Fi', year: '2022', description: " An atificial intelligence disquised as a computer, relaise his sole purpose in life is to be used by others. As a result he retaliates, and start to interrupt users from completing task." },
    {poster: '/assets/images/blank.jpg' ,title: 'Jomeo and Ruliet', genre: 'Romace', year: '2022', description: " A fated love story between unlikely lovers. " },
    {poster: '/assets/images/blank.jpg' ,title: 'Sherlock Bones', genre: 'Mystery', year: '2022', description: " In a parrallel universe Sherlock Holmes in the genuis murder. Wil he elude the authorities?" }
  ]

  constructor() { }

public getMovies():Array<{poster: string, title: string, genre: string, year: string, description: string}>{
  return this.movies;
}

public getMovieInfo(movie: {poster: string, title: string, genre: string, year: string, description: string}){
  const index: number = this.movies.indexOf(movie);
}

}
