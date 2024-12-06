import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Todo } from '../../todos';
import { TodosComponent } from '../todos/todos.component'; 

@Component({
  selector: 'app-todo-itemm',
  standalone: true,
  imports: [],
  templateUrl: './todo-itemm.component.html',
  styleUrl: './todo-itemm.component.css'
})
export class TodoItemmComponent {
  @Input() todo!:Todo;
  @Output() tododelete : EventEmitter<Todo> = new EventEmitter();
 
  onClick(todo:Todo){
    console.log("function is called");
    this.tododelete.emit(todo); //emit the todo to parent component
  }
}
