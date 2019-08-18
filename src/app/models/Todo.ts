export interface Todo {

	id: number;
	title: string;
	checked: boolean;
	details: string;
}

export interface TodoListState {
	todoList: Todo[];
	loading: boolean;
	loaded: boolean;
	selectTodo: Todo;
}

