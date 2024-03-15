// view-target.component.ts

import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { TaskService } from 'src/app/services/task.service';
import { TaskUpdateService } from 'src/app/services/task-update.service';

@Component({
  selector: 'app-view-target',
  templateUrl: './view-target.component.html',
  styleUrls: ['./view-target.component.css']
})
export class ViewTargetComponent implements OnInit, OnDestroy {
  tasks: any;
  private taskUpdateSubscription!: Subscription;

  constructor(private taskService: TaskService, private taskUpdateService: TaskUpdateService) {}

  ngOnInit(): void {
    this.loadTasks();
    this.taskUpdateSubscription = this.taskUpdateService.taskUpdated$.subscribe(() => this.loadTasks());
  }

  ngOnDestroy(): void {
    this.taskUpdateSubscription.unsubscribe();
  }

  loadTasks() {
    this.taskService.getTask().subscribe({
      next: (valor: any) => (this.tasks = valor),
      error: (error: any) => console.log(`Ha ocurrido un error: ${error}`),
      complete: () => console.info('Terminado observable que trae las tasks')
    });
  }


  deleteTask(id:any){
    this.taskService.deleteTask(id).subscribe({
      next:(value:any) => {console.log("eliminado correctamente"),this.loadTasks()},
      error: (error:any) => console.log("erro al eliminar" + error)
    })
  }
}
