import { Component, OnInit } from '@angular/core';
import { TodoService } from 'src/app/services/todo.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-task',
  templateUrl: './create-task.component.html',
  styleUrls: ['./create-task.component.css']
})
export class CreateTaskComponent implements OnInit {
  

  taskForm: FormGroup;

  visible: boolean = false;

    showDialog() {
        this.visible = true;
    }

   constructor(private taskService:TodoService, private formBuilder: FormBuilder){
    this.taskForm = this.formBuilder.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
      dateTime: ['',Validators.required],
    });
   }

   ngOnInit(): void {
    
  }

  createTask(){
    this.taskService.saveTask(this.taskForm?.value).subscribe({
      next: (valor:any) => {
        console.log('tash create')
      this.taskForm.reset();
      this.visible=false;},
      error: (error:any) => console.log('error' + error),
      complete: () => console.log('complket')
    })
  }

}
