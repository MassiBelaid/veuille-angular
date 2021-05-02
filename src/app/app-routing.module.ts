import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NgOnChangeComponent } from './components/ng-on-change/ng-on-change.component';
import { ToDoComponent } from './components/to-do/to-do.component';


const routes: Routes = [
  { path: ' ', component: ToDoComponent },
  {path: 'changes', component: NgOnChangeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
