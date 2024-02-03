export interface State {
    todos: Todo[];
    time: Time[];
}

export interface Todo {
    description: string;
    completed: boolean;
    id: number;
}

export interface Time {
    hour: number;
    minute: number;
    second: number;
}
