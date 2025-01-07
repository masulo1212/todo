import React from 'react';
import { ProgressBar } from './components/ProgressBar';
import { TodoList } from './components/TodoList';
import { AddTodoForm } from './components/AddTodoForm';
import { SettingsToggle } from './components/SettingsToggle';
import { useTodos } from './hooks/useTodos';

function App() {
  const {
    todos,
    completedPercentage,
    moveDoneToEnd,
    setMoveDoneToEnd,
    addTodo,
    toggleTodo,
    deleteTodo,
  } = useTodos();

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
                todos={todos}
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
