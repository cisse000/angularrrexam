import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs';
import {User} from '../models/user.model';
import {AuthService} from './auth.service';
@Injectable({
  providedIn: 'root'
})
export class UserService {
//Variable de classe contenant l'url de notre API
  private apiUrl = 'http://localhost:8080/user';
  constructor(private http: HttpClient, private auth: AuthService) {}
//fonction getUserr : va utiliser http GET pour récupérer la liste JSON
// //Depuis l'url de l'API.
  getUser():Observable<User[]>{
    let user = this.http.get<User[]>(this.apiUrl);
    return user;
  }
  addUser(user:User): Observable<any> {
    return this.http.post(this.apiUrl, JSON.stringify(user), {headers:this.auth.headers});
  }
  findById(id:number): Observable<any> {
    return this.http.get(this.apiUrl + '/' + id)
  }
  update(id:number, user:User): Observable<any> {
    return this.http.put(this.apiUrl + '/' + id, JSON.stringify(user), {headers:this.auth.headers})
  }
  delete(id:number) {
    return this.http.delete(this.apiUrl + '/' + id, {headers:this.auth.headers})
  }
}
