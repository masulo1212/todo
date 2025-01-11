import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
import { Todo } from "../types";

interface TodoState {
  todos: Todo[];
  moveDoneToEnd: boolean;
  completedPercentage: number;
  isNewTodoAdded: boolean;
  setMoveDoneToEnd: () => void;
  addTodo: (text: string) => void;
  toggleTodo: (id: number) => void;
  deleteTodo: (id: number) => void;
  deleteCompletedTodos: () => void;
  getSortedTodos: () => Todo[];
}

const initialTodos = [
  { id: 1, text: "Learn React.js", completed: true },
  { id: 2, text: "Learn Golang", completed: false },
  { id: 3, text: "Learn Docker", completed: true },
  { id: 4, text: "Learn something else", completed: false },
];

export const useTodoStore = create<TodoState>()(
  persist(
    (set, get) => ({
      todos: initialTodos,
      moveDoneToEnd: false,
      isNewTodoAdded: false,
      completedPercentage:
        Math.round(
          (initialTodos.filter((todo) => todo.completed).length /
            initialTodos.length) *
            100
        ) || 0,

      setMoveDoneToEnd: () =>
        set((state) => ({ moveDoneToEnd: !state.moveDoneToEnd })),

      addTodo: (text) =>
        set((state) => ({
          todos: [...state.todos, { id: Date.now(), text, completed: false }],
          isNewTodoAdded: true,
          completedPercentage: Math.round(
            (state.todos.filter((todo) => todo.completed).length /
              (state.todos.length + 1)) *
              100
          ),
        })),

      toggleTodo: (id) =>
        set((state) => {
          const newTodos = state.todos.map((todo) =>
            todo.id === id ? { ...todo, completed: !todo.completed } : todo
          );
          return {
            todos: newTodos,
            isNewTodoAdded: false,
            completedPercentage: Math.round(
              (newTodos.filter((todo) => todo.completed).length /
                newTodos.length) *
                100
            ),
          };
        }),

      deleteTodo: (id) =>
        set((state) => {
          const newTodos = state.todos.filter((todo) => todo.id !== id);
          return {
            todos: newTodos,
            isNewTodoAdded: false,
            completedPercentage: Math.round(
              (newTodos.filter((todo) => todo.completed).length /
                newTodos.length) *
                100
            ),
          };
        }),

      deleteCompletedTodos: () =>
        set((state) => {
          const newTodos = state.todos.filter((todo) => !todo.completed);
          return {
            todos: newTodos,
            isNewTodoAdded: false,
            completedPercentage: 0,
          };
        }),

      getSortedTodos: () => {
        const state = get();
        return state.moveDoneToEnd
          ? [...state.todos].sort(
              (a, b) => Number(a.completed) - Number(b.completed)
            )
          : state.todos;
      },
    }),
    {
      name: "todo-storage",
      storage: createJSONStorage(() => localStorage),
    }
  )
);
