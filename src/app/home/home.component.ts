import { Component } from '@angular/core';
// import { log } from 'console';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  userCol:number =10;
  userNeme:string ="Mario"
  sayHi(){
    console.log("hii");
    
  }
}
