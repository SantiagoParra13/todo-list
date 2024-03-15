import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable, tap} from 'rxjs'
import { baseUrl } from './baseUrl';
import { TaskupdateService } from './taskupdate.service';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor(private http:HttpClient,private taskUpdateService: TaskupdateService) { }

  getTask():Observable<any>{
    return this.http.get(`${baseUrl}/api/task`)
  }

  getById(id: any): Observable<any> {
    return this.http.get(`${baseUrl}/api/task/${id}`);
  }
  


  saveTask(task: any): Observable<any> {
    return this.http.post(`${baseUrl}/api/task/`, task).pipe(
      // Después de guardar la tarea, notificar al servicio de actualización
      tap(() => this.taskUpdateService.notifyTaskUpdated())
    );
  }

  updateTask(id:any,task: any):Observable<any>{
    return this.http.put(`${baseUrl}/api/task/${id}`,task)
  }

  deleteTask(id: any) {
    return this.http.delete(`${baseUrl}/api/task/${id}`);
  }
}
