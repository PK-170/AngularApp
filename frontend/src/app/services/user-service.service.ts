import { HttpClient } from '@angular/common/http';

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/User';

const user_API = "http://localhost:3000/";

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

constructor(private http: HttpClient) { }

getUsers1(): Observable<User[]>{
  return this.http.get<User[]>(user_API);
}

getUsers(){

    

}

}
