import { Component, OnInit } from '@angular/core';
import { User } from './user';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  uobj: User;
  constructor() 
  {
    this.uobj = new User("Jahas", "pass123", "jahas@gmail.com");
   }
  showDetail()
  
  {
    let userdetails : string = "User Details " + this.uobj.username + " : " + this.uobj.password + " : " + this.uobj.mailid;
    document.getElementById("spres").innerText=userdetails;
  }
  ngOnInit(): void {
  }

}
