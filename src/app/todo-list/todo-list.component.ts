import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { TodoItem } from '../TodoItem';
import { Router } from '@angular/router';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  TodoChocoblast = new TodoItem(1, "Chocoblast your colleagues", "Don't forget to lock your computer", false);
  TodoRead = new TodoItem(2, "Read a book", "start with Game of thrones", false);
  TodoMeeting = new TodoItem(3, "Go to the next convention", "Check for updates", false);
  TodoDocumentation = new TodoItem(4, "Learn new framworks", "Start with tutorials", false);
  todoList: TodoItem[] = [this.TodoChocoblast, this.TodoDocumentation, this.TodoMeeting, this.TodoRead];
  isChecked: boolean;

  ngOnInit(): void {
    
    this.isChecked = false;
    this.todoList.sort((todoItem1, todoItem2) => todoItem1.id - todoItem2.id);
  }

  constructor(private router: Router) {
  }

  navigateToDetails(item) {
    this.router.navigate(['details', item.id])
  }

  onChange(item) {
        item.checked = !item.checked;
        this.todoList.sort((n1, n2) => n1.id - n2.id);
         this.todoList.sort((n1, n2) => {
            if(n1.checked == n2.checked){
              return 0;
            }
            if(!n1.checked && n2.checked){
              return -1;
            }
            if(n1.checked && !n2.checked){
              return 1;
            }
        });
  }


}
