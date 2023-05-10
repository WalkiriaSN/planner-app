import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ToDoListPage } from './to-do-list.page';
import { NgFor } from '@angular/common';


const routes: Routes = [
  {
    path: '',
    component: ToDoListPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes), NgFor],
  exports: [RouterModule],
})
export class ToDoListPageRoutingModule {}
