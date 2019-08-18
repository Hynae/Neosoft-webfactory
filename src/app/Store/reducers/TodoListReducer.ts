import { TodoListModule } from '../actions/todoListAction';
import { TodoListState  } from '../../models/todo';
import { todosMock } from 'src/app/mocks/todosMock';


const initialState: TodoListState = {
    todoList: [],
    loading: false,
    loaded: false,
    selectTodo: undefined
};

export function todosReducer(
    state: TodoListState = initialState,
    action: TodoListModule.Actions
    
): TodoListState {

  switch (action.type) {
    case TodoListModule.ActionTypes.INIT_TODOS :
        console.log(...todosMock);
    return {
        ...state,
        todoList: [
            ...todosMock 
        ]
    };
    case TodoListModule.ActionTypes.CREATE_TODO:
        return{
            ...state,
            todoList: [
                ...state.todoList,
                action.payload
            ]
        };
        case TodoListModule.ActionTypes.DELETE_TODO:
            return {
                ...state,
                todoList: state.todoList.filter(todo=>todo.id !== action.payload)
            };

            case TodoListModule.ActionTypes.SELECT_TODO:
                    return {
                        ...state,
                        selectTodo: action.payload
                    };
    default:
        return state;
    }
}