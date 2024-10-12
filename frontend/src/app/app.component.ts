import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterOutlet } from '@angular/router';
import { HomeComponent } from './home/home.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  userName:string = "";
  Password:string = "";

constructor(private router:Router) {
  
}

onClick(){
  // console.log("Username:" + this.userName);
  // console.log("Password:" + this.Password);
  this.router.navigateByUrl('/home-component'); 
}
}
