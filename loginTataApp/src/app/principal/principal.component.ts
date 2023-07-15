import { Component } from '@angular/core';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.scss']
})
export class PrincipalComponent {
  newTask!: string;

  tasks: string[] = [];


  handleKeyUp() {
    this.addTask();
  }
  
  addTask(): void {
    if(new RegExp('[a-zA-Z0-9]', 'g').test(this.newTask)){
      this.tasks.push(this.newTask);
    }
  }
}
