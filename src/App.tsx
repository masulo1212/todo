import React, { useState } from 'react';
import { ProgressBar } from './components/ProgressBar';
import { TodoList } from './components/TodoList';
import { AddTodoForm } from './components/AddTodoForm';
import { SettingsToggle } from './components/SettingsToggle';
import { Todo } from './types';

function App() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [moveDoneToEnd, setMoveDoneToEnd] = useState(false);

  const addTodo = (text: string) => {
    setTodos([...todos, { id: Date.now(), text, completed: false }]);
  };

  const toggleTodo = (id: number) => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };

  const deleteTodo = (id: number) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const sortedTodos = moveDoneToEnd
    ? [...todos].sort((a, b) => Number(a.completed) - Number(b.completed))
    : todos;

  const completedPercentage = Math.round(
    (todos.filter(todo => todo.completed).length / todos.length) * 100
  ) || 0;

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-white rounded-xl shadow-lg p-6">
        <div className="space-y-4">
          <h1 className="text-2xl font-semibold text-gray-800">Todo List</h1>
          <p className="text-sm text-gray-500">Add things to do</p>
          
          <div className="border-t border-b border-gray-200 py-4">
            <ProgressBar percentage={completedPercentage} />
            <div className="mt-4">
              <TodoList todos={sortedTodos} onToggle={toggleTodo} onDelete={deleteTodo} />
            </div>
          </div>
          
          <SettingsToggle enabled={moveDoneToEnd} onToggle={() => setMoveDoneToEnd(!moveDoneToEnd)} />
          <AddTodoForm onAdd={addTodo} />
        </div>
      </div>
    </div>
  );
}

export default App;