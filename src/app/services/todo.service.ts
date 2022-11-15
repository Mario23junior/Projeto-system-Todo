import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Todo } from '../model/todo';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  baseUrl = "http://localhost:8080/api/projet/todo/"
  constructor(
    private http: HttpClient,
    private snackBar: MatSnackBar
  ) { }

  findAll(): Observable<Todo[]> {
    let urlreq = this.baseUrl
    return this.http.get<Todo[]>(urlreq)
  }

  delete(id: any): Observable<void> {
    let url = `${this.baseUrl}${id}`
    return this.http.delete<void>(url)
  }

  update(todo: Todo):Observable<Todo> {
    let url = `${this.baseUrl}${todo.id}`
    return this.http.put<Todo>(url,todo)
  }

  message(msg: String): void {
    this.snackBar.open(`${msg}`, 'ok', {
      horizontalPosition: 'end',
      verticalPosition: 'top',
      duration: 5000
    }
    )
  }
}
