import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'MyApp';
  name : string = "Jahas";
  age : number = 26;
  flag : boolean = false;
  callme()
  {
    alert("Welcome to angular");
  }
  }

