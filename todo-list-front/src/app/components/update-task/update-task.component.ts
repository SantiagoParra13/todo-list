import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TodoService } from 'src/app/services/todo.service';

@Component({
  selector: 'app-update-task',
  templateUrl: './update-task.component.html',
  styleUrls: ['./update-task.component.css']
})
export class UpdateTaskComponent implements OnInit, OnDestroy {

  @Input() id:any;

  taskForm: FormGroup;

  visible: boolean = false;

    showDialog() {
        this.visible = true;
    }

  constructor(private todoService:TodoService, private formBuilder: FormBuilder){
    this.taskForm = this.formBuilder.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
      dateTime: ['',Validators.required],
      conpleted: [false]
    });
  }

  ngOnDestroy(): void {
    
  }
  ngOnInit(): void {
    this.loadTask()
  }

  loadTask(){
    this.todoService.getById(this.id).subscribe({
      next: (valor:any) => console.log(valor),
      error: (error: any) => console.log("error type: " + error),
      complete: () => console.log("task load Task")
    })
  }

  updateTask(){

  }

}
