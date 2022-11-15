import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Route, Router } from '@angular/router';
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
    private service: TodoService,
    private router:Router,
    private snackBar: MatSnackBar

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

  finalizar(item:Todo): void{
    item.finalizado = true
    this.service.update(item).subscribe
    ((res) => {
         this.message("Terefa realizada com sucesso.")
         this.list = this.list.filter(todo => todo.id != item.id)
         this.closed++;
     })
  }

  delete(id:any): void{
     this.service.delete(id).subscribe
     ((res) => {
      if(res === null) {
         this.message("Tarefa deletada com sucesso")
         this.list = this.list.filter(todo => todo.id != id)
      }
     })
  }
 
  navegarFinalizados(){
    this.router.navigate(['finalizados'])
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
