import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stock-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './stock-list.component.html',
  styleUrl: './stock-list.component.css'
})
export class StockListComponent implements OnInit{


  constructor() { }

  ngOnInit(): void {

  }

  data:User[] = [
    {
      name: 'Ming',
      firstName:'Mingh',
      lastName:'Young'
    },
    {
      name: 'Sai',
      firstName:'Sai',
      lastName:'Panda'
    },
    {
      name: 'Zihan',
      firstName:'Zihan',
      lastName:'Young'
    }
  ]


}
