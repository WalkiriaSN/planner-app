import { Component, OnInit } from '@angular/core';
import { Itask } from 'src/app/interfaces/itask';
import { TasksService } from 'src/app/services/tasks.service';

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.page.html',
  styleUrls: ['./to-do-list.page.scss'],
})
export class ToDoListPage implements OnInit {
  tasks!:Itask[];


  constructor(private taskService:TasksService,) 
  {taskService.getTask().subscribe((results)=>{
    this.tasks=results;
});

}

public alertButtons = ['Add'];
public alertInputs = [
  {
    placeholder: 'Task Name',
  },
  {
    type: 'datetime-local',
    placeholder: 'start date',
    // min: 1,
    // max: 100,
    },
  {
    type: 'date',
    placeholder: 'End Date',
    // min: 1,
    // max: 100,
  },
  {
    type: 'textarea',
    placeholder: 'Description',
  },
];



  ngOnInit() {
   
  }  

}
