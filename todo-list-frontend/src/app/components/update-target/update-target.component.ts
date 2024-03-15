import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-update-target',
  templateUrl: './update-target.component.html',
  styleUrls: ['./update-target.component.css']
})
export class UpdateTargetComponent implements  OnChanges {
  task: any;
  @Input() id: number = 0;
  @Input() title: string = '';
  @Input() description: string = '';
  @Input() dateTime: any = '';
  @Input() completed: any = '';

  visible: boolean = false;

  taskForm: any = {};

  constructor(private taskService: TaskService) {}

  showDialog() {
    this.visible = true;
  }

  ngOnChanges(changes: SimpleChanges): void {
    // Este método se llama cada vez que cambia un Input
    this.updateTaskForm();
  }



  updateTask() {
    this.taskService.updateTask(this.id, this.taskForm).subscribe({
      next: (value: any) => console.log("se actualizó"),
      error: (error: any) => console.log("hay un error mano" + error),
      complete: () => console.log("se terminó esta monda")
    });
    console.log(this.id, this.taskForm);
  }

  private updateTaskForm() {
    // Actualiza taskForm cuando cambian los Input
    this.taskForm = {
      id:this.id,
      title: this.title,
      description: this.description,
      dateTime: this.dateTime,
      completed: this.completed
    };
  }
}
