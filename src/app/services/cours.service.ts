import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {AuthService} from './auth.service';
import {Cours} from '../models/cours.model';



@Injectable({
  providedIn: 'root',
})
export class CoursService {
  private apiUrl = 'http://localhost:8080/cours'; // 确保此 URL 指向后端的课程数据端点

  constructor(private http: HttpClient, private auth: AuthService) {}


  getCours(): Observable<Cours[]> {
    let cours = this.http.get<Cours[]>(this.apiUrl);
    return cours;
  }

  findById(id: number): Observable<any> {
    return this.http.get(this.apiUrl + '/' + id)
  }

}
