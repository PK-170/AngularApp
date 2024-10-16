import { UserServiceService } from './../../services/user-service.service';
import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { User } from '../../models/User';


@Component({
  selector: 'app-stock-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './stock-list.component.html',
  styleUrl: './stock-list.component.css'
})
export class StockListComponent implements OnInit{


     Users!: User[];

  constructor(private userService: UserServiceService) { }

  ngOnInit(){

    // this.userService.getUsers1().subscribe((data: User[])=>{
    //   console.log(data);
    //   this.Users = data;

    // });

    this.userService.getUsers();
  }




}
