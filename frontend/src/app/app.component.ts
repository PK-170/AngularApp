import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title:string = '';
  name:string;
  age:number = 23;
  age2:number = 23;

constructor() {
  this.title = 'first constructor';
  this.name = "second row"
}


}
