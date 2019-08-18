import { Todo } from 'src/app/models/todo';
import { Action } from 'rxjs/internal/scheduler/Action';

export namespace TodoListModule{
    export enum ActionTypes{
        INIT_TODOS = '[todoList] init Todos',
        CREATE_TODO = '[todoList] Create Todo',
        DELETE_TODO = '[todoList] Delete Todo',
        SELECT_TODO ='[todoList] Select Todo',
        DETAILS_TODO = '[todoList] Details Todo'
    }
    export class SelectTodo{
        readonly type = ActionTypes.SELECT_TODO;
        constructor( public payload: Todo){}
    }


    export class InitTodos {
        readonly type = ActionTypes.INIT_TODOS;
        
    }
    export class DeleteTodo {
        readonly type = ActionTypes.DELETE_TODO;
        constructor(public payload: number) {}
    }
    export  class  CreateTodo {
		readonly  type = ActionTypes.CREATE_TODO;
		constructor(public  payload: Todo) {}
    }
    export class detailsTodo {
		readonly type = ActionTypes.DETAILS_TODO;
		constructor(payload: Todo){}
	}

    
    export type Actions = InitTodos | CreateTodo | DeleteTodo | SelectTodo;
}