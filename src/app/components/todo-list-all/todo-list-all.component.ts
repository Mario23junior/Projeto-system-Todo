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
  closed = 0

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
      this.countClose()
    })
  }

  countClose():void {
    for(let todo of this.list) {
      if(todo.finalizado){
        this.closed++
      }
    }
  }

}
