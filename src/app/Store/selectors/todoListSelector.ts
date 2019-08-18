import { createSelector } from  '@ngrx/store';
import { AppState } from '..';


export const selectTodoListState$ = (state: AppState) =>  state.todos;

export const selectTodos$ = createSelector(selectTodoListState$,(todos) =>  todos.todoList);