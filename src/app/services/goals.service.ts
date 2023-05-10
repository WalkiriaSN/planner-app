import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Igoal } from '../interfaces/igoal';

@Injectable({
  providedIn: 'root'
})
export class GoalsService {
  static getGoal() {
    throw new Error('Method not implemented.');
  }
  url = "http://localhost:3700/goals";

  constructor(private http:HttpClient) { }

  getGoal() {
    return this.http.get<Igoal[]>(this.url);
  }

  getGoalInfo(goal_id: any){
   return this.http.get<Igoal>(this.url + "/" + goal_id);
  }

  createGoal(data:any){
    return this.http.post<Igoal>(this.url, data);
  }

  updateGoal(data:any, goal_id:number){
    return this.http.put<Igoal>(this.url + "/" + goal_id, data);
  }
}
