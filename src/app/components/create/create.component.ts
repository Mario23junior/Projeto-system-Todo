import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { Todo } from 'src/app/model/todo';
import { TodoService } from 'src/app/services/todo.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  todo: Todo = {
    titulo: '',
    descricao: '',
    dataParaFinalizar: new Date(),
    finalizado: false

  }

  constructor(
    private route: Router,
    private service: TodoService
  ) { }

  ngOnInit(): void {
  }

  cancel() {
    this.route.navigate([''])
  }

  save(): void {
    this.formatarData()
    this.service.create(this.todo).subscribe((res) => {
      this.service.message("Uma nova tarefa foi inserido com sucesso.")
      this.route.navigate(['']);
    }, err => {
      this.service.message("Falha ao inserir tarefa, por favor revise os valores")
      this.route.navigate([''])
    })
  }

  formatarData(): void {
    let data = new Date(this.todo.dataParaFinalizar)
    this.todo.dataParaFinalizar = `${data.getDate()}/${data.getMonth() + 1}/${data.getFullYear()}`
  }

}
