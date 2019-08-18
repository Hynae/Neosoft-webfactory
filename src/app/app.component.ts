import { OnInit, Component, Inject } from '@angular/core';
import { Observable, empty } from 'rxjs';
import { Todo } from './models/todo';
import { Store, select } from '@ngrx/store';
import { AppState } from './Store';
import { TodoListModule } from './Store/actions/todoListAction';
import { selectTodos$ } from './Store/selectors/todoListSelector';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { tap } from 'rxjs/operators';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my Neosoft todo list application';
  todosObservable$: Observable<Todo[]>;
  public todoForm: FormGroup;
  private todoListlength: number;
  titles: string;
  errorName: boolean;

  // convenience getter for easy access to form fields
  get f() { return this.todoForm.controls; }

  constructor(
    private store: Store<AppState>,
    private  fb: FormBuilder,
    private router: Router
  ) {
    this.todosObservable$ = this.store.pipe(select(selectTodos$));
  }



  ngOnInit() {
    this.store.dispatch(new TodoListModule.InitTodos());
    this.todosObservable$ = this.store.pipe(select(selectTodos$));
    this.todosObservable$ = this.store
      .pipe(
        select(selectTodos$),
        tap((todos) => {
          this.todoListlength = todos.length;
        })
      );

      this.todoForm = this.fb.group({
        title: ['', Validators.required],
        completed:[false, Validators.required],
        details: ''
      })
      
      
  }

  onChange(item) {
    item.checked = !item.checked;

  }
  createTodo(todo: Todo) {
    if (this.todoForm.invalid){
      this.errorName= true;
      return;
    }
   
      const payload = {
        ...todo,
        id: this.todoListlength + 1
      };


      this.store.dispatch(new TodoListModule.CreateTodo(payload));
      this.todoForm.reset();
      this.errorName = false;
  
  }
  deleteTodo(id: number) {
    console.log(id)

    this.store.dispatch(new TodoListModule.DeleteTodo(id));
  }

  navigateToDetails(item) {
    this.router.navigate(['details', item.id])
    console.log(item);
  }


}
