import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
