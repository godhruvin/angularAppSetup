import { Component } from '@angular/core';
import { Todo } from '../../todos';
import { CommonModule } from '@angular/common';
import { TodoItemmComponent } from '../todo-itemm/todo-itemm.component';

@Component({
  selector: 'app-todos',
  standalone: true,
  imports: [CommonModule, TodoItemmComponent],
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css'],
})
export class TodosComponent {
  todos: Todo[];

  constructor() {
    this.todos = [
      {
        srNo: 1,
        title: 'Grocery Shopping',
        description: 'Buy milk, eggs, and bread.',
        active: true,
      },
      {
        srNo: 2,
        title: 'Workout',
        description: 'Go for a 30-minute run.',
        active: false,
      },
      {
        srNo: 3,
        title: 'Study',
        description: 'Complete TypeScript assignment.',
        active: true,
      },
    ]; 
  }

  //handle the delete logic
  deletetodo(todo: Todo) {
    //find the index of the todo selected for deletion
    let todoId : number = this.todos.indexOf(todo);
    this.todos.splice(todoId , 1);
  }
}
