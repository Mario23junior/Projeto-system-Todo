import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/model/todo';

@Component({
  selector: 'app-todo-list-all',
  templateUrl: './todo-list-all.component.html',
  styleUrls: ['./todo-list-all.component.css']
})
export class TodoListAllComponent implements OnInit {


  list: Todo[] = [
    {
      titulo: "Titulo experimental",
      dataParaFinalizar: new Date,
      finalizado: false
    },
    {
      titulo: "Titulo experimental",
      dataParaFinalizar: new Date,
      finalizado: true
    },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
