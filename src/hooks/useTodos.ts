import { useState } from 'react';
import { Todo } from '../types';
const initialTodos = [
  { id: 1, text: 'Learn React.js', completed: true },
  { id: 2, text: 'Learn Golang', completed: false },
  { id: 3, text: 'Learn Docker', completed: true },
  { id: 4, text: 'Learn something else', completed: false },
];
export const useTodos = () => {
  const [todos, setTodos] = useState<Todo[]>(initialTodos);
  const [moveDoneToEnd, setMoveDoneToEnd] = useState(false);

  const addTodo = (text: string) => {
    setTodos([...todos, { id: Date.now(), text, completed: false }]);
  };

  const toggleTodo = (id: number) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const sortedTodos = moveDoneToEnd
    ? [...todos].sort((a, b) => Number(a.completed) - Number(b.completed))
    : todos;

  const completedPercentage =
    Math.round(
      (todos.filter((todo) => todo.completed).length / todos.length) * 100
    ) || 0;

  return {
    todos: sortedTodos,
    completedPercentage,
    moveDoneToEnd,
    setMoveDoneToEnd,
    addTodo,
    toggleTodo,
    deleteTodo,
  };
};
