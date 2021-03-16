import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { TodoService } from '../../services/todo.service';

import { Todo } from 'src/app/models/Todo';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {
  @Input() todo: Todo | undefined;
  @Output() deleteTodo: EventEmitter<Todo> = new EventEmitter();

  constructor(private todoService:TodoService) { }

  ngOnInit(): void {
  }


  //Set Dynamic Classes
  setClasses(){
    let classes = {
      todo: true,
      'is-complete': this.todo?.Completed
    }

    return classes;

  }

    onToggle(todo: any) {
      // Toggle in IU
      todo.Completed = !todo.Completed;
      // Toggle on server
      this.todoService.toggleCompleted(todo).subscribe(todo => console.log(todo));
    }

    onDelete(todo: Todo) {
      this.deleteTodo.emit(todo);

    }
  }

