import { Check, X } from 'lucide-react';
import { useTodoStore } from '../store/todoStore';
import { Todo } from '../types';

export function TodoItem({ todo }: { todo: Todo }) {
  const { toggleTodo, deleteTodo } = useTodoStore();
  return (
    <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg group hover:bg-gray-100 transition-colors relative overflow-hidden">
      <div className="absolute left-0 top-0 bottom-0 w-1 bg-blue-500" />
      <div className="flex items-center">
        <button
          onClick={() => toggleTodo(todo.id)}
          className="text-blue-500 hover:text-blue-600 transition-colors mr-3 relative"
        >
          <div
            className={`w-5 h-5 border-2 ${
              todo.completed ? 'border-blue-500 bg-blue-500' : 'border-gray-300'
            } rounded-sm flex items-center justify-center`}
          >
            {todo.completed && <Check className="w-4 h-4 text-white" />}
          </div>
        </button>
        <span
          className={`${
            todo.completed ? 'line-through text-gray-400' : 'text-gray-700'
          }`}
        >
          {todo.text}
        </span>
      </div>
      <button
        onClick={() => deleteTodo(todo.id)}
        className="opacity-0 group-hover:opacity-100 text-gray-400 hover:text-gray-600 transition-opacity"
      >
        <X className="w-5 h-5" />
      </button>
    </div>
  );
}
