import React, { useState } from 'react';
import { ProgressBar } from './components/ProgressBar';
import { TodoList } from './components/TodoList';
import { AddTodoForm } from './components/AddTodoForm';
import { SettingsToggle } from './components/SettingsToggle';
import { Todo } from './types';

function App() {
  const [todos, setTodos] = useState<Todo[]>([
    { id: 1, text: 'Learn React.js', completed: true },
    { id: 2, text: 'Learn Golang', completed: false },
    { id: 3, text: 'Learn Docker', completed: true },
    { id: 4, text: 'Learn something else', completed: false },
  ]);
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

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4 ">
      <div className="w-full max-w-md bg-indigo-50 rounded-xl shadow-lg p-6 ">
        <h1 className="text-3xl font-semibold text-gray-800">Todo List</h1>
        <div className="space-y-4">
          <p className="text-sm text-gray-500">Add things to do</p>
          <div className="border-y border-y-2 border-gray-300 py-4">
            <ProgressBar percentage={completedPercentage} />
            <div className="mt-4">
              <TodoList
                todos={sortedTodos}
                onToggle={toggleTodo}
                onDelete={deleteTodo}
              />
            </div>
          </div>

          <SettingsToggle
            enabled={moveDoneToEnd}
            onToggle={() => setMoveDoneToEnd(!moveDoneToEnd)}
          />
          <AddTodoForm onAdd={addTodo} />
        </div>
      </div>
    </div>
  );
}

export default App;
