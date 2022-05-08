import { Component, OnInit } from '@angular/core';

export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }
  tiles: Tile[] = [
    {text: 'Featured 1', cols: 3, rows: 1, color: 'lightblue'},
    {text: 'Featured 2', cols: 1, rows: 2, color: 'lightgreen'},
    {text: 'Featured 3', cols: 1, rows: 1, color: 'lightpink'},
    {text: 'Featured 4', cols: 2, rows: 1, color: '#DDBDF1'},
  ];
  

  ngOnInit(): void {
  }

}
