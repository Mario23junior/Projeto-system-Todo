import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TodoListAllComponent } from './components/todo-list-all/todo-list-all.component';

const routes: Routes = [
  {
    path:'',
    component:TodoListAllComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
