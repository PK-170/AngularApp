import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterOutlet, FormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  userName:string = "";
  Password:string = "";

constructor(private router:Router) {
  
}

onClick(){
  console.log("Username:" + this.userName);
  console.log("Password:" + this.Password);
  this.router.navigateByUrl('/home-component'); 
}
}
