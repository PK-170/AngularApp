import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterOutlet, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

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

