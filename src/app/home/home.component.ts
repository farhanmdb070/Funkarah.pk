import { Component, OnInit } from '@angular/core';
import { Iframe1Component } from '../iframe1/iframe1.component';

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
  
dialog:any
  constructor() { }
  tiles: Tile[] = [
    {text: 'Featured 1', cols: 3, rows: 1, color: 'lightblue'},
    {text: 'Featured 2', cols: 1, rows: 2, color: 'lightblue'},
    {text: 'Featured 3', cols: 1, rows: 1, color: 'lightblue'},
    {text: 'Featured 4', cols: 2, rows: 1, color: '#lightblue'},

  ];
  
  openIFrameDialog(): void {
    this.dialog.open(Iframe1Component);
  }
  ngOnInit(): void {
  }

}
