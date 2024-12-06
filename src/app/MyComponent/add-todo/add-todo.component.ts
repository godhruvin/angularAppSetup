import { Component, EventEmitter, Output } from '@angular/core';
import { Todo } from '../../todos';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-add-todo',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './add-todo.component.html',
  styleUrl: './add-todo.component.css'
})
export class AddTodoComponent {
  //emmit for adding todo
  @Output() todoAdd : EventEmitter<Todo> = new EventEmitter();

  title:string
  description:string 
  onSubmit():void{
    const todo = {
      srNo:8,
      title:this.title,
      description:this.description,
      active:true
    }
    this.todoAdd.emit(todo);
  }
  
}
