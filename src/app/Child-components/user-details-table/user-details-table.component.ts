import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-details-table',
  templateUrl: './user-details-table.component.html',
  styleUrls: ['./user-details-table.component.css']
})
export class UserDetailsTableComponent implements OnInit {
 
 
  constructor() { }
  name:any;
  rank:any;
  points:any;
 
  term:string="";

  Users:any[]=[{
    name:"Shubham Karad",
    Points:60,
    rank:1

  },
  {
    name:"Ram Bedade",
    Points:55,
    rank:2

  },
  {
    name:"Nikhil Kulkarni",
    Points:50,
    rank:3

  },
  {
    name:"Praful Nanagde",
    Points:45,
    rank:4

  }

]

  

  ngOnInit(): void {
  }

}
