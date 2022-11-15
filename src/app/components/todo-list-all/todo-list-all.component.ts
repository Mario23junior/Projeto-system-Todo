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
  listFinish: Todo[] = [];

  constructor(
    private service: TodoService
  ) { }

  ngOnInit(): void {
    this.findAll()
   }


  findAll(): void {
    this.service.findAll()
    .subscribe((res) => {
      res.forEach(todo => {
        if(todo.finalizado) {
          this.listFinish.push(todo)
        } else {
          this.list.push(todo)
        }
      })
      this.closed = this.listFinish.length
     })
  }

  delete(id:any): void{
     this.service.delete(id).subscribe
     ((res) => {
      if(res === null) {
         this.service.message("Tarefa deletada com sucesso")
         this.list = this.list.filter(todo => todo.id != id)
      }
     })
  }
 

}
