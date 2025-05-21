import { Component, inject } from '@angular/core';
import { SyService } from '../../services/SyService';
import { Todo } from '../../Models/Database/Todo';
import { CommonModule } from '@angular/common';
import { FadeIn } from '../../animations';

@Component({
  selector: 'app-todo',
  imports: [ CommonModule ],
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.scss',
  animations: [FadeIn(800, false)]
})
export class TodoComponent {

  syService = inject(SyService);

  todos: Todo[] | null = null;

  ngOnInit(){
    this.refreshTodoList();
  }

  refreshTodoList(){
    this.syService.fetchMyTodos().subscribe({
      next: (todos) => {
        this.todos = todos;
      }
    });
  }
}
