export interface Task {
  id: string;
  title: string;
}

export interface TaskState {
  tasks: Task[];
}

export type TaskAction =
  | { type: 'ADD_TASK'; payload: { title: string } }
  | { type: 'REMOVE_TASK'; payload: { id: string } };

export const initialTaskState: TaskState = {
  tasks: [],
};

export function taskReducer(state: TaskState, action: TaskAction): TaskState {
  switch (action.type) {
    case 'ADD_TASK': {
      const newTask: Task = {
        id: crypto.randomUUID(),
        title: action.payload.title,
      };
      return { ...state, tasks: [...state.tasks, newTask] };
    }
    case 'REMOVE_TASK': {
      return {
        ...state,
        tasks: state.tasks.filter((t) => t.id !== action.payload.id),
      };
    }
    default: {
  return state;
}
  }
}