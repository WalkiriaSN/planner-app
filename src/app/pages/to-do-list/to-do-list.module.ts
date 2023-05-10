import { NgModule } from '@angular/core';
import { CommonModule, NgFor } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ToDoListPageRoutingModule } from './to-do-list-routing.module';

import { ToDoListPage } from './to-do-list.page';




@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ToDoListPageRoutingModule,
    NgFor
   

  ],
  declarations: [ToDoListPage]
})
export class ToDoListPageModule {}
