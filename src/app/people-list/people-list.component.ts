import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-people-list',
  templateUrl: './people-list.component.html',
  styleUrls: ['./people-list.component.css']
})
export class PeopleListComponent implements OnInit {

  peopleList = [
    {
      id:1,
      name:"tarek",
      username:"bettaieb",
      phone:"96925801", 
    },
    {
      id:2,
      name:"iheb",
      username:"alaya",
      phone:"28207168", 
    },
    {
      id:3,
      name:"atef",
      username:"harbeoui",
      phone:"22445778", 
    },
  ]
  constructor() { }

  ngOnInit(): void {
  }

  Delete(person)
  {
     let index = this.peopleList.indexOf(person);
     this.peopleList.splice(index,1);
  }
}
