import { Component } from '@angular/core';
import { Todo } from '../../todos';
import { CommonModule } from '@angular/common';
import { TodoItemmComponent } from '../todo-itemm/todo-itemm.component';
import { AddTodoComponent } from '../add-todo/add-todo.component';

@Component({
  selector: 'app-todos',
  standalone: true,
  imports: [CommonModule, TodoItemmComponent, AddTodoComponent],
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css'],
})
export class TodosComponent {
  todos: Todo[];
  localItem: string | null;
  constructor() {
    this.localItem = localStorage.getItem('todos');
    if (this.localItem == null) {
      this.todos = [];
    } else {
      this.todos = JSON.parse(this.localItem);
    }
  }

  //handle the delete logic
  deletetodo(todo: Todo) {
    //find the index of the todo selected for deletion
    let todoId: number = this.todos.indexOf(todo);
    this.todos.splice(todoId, 1);
    //update the todo in the local storage
    localStorage.setItem("todos" , JSON.stringify(this.todos));
  }
  //handle the add logic
  addtodo(todo: Todo) {
    console.log(todo);
    this.todos.push(todo);
    //set the todo in the local storage
    localStorage.setItem("todos" , JSON.stringify(this.todos));
  }

  toggleTodo(todo: Todo) {
      const index:number = this.todos.indexOf(todo);
      this.todos[index].active = !this.todos[index].active;
    // //set the todo in the local storage
    // localStorage.setItem("todos" , JSON.stringify(this.todos));
  }
}
