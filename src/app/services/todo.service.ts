import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Todo } from '../model/todo';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  baseUrl = environment.baseUrl
  constructor(private http: HttpClient) { }

  findAll(): Observable<Todo[]> {
    let urlreq = this.baseUrl
    return this.http.get<Todo[]>(urlreq)
  }
}
