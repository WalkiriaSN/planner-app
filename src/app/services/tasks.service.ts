import { Injectable } from '@angular/core';
import { Itask } from '../interfaces/itask';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TasksService {
  url = "http://localhost:3700/tasks";


    constructor(private http:HttpClient) { }

  getTask() {
    return this.http.get<Itask[]>(this.url);
  }

  getTaskInfo(task_id: any){
   return this.http.get<Itask>(this.url + "/" + task_id);
  }

 // deleteStudent(student_id:number){
 //   return this.http.delete<Itask>(this.url + "/" + student_id);
 // }

  createTask(data:any){
    return this.http.post<Itask>(this.url, data);
  }

  updateTask(data:any, task_id:number){
    return this.http.put<Itask>(this.url + "/" + task_id, data);
  }
  
}
 

//   constructor(private http:HttpClient) { }
  
//   getTask(): Observable<any> {
//     return this.http.get<Itask[]>(this.url)
//   }

//   getTaskDetails(id: string) {
//     return this.http.get<Itask[]>(this.url)
//   }
  
// };