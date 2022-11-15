import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/model/todo';
import { TodoService } from 'src/app/services/todo.service';

@Component({
  selector: 'app-todo-list-all',
  templateUrl: './todo-list-all.component.html',
  styleUrls: ['./todo-list-all.component.css']
})
export class TodoListAllComponent implements OnInit {


  list: Todo[] = []

  constructor(
    private service: TodoService
  ) { }

  ngOnInit(): void {
    this.findAll()
  }


  findAll(): void {
    this.service.findAll()
    .subscribe((res) => {
      this.list = res
    })
  }

}
