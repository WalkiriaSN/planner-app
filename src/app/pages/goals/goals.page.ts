import { Component, OnInit } from '@angular/core';
import { Igoal } from 'src/app/interfaces/igoal';
import { GoalsService, } from 'src/app/services/goals.service';

@Component({
  selector: 'app-goals',
  templateUrl: './goals.page.html',
  styleUrls: ['./goals.page.scss'],
})
export class GoalsPage implements OnInit {

  goals!:Igoal[];


  constructor(private goalService:GoalsService,) 
  {goalService.getGoal().subscribe((results)=>{
    this.goals=results;
});
  }
ngOnInit() {
   
}
}