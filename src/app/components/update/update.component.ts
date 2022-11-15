import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Todo } from 'src/app/model/todo';
import { TodoService } from 'src/app/services/todo.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {

  todo: Todo = {
    titulo: '',
    descricao: '',
    dataParaFinalizar: new Date(),
    finalizado: false

  }

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private service: TodoService
  ) { }

  ngOnInit(): void {
    this.todo.id = this.route.snapshot.paramMap.get("id")!
    this.findById()
  }

  findById() {
    this.service.findById(this.todo.id)
      .subscribe((res) => {
        this.todo = res
      })
  }

  cancel() {
    this.router.navigate([''])
  }

  update(): void {
    this.formatarData()
    this.service.update(this.todo).subscribe((res) => {
      this.service.message("Uma nova tarefa foi atualizada com sucesso.")
      this.router.navigate(['']);
    }, err => {
      this.service.message("Falha ao atualizada tarefa, por favor revise os valores")
      this.router.navigate([''])
    })
  }

  formatarData(): void {
    let data = new Date(this.todo.dataParaFinalizar)
    this.todo.dataParaFinalizar = `${data.getDate()}/${data.getMonth() + 1}/${data.getFullYear()}`
  }

}

