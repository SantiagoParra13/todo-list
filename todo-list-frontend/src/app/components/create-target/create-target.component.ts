import { Component } from '@angular/core';
import { TaskService } from 'src/app/services/task.service';


@Component({
  selector: 'app-create-target',
  templateUrl: './create-target.component.html',
  styleUrls: ['./create-target.component.css']
})
export class CreateTargetComponent  {

  visible: boolean = false;
   
  constructor(private taskService:TaskService,){}

  taskForm: any = {
    title: '',
    description: '',
    dateTime: '',
    completed: false
  };

  showDialog() {
      this.visible = true;
  }

  saveTask(){
     // Verificar si el formulario está vacío
  if (!this.taskForm.title || !this.taskForm.description || !this.taskForm.dateTime) {
    console.log("Por favor, complete todos los campos antes de guardar.");
    return; // Salir del método si el formulario está incompleto
  }
  
    this.taskService.saveTask(this.taskForm).subscribe({
      next: (valor:any) => {
        this.visible = false
        
      },
      error: (error:any) => console.log(error),
      complete: () => console.info('terminado observable task ')
    })
    console.log(this.taskForm)
  }

}
