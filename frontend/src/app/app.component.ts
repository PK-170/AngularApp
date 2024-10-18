import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterOutlet } from '@angular/router';
import { CommonModule, NgIf } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { StockBaseModule } from './stock-base/stock-base.module';
import { LoginComponent } from "./login/login.component";



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule, CommonModule, StockBaseModule, LoginComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {




}
