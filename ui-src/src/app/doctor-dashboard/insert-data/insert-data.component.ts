import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-insert-data',
  templateUrl: './insert-data.component.html',
  styleUrls: ['./insert-data.component.css']
})
export class InsertDataComponent implements OnInit {
  numbers=[];
  constructor() {
    this.numbers = Array.from({length: 200}, (v, k) => k+1); 

   }

  ngOnInit() {
  }

}
