import { User } from './../models/user';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

constructor() { }

getUsers(): User[]{
  return [
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

}
