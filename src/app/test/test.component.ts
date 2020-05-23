import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  name = "foulen";
  urlimage = "assets/images/angular-logo.png";
  Bookslist = ['homme qui pleure de rire','Miroir de nos peines','The Irishman'];
  myCondition = false;
  constructor() { }

  ngOnInit(): void {
  }
 
  hello(myname:String){
    alert("hello "+myname);
  }
}
