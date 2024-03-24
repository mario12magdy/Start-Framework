import { Component, Input, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit, OnDestroy {
 @Input() childUser:string = ""

 constructor(){
  console.log("hey Mario");

  
 }
 
 ngOnInit(): void{
  console.log("hey Mario Oninit");

 }
 ngOnDestroy(): void {
  console.log("hey Mario Destroyed");

 }
}
