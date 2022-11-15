import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateComponent } from './components/create/create.component';
import { FinalizadosComponent } from './components/finalizados/finalizados.component';
import { TodoListAllComponent } from './components/todo-list-all/todo-list-all.component';

const routes: Routes = [
  {
    path:'',
    component:TodoListAllComponent
  },
  {
    path:'finalizados',
    component:FinalizadosComponent
  },
  {
    path:'create',
    component:CreateComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
