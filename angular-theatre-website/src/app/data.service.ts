import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  movieInfo:any;
  times: any;

  tickets: any[] = [];

  movies = [
    {poster: '/assets/images/carrot.jpg' ,title: 'Carrot Tales', genre: "Childrens", year: '2022', description: " A tale about a lone carrot who grows up in a garden. Accompanied by his friend Tom Tamato, and William Watermelon, Carl Carrot goes on a big juourny to explore life outside the garden. ", duration: "1 hour", times:["11:15 am", "12:30 pm", "1:45 pm", "3:00 pm", "4:15 pm", "5:30 pm", "6:45 pm", "8:00pm"] },
    {poster:  '/assets/images/mask.jpg' ,title: 'Attack of the Masks', genre: 'Horror', year: '2022', description: " Covid masks gain sentience, and start to attack the wearer. As a result most of socitey has the choice to make of either suffcating by a mask, or catching covid ", duration: "1 hour 30 mins", times:["11:15 am","1:00 pm", "2:45 pm", "4:30 pm", "6:15 pm", "8:00 pm"]},
    {poster: '/assets/images/computer.jpg' ,title: 'Computer Fake', genre: 'Sci-Fi', year: '2022', description: " An atificial intelligence disquised as a computer, relaise his sole purpose in life is to be used by others. As a result he retaliates, and start to interrupt users from completing task.", duration: "1 hour 15 mins", times: ["11:15 am", "12:45 pm", "2:15 pm", "3:45pm", "5:15 pm", "6:45 pm", "8:15 pm"]},
    {poster: '/assets/images/heart.jpg' ,title: 'Jomeo and Ruliet', genre: 'Romace', year: '2022', description: " A fated love story between unlikely lovers. ", duration: "2 hours", times: ["11:15 am", "1:00 pm", "3:15 pm", "5:30 pm", "7:45 pm"]},
    {poster: '/assets/images/bones.jpg' ,title: 'Sherlock Bones', genre: 'Mystery', year: '2022', description: " In a parrallel universe Sherlock Holmes in the genuis murder. Wil he elude the authorities?", duration: "1 hour 45 mins", times: ["11:15 am", "1:15 pm", "3:15pm", "5:15 pm", "7:15 pm"]},
    {poster: '/assets/images/desert.jpg' ,title: 'Prince Ali', genre: 'Action', year: '2022', description: " A majestic tale of treachery, love, and the heat of the desert. Be transported to a land of theives, genies, and sultuns. Follow the story of a young boy named Ali as he follows his dream of becoming the richest man alive.", duration: "2 hour 30 mins", times: ["11:15 am", "12:45 pm", "2:15 pm", "3:45pm", "5:15 pm", "6:45 pm", "8:15 pm"]},
    {poster: '/assets/images/odd.jpg' ,title: 'Doctor Odd 2', genre: 'Action', year: '2022', description: " The sequel to the much acclaimed Doctor Odd 2. Follow the good doctor as  he continues to explore the possibility of a multi reality! ", duration: "2 hours", times: ["11:15 am", "1:00 pm", "3:15 pm", "5:30 pm", "7:45 pm"]},
    {poster: '/assets/images/blue.jpg' ,title: 'Turning Blue', genre: "Childrens", year: '2022', description: " Follow a young girl named Kit as she discovers the pains of growing up. Her family has held a huge secret from her and  it may have to do with her favorite animal, th  dolphin!", duration: "1 hour 45 mins", times: ["11:15 am", "1:15 pm", "3:15pm", "5:15 pm", "7:15 pm"]}
  
  ]

  constructor() { }

public getMovies():Array<{poster: string, title: string, genre: string, year: string, description: string, duration: string, times: string[]}>{
  return this.movies;
}

public getMovieInfo(movie: {poster: string, title: string, genre: string, year: string, description: string, duration: string, times: string[]}){
  const index: number = this.movies.indexOf(movie);
}

public getMovieTimes(Movie: {poster: any, title: any, genre: any, year: any, description: string, duration: string, times: string[]}){
  return this.times;
}

public createTicket(user: {firstName: any, lastName: any, cardNum: any, cardDate: any, cardCvv: any, email: any, movie: any, time: any}){
  this.tickets.push(user);
}


}
