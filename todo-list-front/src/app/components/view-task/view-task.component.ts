import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { TaskupdateService } from 'src/app/services/taskupdate.service';
import { TodoService } from 'src/app/services/todo.service';

@Component({
  selector: 'app-view-task',
  templateUrl: './view-task.component.html',
  styleUrls: ['./view-task.component.css']
})
export class ViewTaskComponent implements OnInit, OnDestroy {

  private taskUpdateSubscription!: Subscription;

  taskForm: FormGroup;

  task:any

  constructor(private todoService:TodoService, private taskUpdateService: TaskupdateService, private forBuilder:FormBuilder){
    this.taskForm = this.forBuilder.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
      dateTime: ['',Validators.required],
      conpleted: []
    })
  }


  ngOnDestroy(): void {
    this.taskUpdateSubscription.unsubscribe();
  }

  ngOnInit(): void {
    this.viewTask()
    this.taskUpdateSubscription = this.taskUpdateService.taskUpdated$.subscribe(() => this.viewTask());
  
  }


  viewTask(){
    this.todoService.getTask().subscribe({
      next: (valor:any) => this.task = valor,
      error: (error:any) => console.log('error type: ' + error),
      complete: () => console.log("task complete")
    })
  }

  eliminatedTask(id:any){
    this.todoService.deleteTask(id).subscribe({
      next: (values:any) => this.taskUpdateService.notifyTaskUpdated(),
      error: (error:any) => console.log("error" + error),
      complete: () => ("task eliminated completed")
    })
  }

  updateTask(id: any) {
    // Actualizar la tarea en el backend con los datos del formulario
    const updatedTask = {
      title: this.taskForm.value.title,
      description: this.taskForm.value.description,
      dateTime: this.taskForm.value.dateTime,
      completed: this.taskForm.value.completed
    };

    this.todoService.updateTask(id, updatedTask).subscribe({
      next: (values: any) => this.taskUpdateService.notifyTaskUpdated(),
      error: (error: any) => console.log('error' + error),
      complete: () => console.log('task updated completed')
    });
  }

}
