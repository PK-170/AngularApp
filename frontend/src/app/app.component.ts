import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterOutlet } from '@angular/router';
import { CommonModule, NgIf } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { StockBaseModule } from './stock-base/stock-base.module';


interface User{
  name:string;
  firstName:string;
  lastName:string;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule, CommonModule, StockBaseModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

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
