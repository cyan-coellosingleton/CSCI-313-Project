import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-reserve-ticket',
  templateUrl: './reserve-ticket.component.html',
  styleUrls: ['./reserve-ticket.component.css']
})
export class ReserveTicketComponent implements OnInit {
  

  movie : {poster: string, title: string, genre: string, year: string, description: string, duration: string, times: string[]} = {poster: "", title: "", genre: "", year: "", description: "", duration: "", times: []};

  ticket: {firstName: any, lastName: any, cardNum: any, cardDate: any, cardCvv: any, email: any, movie: any, time: any} = {firstName: "", lastName: "", cardNum: "", cardDate: "", cardCvv: "", email: "", movie: "", time: ""};

  constructor(public dataService: DataService) {}

  ngOnInit(): void {
    this.movie=this.dataService.movieInfo;
  }

  createTicket(){
    console.log(this.ticket);
    this.dataService.createTicket(this.ticket);
    this.ticket = {firstName: "", lastName: "", cardNum: "", cardDate: "", cardCvv: "", email: "", movie: "", time: ""};
  }



}
